# 01-onethelab

Obsidian 노트를 [Quartz](https://quartz.jzhao.xyz) v4로 HTML 변환해 GitHub Pages에 발행하는 프로젝트.

- 사이트: https://quartz.onethelab.com/
- 발행 저장소: [gunug/onethelab-quartz](https://github.com/gunug/onethelab-quartz)

## 현재 상태 (2026-06-30)

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
