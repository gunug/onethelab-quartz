# 코딩 컨벤션 (Coding Conventions)

> 이 문서는 코딩 시 일관성을 유지하기 위한 네이밍 규칙과 코딩 컨벤션을 정리한 문서입니다.

---

# 변수명 규칙

변수명 규칙을 지키지 않을 경우 오류가 발생할 수 있으므로 반드시 준수해야 합니다.

| 규칙 | 설명 | 예시 |
|------|------|------|
| 한글 사용 금지 | 변수명에는 영문자, 숫자, 밑줄(_)만 사용 | `name`, `user_name` |
| 숫자로 시작 금지 | 첫 글자는 영문자 또는 `_` | ❌ `1name` / ✅ `name1` |
| 특수기호 사용 금지 | `_` 외의 특수문자는 사용하지 않음 | ❌ `name$` / ✅ `name_` |
| 띄어쓰기 금지 | 공백 대신 `_` 또는 Camel Case 사용 | ❌ `user name` / ✅ `userName` |
| 예약어 사용 금지 | 언어의 예약어(if, for 등)는 변수명으로 사용할 수 없음 | ❌ `if`, `for` |

---

# 코딩 컨벤션 (Coding Conventions)

코딩 컨벤션은 코드의 **일관성**과 **가독성**을 높이기 위한 규칙입니다.

이를 통해

- 협업이 쉬워지고
- 유지보수가 편해지며
- 코드 품질을 향상시킬 수 있습니다.

## 대표적인 네이밍 규칙

| 표기법 | 사용처 | 예시 |
|---------|---------|------|
| Snake Case | DB, 변수명, 함수명, 데이터 타입 | `snake_case_naming_convention` |
| Camel Case | Java 변수명, 함수명 | `camelCaseNamingConvention` |
| Pascal Case | C++, 클래스명 | `PascalCaseNamingConvention` |
| Kebab Case | URL, HTML, CSS | `kebab-case-naming-convention` |
| SCREAM_SNAKE_CASE | 상수(Constant) | `SCREAM_SNAKE_CASE_EXAMPLE` |

---

# CSS 클래스 네이밍 규칙

CSS 클래스는 **BEM(Block Element Modifier)** 방법론을 사용합니다.

BEM은

- 코드 가독성을 높이고
- 재사용성을 향상시키며
- 유지보수를 쉽게 해주는 대표적인 CSS 네이밍 방식입니다.

---

## BEM 구성 요소

| 구성 요소 | 정의 | 예시 | 설명 |
|-----------|------|------|------|
| Block | 독립적인 컴포넌트 | `menu`, `card`, `user-profile` | 웹페이지의 의미 있는 하나의 영역 |
| Element | Block 내부 요소 | `menu__item`, `card__title`, `user-profile__avatar` | Block 안에서만 의미를 가짐 |
| Modifier | 상태 또는 종류 | `menu__item--active`, `button--large`, `card__title--big` | Block 또는 Element의 상태 표현 |

---

## BEM 표기법

| 구성 요소 | 표기법 |
|-----------|---------|
| Block | 소문자 + 하이픈(-) |
| Element | `block__element` |
| Modifier | `block--modifier` 또는 `block__element--modifier` |

---

## Block 예시

```
header
footer
navigation
sidebar
menu
card
button
modal
form
input
user-profile
banner
product-list
tab
dropdown
table
pagination
alert
tooltip
gallery
```

---

## Element 예시

```
menu__item
card__title
card__image
user-profile__avatar
form__input
form__label
form__submit
sidebar__link
navigation__button
tab__content
dropdown__list
dropdown__item
header__logo
footer__nav
banner__image
product-list__item
modal__header
alert__message
tooltip__arrow
pagination__button
```

---

## Modifier 예시

```
menu__item--active
button--primary
button--disabled
card--highlighted
card__image--large
form__input--error
form__input--success
tab__content--current
modal--open
sidebar--collapsed
header__logo--small
dropdown__item--selected
user-profile--admin
banner--hidden
pagination__button--disabled
alert--warning
tooltip--top
gallery__item--featured
product-list__item--soldout
navigation__button--current
```

---

# 코딩 컨벤션 보충 가이드

이 문서는 기존 코딩 컨벤션을 보완하기 위한 참고 자료이다.

---

# 좋은 변수명 작성법

좋은 변수명은 **의미를 바로 이해할 수 있어야 한다.**

## 좋은 예

```text
userName
studentCount
totalPrice
currentHealth
playerPosition
isLogin
isVisible
```

변수명만 보고도 어떤 값인지 알 수 있다.

---

## 좋지 않은 예

```text
a
temp1
abc
num
data
value
thing
```

이러한 이름은 코드가 길어질수록 의미를 잃는다.

---

# Boolean 변수명

Boolean 변수는 질문 형태가 가장 읽기 쉽다.

