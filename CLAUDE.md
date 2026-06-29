# 01-onethelab

Obsidian 노트를 Quartz로 HTML 변환해 GitHub Pages에 발행하는 프로젝트.

## 절대 규칙: 경로

- **절대경로 금지.** Quartz 설정·스크립트·workflow 어디에도 `g:\...`, `F:\...` 같은
  파일시스템 절대경로를 넣지 않는다. 항상 상대경로 사용.
- **이 프로젝트 폴더(`01-onethelab`) 하위만 사용한다.** 외부 vault를 junction/symlink로
  참조하지 않는다. 발행할 노트는 프로젝트 안으로 복사해 쓴다.

## 구조

git repo 루트 = **프로젝트 루트**(`01-onethelab`). 이 전체가 `gunug/onethelab-quartz`로 push됨.

```
01-onethelab/                ← git repo 루트
  01_publish/                ← 발행 소스. 여기 .md만 공개됨
    index.md                 ← 홈페이지
  quartz/                    ← Quartz v4 엔진
    quartz.config.ts         ← 설정 (baseUrl: quartz.onethelab.com)
  CNAME                      ← 커스텀 도메인(quartz.onethelab.com). workflow가 public/CNAME으로 복사
  .github/workflows/deploy.yml  ← push 시 자동 빌드/배포 (반드시 repo 루트 .github)
  .gitignore                 ← .obsidian, .vscode, quartz/node_modules, quartz/public 제외
```

> GitHub Actions는 push된 repo만 빌드한다. 발행 노트는 repo 루트 안(`01_publish/`)에 있어야
> 자동발행된다. 콘텐츠 폴더가 quartz 밖이므로 빌드 시 `-d ../01_publish` 로 지정한다.

## 빌드

```
cd quartz
npx quartz build -d ../01_publish            # 빌드
npx quartz build -d ../01_publish --serve    # 로컬 미리보기
```

- 콘텐츠 폴더가 quartz 밖(`../01_publish`)이라 항상 `-d ../01_publish` 플래그 필요.
- workflow도 `working-directory: quartz` + `npx quartz build -d ../01_publish`, 아티팩트 `quartz/public`.

## 발행 방법

1. 발행할 노트를 `01_publish/` 로 복사
2. 비공개로 둘 노트는 frontmatter에 `draft: true`
3. commit & push → GitHub Actions가 자동 배포
4. 사이트: https://quartz.onethelab.com/

## Git

- `origin` = `gunug/onethelab-quartz` (public)
- `upstream` = `jackyzha0/quartz` (Quartz 업데이트 받을 때만)
- 기본 브랜치: `main`
