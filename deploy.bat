@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo  One The Lab - Quartz deploy
echo ============================================

echo.
echo [1/5] Build prerequisites check (node/npm/node_modules)...
python check_build_deps.py
if not "%ERRORLEVEL%"=="0" (
  echo.
  echo [FAIL] prerequisite check failed. abort. no build/commit/push.
  echo.
  pause
  exit /b 1
)

echo.
echo [2/5] Local Quartz build check...
echo ---------- BUILD LOG START (copy from here on failure) ----------
pushd quartz
call npx quartz build -d ../01_publish 2>&1
set "BUILD_ERR=%ERRORLEVEL%"
popd
echo ---------- BUILD LOG END ----------
if not "%BUILD_ERR%"=="0" (
  echo.
  echo [FAIL] build error. abort. no commit/push.
  echo   ^> Copy everything between BUILD LOG START and END above,
  echo   ^> then paste it to your AI agent to diagnose.
  echo.
  pause
  exit /b 1
)

echo.
echo [3/5] Staging changes...
git add -A

echo.
echo [4/5] Commit...
set "MSG=%~1"
if "%MSG%"=="" set "MSG=Update notes"
git diff --cached --quiet && echo  - no changes, skip commit || git commit -m "%MSG%"

echo.
echo [5/5] Push...
git push
if not "%ERRORLEVEL%"=="0" echo [FAIL] push error.& exit /b 1

echo.
echo ============================================
echo  Deploy triggered. GitHub Actions building...
echo  Site:    https://quartz.onethelab.com/
echo  Actions: https://github.com/gunug/onethelab-quartz/actions
echo ============================================
endlocal