```javascript
isVisible
isLogin
isSuccess
hasItem
hasPermission
canMove
canAttack
shouldSave
```

### 좋지 않은 예

```javascript
visible
login
success
permission
move
```

---

# 배열(Array) 네이밍

복수형을 사용한다.

```javascript
users
students
products
images
scores
```

원소 하나

```javascript
user
student
product
image
score
```

---

# 함수(Function) 네이밍

함수는 동사로 시작한다.

## 좋은 예

```javascript
getUser()
createUser()
saveData()
updateScore()
deleteFile()
loadImage()
drawPlayer()
moveCharacter()
playSound()
```

---

## 조회

```javascript
get
find
load
read
fetch
```

예시

```javascript
getUser()
findStudent()
loadImage()
```

---

## 생성

```javascript
create
make
generate
build
```

---

## 수정

```javascript
update
change
edit
set
```

---

## 삭제

```javascript
delete
remove
clear
destroy
```

---

# 클래스(Class) 네이밍

클래스는 명사를 사용한다.

```text
Player
GameManager
ImageLoader
UserInfo
SoundManager
Inventory
DatabaseManager
```

---

# 인터페이스

언어에 따라 다르지만 C#에서는 I를 붙이는 경우가 많다.

```text
IPlayer
IDamageable
ISerializable
```

---

# 상수(Constant)

모든 단어를 대문자로 작성한다.

```javascript
MAX_SPEED
MIN_HEIGHT
DEFAULT_COLOR
PLAYER_HP
MAX_ITEM_COUNT
```

---

# Enum

Pascal Case를 사용한다.

```csharp
enum PlayerState
{
    Idle,
    Walk,
    Run,
    Attack
}
```

---

# 파일명 규칙

## HTML

```text
index.html
login.html
user-profile.html
product-detail.html
```

---

## CSS

```text
main.css
layout.css
common.css
button.css
```

---

## JavaScript

```text
main.js
player-controller.js
user-service.js
```

---

# 폴더 구조 예시

```text
project/

├── css/
│   ├── main.css
│   ├── common.css
│   └── layout.css
│
├── js/
│   ├── main.js
│   ├── utils.js
│   └── api.js
│
├── images/
│
├── fonts/
│
├── pages/
│
└── index.html
```

---

# HTML id와 class

id는 페이지에서 하나만 존재한다.

```html
<div id="header"></div>
```

class는 여러 개 사용할 수 있다.

```html
<div class="menu"></div>
<div class="menu"></div>
<div class="menu"></div>
```

---

# CSS 클래스 작성 예시

```html
<div class="card">
    <img class="card__image">
    <h2 class="card__title"></h2>
    <button class="card__button card__button--primary">
```

```css
.card{}

.card__image{}

.card__title{}

.card__button{}

.card__button--primary{}
```

---

# 들여쓰기

공백 4칸 또는 Tab 하나를 프로젝트 전체에서 통일한다.

```javascript
if(isLogin)
{
    saveData();
}
```

또는

```javascript
if (isLogin) {
    saveData();
}
```

한 프로젝트에서는 반드시 하나의 스타일만 사용한다.

---

# 괄호 스타일

권장

```javascript
if (isLogin) {
    saveData();
}
```

비권장

```javascript
if(isLogin){
saveData();}
```

---

# 문자열

가능하면 작은따옴표 또는 큰따옴표 하나로 통일한다.

```javascript
const name = "John";
```

또는

```javascript
const name = 'John';
```

---

# 주석(Comment)

왜(Why)를 설명한다.

좋은 예

```javascript
// 이미지 로딩 시간을 줄이기 위해 캐시를 사용한다.
```

나쁜 예

```javascript
// 변수 선언
let count = 0;
```

---

# Git 브랜치 규칙

```text
main
develop

feature/login
feature/user-profile

fix/image-error

hotfix/server

release/v1.2
```

---

# Commit 메시지 규칙

```text
feat: 로그인 기능 추가

fix: 이미지 로딩 오류 수정

style: 코드 정리

refactor: 중복 코드 제거

docs: 문서 수정

test: 테스트 코드 추가

chore: 라이브러리 업데이트
```

---

# 네이밍 체크리스트

변수를 만들기 전에 확인한다.

- 의미가 명확한가?
- 축약어를 남발하지 않았는가?
- Boolean은 is/has/can으로 시작하는가?
- 함수는 동사인가?
- 클래스는 명사인가?
- 상수는 대문자인가?
- 배열은 복수형인가?
- 프로젝트 전체와 스타일이 일치하는가?

---

# 가장 중요한 원칙

> **좋은 코드는 짧은 코드가 아니라, 읽기 쉬운 코드이다.**

코딩 컨벤션의 목적은 컴퓨터가 아니라 **사람이 이해하기 쉬운 코드를 만드는 것**이다.