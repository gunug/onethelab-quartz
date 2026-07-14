# ⚠️ static/ — 커스텀 툴은 여기서 더 이상 개발 안 함

이 폴더의 **커스텀 HTML 툴**(아이콘 빌더/갤러리/그리드, 디자인 시스템 등)은
**`02-onetheutil` 프로젝트로 이전**되었고, **여기서는 더 이상 개발/수정하지 않는다.**

- 활성 개발 위치: **`02-onetheutil`** (icon builder, svg gallery, svg grid builder 등)
- 여기 남은 파일은 **삭제하지 않고 그대로 둠** — quartz 빌드/링크가 깨질 것을 우려한 잔여물.
- 즉 **frozen(동결)** 상태. 기능 변경이 필요하면 `02-onetheutil` 에서 작업하고,
  필요 시 산출물만 이 위치로 반영한다. 이 폴더 파일을 직접 고치지 말 것.

## 이전되어 동결된 것 (수정 금지)

- `icon/icon_builder.html`, `icon/svg_gallery.html`, `icon/svg_grid_builder.html`
- `icon/` 하위 svg·manifest·favicon·규칙 문서 등 툴 관련 일체
- `design_system.html`

## quartz 가 실제로 쓰는 자산 (건드리면 사이트 영향 — 이전 대상 아님)

- `favicon.svg` — 사이트 파비콘 (`components/Head.tsx` 가 참조)
- `og-image.png` — 링크 프리뷰 정적 폴백
- `giscus/` — 댓글 위젯 자산

> 정리: **툴은 02-onetheutil 에서, 여기는 동결.** static 을 업데이트하려거든 먼저
> 이 문서를 확인하고 02-onetheutil 쪽인지 판단할 것.
