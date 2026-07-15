
# 봇 스팸 차단 방법

- Cloudflare Turnstile
- Honeypot 필드
	- 숨김필드
	- 대부분의 봇이 입력필드를 다 채우려는 것에 착안
- JavaScript 토큰
- 작성 시간 3~5초 이상 검증
- IP 및 브라우저 지문 기반 Rate Limit
- 동일 내용 및 중복 URL 차단
- AI 기반 스팸 판별(의심 게시물만 차단 또는 검토 대상으로 분류)