
<iframe width="560" height="315" src="https://www.youtube.com/embed/sly2u8BIi9E?si=20w65Y5UA6fs8Ppi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

homebrew 설치
터미널에 brew install git 이라고 입력
기본브랜치 이름 main으로 바꾸기
기본에디터 VSCode로 바꾸기

폴더에서 마우스 우클릭 PowerShell 창 열기
```
git config --global user.email "메일주소"
git config --global user.name "유저이름"
```

```
git init
```

```
git add 파일명
git commit -m '메세지'
```

![[Pasted image 20260702084513.png]]
```
[작업 폴더] ── git add ──▶ [staging area] ── git commit ──▶ [repository]
```

```
[작업 디렉토리]
   ↓ git add
[스테이징 영역]
   ↓ git commit
[로컬 저장소]
   ↓ git push
[원격 저장소(origin)]
```

```
git add .
```
모든파일 staging 하기

```
git status
```
staging 해놓은 파일들 표시

```
git log --all --oneline
```


<iframe width="560" height="315" src="https://www.youtube.com/embed/xD9GnHKveRk?si=k_3eyukPqFIZZN5r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```
git diff
git difftool
```

이전 파일과 현재차일의 차이점. vim 에디터로 실행됨.

![[Pasted image 20260702084523.png]]



<iframe width="560" height="315" src="https://www.youtube.com/embed/XFm2qNs30BE?si=wLQJ9-eEUla6ZQfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```
git branch 브랜치이름
```
브랜치 이름으로 사본을 하나 생성

```
git switch 브랜치이름
git status
```

```
git switch main
git merge coupon
```

conflict

---

push : 로컬저장소의 변경사항을 원격 저장소로 전송
switch : 브랜치 변경
merge : 브랜치 병합
PR(pull Rewuest) : 브랜치를 메인에 병합해 달라고 요청하는것

버전관리, 백업, 협업

github에서 커밋 이력이나, 코드 수정변경 사항등을 열람.

fetch 

---

origin/main   ← 원격
main          ← 내 로컬 브랜치 (추적 중)


git pull origin master
fatal: coudn't find remote ref master

git push origin master

---

Clone, Push, Pull, Fetch 변경 내용 가져오기

---

```
git checkout develop
```
* 브랜치 이동

```
git checkout -b feature/login
```
* 브랜치 생성, 이동

```
git checkout a1b2c3d
```
* a1b2c3d 커밋으로 이동

---

```
git switch main      # 브랜치 이동
git switch -c new    # 브랜치 생성
git restore file.txt # 파일 되돌리기
```

---

## 📦 Clone / Checkout

``- `git clone <url>` : 원격 저장소를 처음으로 로컬에 전체 복사 - `git checkout <branch>` : 현재 저장소에서 작업 브랜치를 변경 - `git checkout -b <branch>` : 새 브랜치를 만들고 즉시 이동``

---

## 🔄 Fetch / Pull

``- `git fetch` : 원격 저장소 변경사항을 로컬에 가져오기만 함 - `git pull` : 원격 변경사항을 가져와 현재 브랜치에 즉시 병합``

---

## 🔀 Merge / Rebase

``- `git merge <branch>` : 다른 브랜치의 변경사항을 병합 커밋으로 합침 - `git rebase <branch>` : 현재 브랜치의 커밋을 다른 브랜치 위로 재정렬``

---

## 🎯 HEAD / 상태 관련

``- `HEAD` : 현재 체크아웃되어 있는 기준 브랜치 또는 커밋 - `detached HEAD` : 브랜치가 아닌 특정 커밋을 직접 가리키는 상태``

---

## 🌿 브랜치 이동 (최신 권장)

``- `git switch <branch>` : 브랜치 이동 전용 명령어 - `git switch -c <branch>` : 새 브랜치를 만들고 이동``

---

## ⚠️ 실무 주의

``- `git rebase` : 이미 push된 공유 브랜치에서는 사용하면 안 됨 - `git fetch` : 협업 시 안전하게 변경사항을 확인하는 용도로 권장``

---

```
git checkout main        # 브랜치 이동
git checkout -b feature  # 브랜치 생성
git checkout a1b2c3d     # 커밋으로 이동 (detached HEAD)
git checkout -- file.txt # 파일 되돌리기

git switch main
git switch -c feature
git switch --detach <commit>
git restore <file>
```
* checkout 사고 방지용으로 의미에 따라 명령어가 교체됨.

![[Pasted image 20260702084531.png]]

