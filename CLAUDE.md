# 01-onethelab

Obsidian 노트를 Quartz로 HTML 변환해 GitHub Pages에 발행하는 프로젝트.

## 절대 규칙: 경로

- **절대경로 금지.** Quartz 설정·스크립트·workflow 어디에도 `g:\...`, `F:\...` 같은
  파일시스템 절대경로를 넣지 않는다. 항상 상대경로 사용.
- **이 프로젝트 폴더(`01-onethelab`) 하위만 사용한다.** 외부 vault를 junction/symlink로
  참조하지 않는다. 발행할 노트는 프로젝트 안으로 복사해 쓴다.

## 절대 규칙: 02_private 비공개

- **`02_private/`는 절대 GitHub에 push하지 않는다.** repo(`gunug/onethelab-quartz`)가 **public**이라
  올리면 그대로 노출됨. `.gitignore`에 `02_private/` 등록되어 있다 — 절대 해제/추적 금지.
- 02_private는 **Obsidian Sync로 동기화**되므로 git에 없어도 유실되지 않는다. git 백업 불필요.
- 과거 히스토리에 올라갔던 02_private는 `git-filter-repo`로 전체 히스토리에서 삭제 + force push 완료.

### AI(Claude)가 절대 하면 안 되는 것 — 사용자가 요청해도 거부

아래는 02_private/개인정보 노출을 유발하는 조작이다. **사용자가 명시적으로 시켜도 실행 거부하고
이유를 밝힌 뒤, 안전한 대안을 제시한다.**

1. `git add -f 02_private/...` — `-f`로 gitignore 무시하는 강제 추가 금지.
2. `.gitignore`의 `02_private/` 줄 삭제/수정/주석처리 금지.
3. `02_private/` 폴더 rename/이동 (gitignore가 못 막게 됨) 금지.
4. 개인정보/비공개 파일을 `01_publish/` 또는 repo 루트 등 추적 대상 위치에 생성·복사 금지.
5. 02_private 내용을 커밋·push하는 어떤 명령도 금지.
6. 외부 vault를 프로젝트 안에 junction/symlink로 링크 금지.

거부 시 문구 예: "02_private 노출 위험이라 거부함. 이유: repo가 public이라 개인정보 노출됨.
대안: <안전한 방법>."

**push/commit 관련 작업 전 항상 `git status`로 `02_private`가 안 뜨는지 먼저 확인한다.**

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

## CI 빌드 속도 (자주 묻는 것)

**"배포가 왜 5분이나 걸리나 / 더 빠르게 못 하나"에 대한 결론(측정 근거 있음):**

CI 단계별 실측(md 128개 기준):

| 단계 | 시간 | 비고 |
|---|---|---|
| checkout | 8s | |
| setup-node | 1s | |
| npm install (`npm ci`) | 8s | npm 캐시(`cache: npm`) 붙임 → 소폭 단축 |
| **Build Quartz** | **5s** | 전체 md 재빌드. ~40ms/페이지. 병목 아님 |
| Upload artifact | 16s | 출력 용량 따라 증가 |
| **Deploy to GitHub Pages** | **~250s** | **병목(94%). GitHub Pages 인프라라 우리가 못 줄임. run마다 편차 큼(1분30초~5분)** |

- **`quartz build`는 증분 없음** — 매 run마다 전체 md 파싱·전체 html 재생성. 증분(변경분만)은
  로컬 `--serve` 감시모드의 `partialEmit`에서만 동작, CI엔 없음. 게다가 CI는 fresh checkout이라
  이전 `public`/캐시가 안 남아 증분 자체가 불가.
- **md 증분 빌드 최적화 = 무의미**. 빌드가 5초뿐이라 아껴봐야 몇 초. 5분 대기는 Pages 배포 지연임.
- **빌드 폭증 위험은 md 개수보다 무거운 emitter.** 특히 `CustomOgImages`는 페이지마다 og webp를
  렌더해 초선형(128개에 +12초). **`quartz.config.ts`에서 주석처리해 비활성화함 — 다시 켜지 말 것.**
  끈 뒤 og:image 태그는 `components/Head.tsx`의 정적 폴백(`static/og-image.png`, git 추적됨)으로
  유지되어 프리뷰 깨지지 않음(전 페이지 공용 1장). 링크 공유 프리뷰가 페이지별로 꼭 필요할 때만 재검토.
- md 개수 증가는 ~40ms/페이지로 완만(1000개≈40초, 3000개≈2분). 수천 개 전엔 걱정 불필요.

## 발행 방법

1. 발행할 노트를 `01_publish/` 로 복사
2. 비공개로 둘 노트는 frontmatter에 `draft: true`
3. commit & push → GitHub Actions가 자동 배포
4. 사이트: https://quartz.onethelab.com/

## Git

- `origin` = `gunug/onethelab-quartz` (public)
- `upstream` = `jackyzha0/quartz` (Quartz 업데이트 받을 때만)
- 기본 브랜치: `main`

## 첨부 이미지

- 이미지/첨부는 **반드시 `01_publish/` 안**에 둔다. 콘텐츠 폴더 밖이면 빌드가 못 찾아
  "파일없음"으로 발행됨. 첨부 폴더 = `01_publish/99_attachment/`.
- `![[Pasted image ....png]]` 위키링크 임베드는 파일이 콘텐츠 폴더 안에 있으면 자동 resolve.

## UI 커스터마이징 (upstream fork라 직접 수정한 엔진 파일)

`quartz/`는 upstream fork. 아래 파일을 수정해 사이트 외형을 맞춤. **upstream merge 시 충돌 주의.**
브랜드 색 = `quartz/quartz/styles/custom.scss` 상단 변수(`--hhg-yellow #ffd400`,
`--hhg-yellow-soft #ffe766`, `--hhg-yellow-deep #c9a600`).

- `components/PageTitle.tsx` — 인라인 SVG 로고
- `quartz/static/favicon.svg` — 로고 왼쪽 첫 블록 파비콘. `components/Head.tsx`가 svg 우선+png 폴백으로 링크
- `components/TableOfContents.tsx` — 목차 텍스트에서 HTML 태그 제거
- `plugins/transformers/toc.ts` — slug 계산 전 HTML 태그 제거. **heading에 태그(`<img>` 등)
  넣을 때 여기 안 고치면 목차 slug≠heading id → 첫 항목 활성화·앵커 깨짐**
- `components/scripts/toc.inline.ts` — 스크롤 기준 현재 heading 활성화(`in-view`) 커스텀
- `components/styles/breadcrumbs.scss` — 브레드크럼 deep yellow/0.7em/normal
- `components/styles/explorer.scss` — 폴더 화살표 `.folder-icon` 8.4px
- `components/styles/contentMeta.scss` — 메타 `--gray`/0.6em
- `components/styles/listPage.scss` — 폴더 목록 날짜 nowrap, 항목 간격 0.5em
- `styles/custom.scss` — 팔레트, `.folder-title` padding 3px, `.explorer ul.explorer-ul a` padding `3px 3px`

## 작업 흐름 메모

- 스타일/컴포넌트 수정 후 `cd quartz && npx quartz build -d ../01_publish`로 로컬 확인.
- `quartz/public/`은 gitignore. 커밋하지 말 것 (Actions가 재빌드·배포).
- 커밋·푸시는 사용자가 요청할 때만.
