# -*- coding: utf-8 -*-
"""
환불.md -> PDF 변환 스크립트 (weasyprint 사용)
Obsidian wiki-link 이미지 (![[...]]) 를 일반 img 태그로 변환한 후 HTML로 만들고,
weasyprint 로 PDF 출력.
"""
import os
import re
import sys
import base64
from pathlib import Path

import markdown
from weasyprint import HTML, CSS

VAULT = Path(r"G:\obsidian_onethelab\claudian")
MD_FILE = VAULT / "환불.md"
IMG_DIR = VAULT / "99_ex_files"

def _find_desktop():
    """Windows 의 실제 Desktop 경로 (OneDrive 리디렉션 반영) 탐색."""
    try:
        import ctypes, ctypes.wintypes
        buf = ctypes.create_unicode_buffer(ctypes.wintypes.MAX_PATH)
        ctypes.windll.shell32.SHGetFolderPathW(None, 0, None, 0, buf)
        p = Path(buf.value)
        if p.exists():
            return p
    except Exception:
        pass
    return Path(os.path.expanduser("~")) / "Desktop"

OUT_PDF_NAME = "환불요청서.pdf"
OUT_PDF_DESKTOP = _find_desktop() / OUT_PDF_NAME
OUT_PDF_DOWNLOADS = Path(os.path.expanduser("~")) / "Downloads" / OUT_PDF_NAME

def embed_image_as_data_uri(filename: str) -> str:
    """이미지 파일을 data URI 로 변환 (PDF 내 임베드)."""
    candidates = [IMG_DIR / filename, VAULT / filename]
    img_path = next((p for p in candidates if p.exists()), None)
    if img_path is None:
        print(f"[WARN] image not found: {filename}", file=sys.stderr)
        return ""
    ext = img_path.suffix.lower().lstrip(".")
    mime = {"png": "image/png", "jpg": "image/jpeg", "jpeg": "image/jpeg",
            "gif": "image/gif", "webp": "image/webp"}.get(ext, "image/png")
    b64 = base64.b64encode(img_path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{b64}"

def convert_wiki_links(md_text: str) -> str:
    """![[filename.ext]] 를 표준 markdown 이미지로 변환."""
    def repl(m):
        fname = m.group(1).strip()
        data_uri = embed_image_as_data_uri(fname)
        if not data_uri:
            return f"*(이미지 로드 실패: {fname})*"
        return f'<img src="{data_uri}" alt="{fname}" class="embed-img" />'
    return re.sub(r"!\[\[([^\]]+)\]\]", repl, md_text)

CSS_STYLE = """
@page {
    size: A4;
    margin: 18mm 15mm 18mm 15mm;
    @bottom-center {
        content: counter(page) " / " counter(pages);
        font-family: "Malgun Gothic", "맑은 고딕", sans-serif;
        font-size: 9pt;
        color: #888;
    }
}
html, body {
    font-family: "Malgun Gothic", "맑은 고딕", "Segoe UI", "Apple SD Gothic Neo", sans-serif;
    font-size: 10.5pt;
    line-height: 1.55;
    color: #222;
}
h1 {
    font-size: 20pt;
    color: #1a56b8;
    border-bottom: 2px solid #1a56b8;
    padding-bottom: 6px;
    margin-top: 0;
}
h2 {
    font-size: 14pt;
    color: #1a56b8;
    margin-top: 18pt;
    border-left: 4px solid #1a56b8;
    padding-left: 8px;
}
h3 {
    font-size: 12pt;
    color: #333;
    margin-top: 14pt;
}
p { margin: 6pt 0; }
hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 14pt 0;
}
blockquote {
    border-left: 3px solid #888;
    background: #f7f7f7;
    padding: 6pt 10pt;
    color: #444;
    margin: 8pt 0;
}
table {
    border-collapse: collapse;
    width: 100%;
    margin: 8pt 0;
    font-size: 10pt;
}
th, td {
    border: 1px solid #ccc;
    padding: 5pt 8pt;
    text-align: left;
    vertical-align: top;
}
th {
    background: #eef3fa;
    font-weight: bold;
}
code {
    font-family: "Consolas", "D2Coding", monospace;
    background: #f2f2f2;
    padding: 1pt 4pt;
    border-radius: 3px;
    font-size: 9.5pt;
}
img.embed-img {
    display: block;
    max-width: 100%;
    margin: 8pt auto;
    border: 1px solid #ddd;
    border-radius: 4px;
}
ol, ul { margin: 6pt 0 6pt 20pt; }
li { margin: 3pt 0; }
strong { color: #111; }
a { color: #1a56b8; text-decoration: underline; word-break: break-all; }
"""

def main():
    md_text = MD_FILE.read_text(encoding="utf-8")
    md_text = convert_wiki_links(md_text)

    html_body = markdown.markdown(
        md_text,
        extensions=["tables", "fenced_code", "nl2br", "sane_lists"],
    )

    html_doc = f"""<!doctype html>
<html lang="ko">
<head><meta charset="utf-8"><title>환불 요청서</title></head>
<body>{html_body}</body>
</html>"""

    html_obj = HTML(string=html_doc, base_url=str(VAULT))
    pdf_bytes = html_obj.write_pdf(stylesheets=[CSS(string=CSS_STYLE)])

    for out in (OUT_PDF_DESKTOP, OUT_PDF_DOWNLOADS):
        try:
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_bytes(pdf_bytes)
            size = out.stat().st_size
            # ASCII 안전 출력 (콘솔 cp949 이슈 회피)
            sys.stdout.buffer.write(f"[OK] {out} ({size:,} bytes)\n".encode("utf-8"))
        except Exception as e:
            sys.stdout.buffer.write(f"[FAIL] {out}: {e}\n".encode("utf-8"))

if __name__ == "__main__":
    main()
