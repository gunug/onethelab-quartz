#!/usr/bin/env python3
"""Preflight check for the Quartz build: verify node/npm exist and
quartz/node_modules matches quartz/package.json, reinstalling if not.

Exit code 0 = ready to build. Non-zero = abort (deploy.bat stops before build).
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
QUARTZ_DIR = ROOT / "quartz"
PACKAGE_JSON = QUARTZ_DIR / "package.json"
NODE_MODULES = QUARTZ_DIR / "node_modules"


def fail(msg):
    print(f"[FAIL] {msg}")
    sys.exit(1)


def check_tool(name):
    path = shutil.which(name)
    if not path:
        fail(
            f"'{name}' not found on PATH. Install Node.js (https://nodejs.org/) "
            f"then re-run deploy."
        )
    print(f"  - {name}: {path}")


def dep_dir_name(pkg_name):
    return NODE_MODULES / pkg_name


def missing_deps():
    data = json.loads(PACKAGE_JSON.read_text(encoding="utf-8"))
    deps = list(data.get("dependencies", {}).keys()) + list(
        data.get("devDependencies", {}).keys()
    )
    missing = []
    for name in deps:
        pkg_json = dep_dir_name(name) / "package.json"
        if not pkg_json.exists():
            missing.append(name)
    return missing


def npm_install():
    lockfile = QUARTZ_DIR / "package-lock.json"
    cmd = ["npm", "ci"] if lockfile.exists() else ["npm", "install"]
    print(f"  - running: {' '.join(cmd)} (cwd={QUARTZ_DIR})")
    result = subprocess.run(cmd, cwd=QUARTZ_DIR, shell=True)
    if result.returncode != 0:
        fail(f"npm install failed (exit {result.returncode}).")


def main():
    print("[deps] checking node/npm...")
    check_tool("node")
    check_tool("npm")

    if not PACKAGE_JSON.exists():
        fail(f"package.json not found at {PACKAGE_JSON}")

    print("[deps] checking quartz/node_modules against package.json...")
    if not NODE_MODULES.exists():
        print("  - node_modules missing entirely")
        npm_install()

    missing = missing_deps()
    if missing:
        print(f"  - {len(missing)} package(s) missing/incomplete: {', '.join(missing)}")
        npm_install()
        missing = missing_deps()
        if missing:
            fail(
                "still missing after install: " + ", ".join(missing) +
                " -- check the npm log above."
            )

    print("[deps] OK, ready to build.")


if __name__ == "__main__":
    main()
