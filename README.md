# 01-onethelab

Obsidian 노트를 [Quartz](https://quartz.jzhao.xyz) v4로 HTML 변환해 GitHub Pages에 발행하는 프로젝트.

- 사이트: https://quartz.onethelab.com/
- 발행 저장소: [gunug/onethelab-quartz](https://github.com/gunug/onethelab-quartz)

## 현재 상태 (2026-07-01)

발행 파이프라인 구성 완료.

- ✅ Quartz v4 설치, `upstream`(jackyzha0/quartz) 연결
- ✅ `baseUrl` = `quartz.onethelab.com` (커스텀 도메인)
- ✅ git repo 루트 = 프로젝트 루트, 발행 소스 = `01_publish/`
- ✅ GitHub Actions 자동 배포 workflow (`.github/workflows/deploy.yml`)
- ✅ 홈페이지 `index.md` 작성

## 구조

git repo 루트 = 프로젝트 루트. 전체가 `gunug/onethelab-quartz`로 push됨.

```
01-onethelab/                     # = git repo 루트 (GitHub push 대상)
├─ 01_publish/                    # 발행 소스. 여기 .md만 공개됨
│  └─ index.md                    # 홈페이지
├─ quartz/                        # Quartz v4 엔진
│  └─ quartz.config.ts            # 설정 (baseUrl 등)
├─ CNAME                          # 커스텀 도메인 (quartz.onethelab.com). 빌드 시 public/로 복사됨
├─ .github/workflows/deploy.yml   # push 시 자동 빌드/배포 (repo 루트 .github)
├─ .gitignore                     # .obsidian, .vscode, quartz/node_modules·public 제외
├─ CLAUDE.md                      # 프로젝트 규칙
└─ README.md
```

## 빌드

```bash
cd quartz
npx quartz build -d ../01_publish            # 빌드
npx quartz build -d ../01_publish --serve    # 로컬 미리보기
```

콘텐츠 폴더가 quartz 밖(`../01_publish`)이라 항상 `-d ../01_publish` 플래그 필요.

## 발행 방법

1. 발행할 노트를 `01_publish/` 로 복사
2. 비공개 노트는 frontmatter에 `draft: true`
3. commit & push → GitHub Actions 자동 배포

## 규칙

- **절대경로 금지** (`g:\...`, `F:\...` 등 설정·스크립트·workflow 어디에도 금지). 항상 상대경로.
- 외부 vault를 junction/symlink로 참조 금지. 발행 노트는 프로젝트 안으로 복사.
- 기본 브랜치: `main` / `origin` = 발행, `upstream` = Quartz 업데이트용

자세한 규칙은 [CLAUDE.md](CLAUDE.md) 참고.

## 첨부 이미지 (중요)

- 이미지·첨부는 **반드시 `01_publish/` 안**에 있어야 발행됨. 콘텐츠 폴더(`-d ../01_publish`)
  밖의 파일은 빌드가 못 찾아 "파일없음"으로 뜬다.
- 첨부 폴더 = `01_publish/99_attachment/`. Obsidian에서 붙여넣은 `![[Pasted image ....png]]`
  위키링크 임베드는 파일이 이 안에 있으면 Quartz가 자동으로 emit·resolve 한다.

## 커스터마이징 위치 (UI 수정 파일)

`quartz/`는 upstream(jackyzha0/quartz) fork라 아래 엔진 파일을 직접 수정했다.
**upstream merge 시 충돌 가능** → 아래 목록을 먼저 확인할 것.

브랜드 색 변수는 [quartz/quartz/styles/custom.scss](quartz/quartz/styles/custom.scss) 상단:
`--hhg-yellow: #ffd400`, `--hhg-yellow-soft: #ffe766`, `--hhg-yellow-deep: #c9a600`.

| 파일 | 수정 내용 |
|------|-----------|
| `components/PageTitle.tsx` | 인라인 SVG 로고(One The Lab, yellow) + 스타일 |
| `quartz/static/favicon.svg` | 로고 **왼쪽 첫 블록**만 뽑은 파비콘 |
| `components/Head.tsx` | favicon: svg 우선 + png 폴백 |
| `components/TableOfContents.tsx` | 목차 항목 텍스트에서 HTML 태그 제거(`<[^>]*>` strip) |
| `plugins/transformers/toc.ts` | slug 계산 전 HTML 태그 제거 → 목차 slug이 heading id와 일치(활성화·앵커 정상). **heading에 `<img>` 등 태그 넣으면 여기 안 고치면 첫 항목 활성화 깨짐** |
| `components/scripts/toc.inline.ts` | 스크롤 위치 기준 현재 heading 활성화(`in-view`) 커스텀 로직 |
| `components/styles/breadcrumbs.scss` | 브레드크럼: deep yellow, 0.7em, normal weight |
| `components/styles/explorer.scss` | 폴더 접기 화살표(`.folder-icon`) 8.4px |
| `components/styles/contentMeta.scss` | 메타(날짜 등): `--gray`, 0.6em |
| `components/styles/listPage.scss` | 폴더 목록: 날짜 `nowrap`, 항목 간격 0.5em |
| `styles/custom.scss` | 브랜드 팔레트, `.folder-title` 좌우 padding 3px, `.explorer ul.explorer-ul a` padding `3px 3px`, 현재 페이지 yellow 강조 등 |

## Quartz 명령 요약

```bash
cd quartz
npx quartz build -d ../01_publish            # 빌드 (항상 -d 필요)
npx quartz build -d ../01_publish --serve    # 로컬 미리보기
```

빌드 산출물 = `quartz/public/` (gitignore됨). commit & push 하면 GitHub Actions가
동일 빌드 후 배포하므로, 로컬 빌드는 확인용이고 `public/`은 커밋하지 않는다.
