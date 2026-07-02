웹에서 **origin(오리진)** 은 보안을 위해 사용하는 개념으로, 다음 **3가지가 모두 같은 경우**를 말합니다.

> **Origin = 프로토콜(scheme) + 도메인(host) + 포트(port)**


## 같은 Origin 예시

다음은 모두 같은 Origin입니다.

```
https://example.comhttps://example.com/https://example.com/page1https://example.com/images/a.pnghttps://example.com/api/user
```

왜냐하면

- 프로토콜: https
- 도메인: example.com
- 포트: 443(https 기본)

가 모두 같기 때문입니다.

---

## 다른 Origin 예시

### 1. 프로토콜이 다름

```
https://example.comhttp://example.com
```

→ 다른 Origin

---

### 2. 서브도메인이 다름

```
https://example.comhttps://www.example.com
```

→ 다른 Origin

```
https://api.example.comhttps://example.com
```

→ 다른 Origin

---

### 3. 포트가 다름

```
https://example.comhttps://example.com:8080
```

→ 다른 Origin

개발할 때 자주 보는 경우

```
http://localhost:3000http://localhost:5173
```

→ localhost라도 포트가 달라서 다른 Origin입니다.

---

## 경로(path)는 Origin에 포함되지 않음

```
https://example.com/ahttps://example.com/bhttps://example.com/user/info
```

모두 같은 Origin입니다.

`/a`, `/b` 같은 경로는 Origin 계산에 포함되지 않습니다.


## 왜 중요한가?

브라우저는 **동일 출처 정책(Same-Origin Policy)** 을 적용합니다.

예를 들어

```
https://myapp.com
```

에서 실행 중인 JavaScript는

```
https://myapp.com/api
```

에는 자유롭게 요청할 수 있습니다.

하지만

```
https://api.other.com
```

으로 요청하면 **다른 Origin** 이므로 브라우저가 제한합니다.

이때 서버가 **CORS** 헤더를 허용해야 브라우저가 응답을 JavaScript에 전달합니다.