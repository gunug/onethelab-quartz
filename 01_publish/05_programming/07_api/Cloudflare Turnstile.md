
[[봇 스팸(Bot Spam)]] 방지책
# 개요
Cloudflare Turnstile은 **CAPTCHA(리캡차)를 대체하기 위해 Cloudflare가 만든 봇 방지 서비스**입니다. Google reCAPTCHA처럼 사용자를 귀찮게 하지 않으면서도 대부분의 자동화 봇을 차단하는 것이 목표입니다. Cloudflare CDN을 사용하지 않는 사이트에서도 무료로 사용할 수 있습니다.

# 검증 방식
- JavaScript가 정상적으로 동작하는지
- 브라우저 API가 실제 브라우저처럼 동작하는지
- Headless Chrome 같은 자동화 브라우저인지
- Proof-of-Work(간단한 계산)
- Proof-of-Space
- 브라우저의 다양한 특성(quirks)
- 사람과 유사한 브라우저 환경인지

---

### 1. Cloudflare 계정 생성

Cloudflare 계정만 있으면 됩니다.
Cloudflare DNS를 사용하지 않아도 됩니다.

---

### 2. Turnstile Widget 생성
대시보드에서

```
Turnstile
→ Add Widget
```

을 선택합니다.
입력 항목은 대략
- Widget 이름
- 사용할 도메인
- Widget 종류
입니다.

생성이 완료되면

```
Site Key
Secret Key
```

두 개가 발급됩니다.

```
Site Key
→ 공개 가능

Secret Key
→ 서버에만 저장
```

입니다.


---

# html추가

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<div
    class="cf-turnstile"
    data-sitekey="SITE_KEY">
</div>
```


# 서버에서 검증

폼 제출 시 전달된

```
cf-turnstile-response
```

값을 Cloudflare의 **Siteverify API**로 보내 확인합니다.

Cloudflare는

```
success : true
```

또는

```
success : false
```

를 반환합니다.

이 검증을 반드시 수행해야 합니다. 하지 않으면 공격자가 토큰을 위조하거나 검증을 우회할 수 있습니다.


---

|모드|특징|추천|
|---|---|---|
|Managed|위험도를 보고 자동 판단|⭐ 가장 추천|
|Non-interactive|항상 표시되지만 클릭 없음|좋음|
|Invisible|화면에 아예 안 보임|UX 최우선일 때|
## 장점

- 무료
- Cloudflare DNS 없이 사용 가능
- 대부분 사용자는 아무것도 누를 필요 없음
- Google reCAPTCHA보다 사용자 경험이 좋음
- 개인정보 수집이 상대적으로 적음
- 구현이 비교적 간단함
- 봇이 우회하기 어려움

---

## 한계

Turnstile만으로는 모든 스팸을 막을 수는 없습니다.

예를 들어

- 사람이 직접 광고를 작성
- CAPTCHA 우회 서비스 이용
- 실제 브라우저를 이용한 자동화
- 분산 IP를 사용하는 대규모 봇

등은 통과할 수도 있습니다.

그래서 운영 중인 대형 서비스들은 Turnstile과 함께 다음 기법을 조합하는 경우가 많습니다.

- Honeypot(숨겨진 입력 필드)
- IP별 요청 속도 제한(Rate Limiting)
- 동일 내용 반복 게시 차단
- 국가/IP 평판 검사
- 게시 빈도 제한
- URL 개수 제한
- AI 기반 스팸 내용 분석

이렇게 여러 계층을 함께 적용하면 익명 게시판에서도 스팸을 상당히 효과적으로 줄일 수 있습니다.

---
