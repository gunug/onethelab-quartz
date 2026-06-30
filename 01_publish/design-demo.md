---
title: 디자인 시스템 데모
---

One The Lab 디자인 시스템이 Quartz에 적용된 모습. 작성 시 참고용.

## Callout (콜아웃)

마크다운에서 `> [!타입] 제목` 형식으로 사용.

> [!note] 기본 (브랜드)
> 노랑 강조의 기본 콜아웃.

> [!info] 정보
> 파란색 정보 콜아웃. `info`, `todo`, `abstract` 모두 동일.

> [!tip] 성공 / 팁
> 초록색. `tip`, `success`, `check`, `done`, `hint`.

> [!warning] 주의
> 주황색. `warning`, `caution`, `question`, `help`.

> [!danger] 오류
> 빨강. `danger`, `error`, `failure`, `bug`.

> [!example] 예시 / 인용
> 노랑. `example`, `quote`.

## Badge (배지)

<span class="badge b-yellow">기본</span>
<span class="badge dot b-success">정상</span>
<span class="badge dot b-warning">주의</span>
<span class="badge dot b-error">오류</span>
<span class="badge dot b-info">정보</span>

## Button (버튼)

<a class="btn btn-primary">Primary</a>
<a class="btn btn-secondary">Secondary</a>
<a class="btn btn-primary btn-sm">Small</a>
<a class="btn btn-primary btn-lg">Large</a>

## KPI 카드

<div class="dash">
  <div class="kpi"><div class="label">활성 사용자</div><div class="num">12.4K</div></div>
  <div class="kpi"><div class="label">전환율</div><div class="num">3.1%</div></div>
  <div class="kpi"><div class="label">평균 응답</div><div class="num">240ms</div></div>
  <div class="kpi"><div class="label">오류율</div><div class="num">0.7%</div></div>
</div>

## Table (표)

| 토큰             | 값         | 용도     |
| -------------- | --------- | ------ |
| `--hhg-yellow` | `#FFD400` | 브랜드 강조 |
| `--ink`        | `#1A1A17` | 제목·텍스트 |
| `--canvas`     | `#FAFAF7` | 배경     |

## 인용 · 코드

> 인용구는 노랑 좌측 강조선이 붙는다.

```ts
const token = "value"; // JetBrains Mono
```

```json
{
  "name": "홍길동",
  "age": 30,
  "isEmployed": true,
  "skills": ["Java", "Python", "React"],
  "address": {
    "city": "서울",
    "zipcode": "12345"
  },
  "contact": {
    "email": "hong@example.com",
    "phone": "010-0000-0000"
  }
}
```
인라인 `code` 도 디자인 시스템 스타일.
