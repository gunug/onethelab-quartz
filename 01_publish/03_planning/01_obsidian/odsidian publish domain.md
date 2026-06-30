# Obsidian Publish 커스텀 도메인 연결 가이드

현재 Obsidian Publish로 운영 중인 Vault를 커스텀 도메인에 연결하는 전체 과정을 안내합니다.

---

## 📋 전체 프로세스 개요

```
1. 도메인 구매
  ↓
2. DNS 설정 (Obsidian에서 제공하는 정보 확인)
  ↓
3. Obsidian Publish에 도메인 입력
  ↓
4. DNS 전파 대기 (최대 48시간)
  ↓
5. 도메인을 통한 접속 확인
```

---

## 1단계: 도메인 구매

### 1.1 도메인 구매 사이트 추천

**국내:**
- **Gabia** (https://www.gabia.com/)
- **Namecheap** (https://www.namecheap.com/)
- **Google Domains** (https://domains.google/)

**국제:**
- **GoDaddy** (https://www.godaddy.com/)
- **Namecheap** (https://www.namecheap.com/)
- **NameSilo** (https://www.namesilo.com/)

### 1.2 도메인 선택 팁

✅ **추천:**
- 짧고 기억하기 쉬운 이름
- `.com`, `.io`, `.blog`, `.dev` 등 일반적인 확장자
- 5년 이상 등록 (비용 효율적)

❌ **피할 것:**
- 너무 긴 도메인명
- 오타하기 쉬운 이름
- 상표권 충돌 가능성

### 1.3 도메인 구매 예시

**예:** `mynotevault.com` 구매
- 연간 비용: 약 $10-15
- 갱신: 자동 갱신 설정 권장

---

## 2단계: Obsidian Publish에 도메인 추가

### 2.1 Manage Site 접근

1. Obsidian 데스크톱 앱 열기
2. 좌측 탭에서 **Publish** 아이콘 (위성 모양) 클릭
3. **Manage site** 버튼 클릭

### 2.2 도메인 설정

1. **Manage site** 창 열림
2. **Site settings** 탭 이동
3. **Base URL** 섹션 찾기
4. **Custom domain** 입력 필드에 도메인 입력

```
입력 예: mynotevault.com
(https:// 제외하고 입력)
```

5. **저장** 또는 **확인** 클릭

### 2.3 DNS 레코드 확인

도메인 입력 후 Obsidian에서 다음 정보 제공:

```
CNAME 레코드:
호스트: (yourdomain.com)
값: publish-01.obsidian.md
```

> ⚠️ **중요**: 이 정보를 **메모**해두세요. 다음 단계에서 필요합니다.

---

## 3단계: DNS 설정 (도메인 제공자에서)

### 3.1 도메인 제공자 대시보드 접속

**GoDaddy 예시:**
1. GoDaddy 계정 로그인
2. **내 상품** → **도메인**
3. 해당 도메인 클릭
4. **DNS 관리** 또는 **DNS 설정** 클릭

**Gabia 예시:**
1. Gabia 계정 로그인
2. **서비스 관리** → **도메인**
3. 해당 도메인 클릭
4. **DNS/네임서버** 탭

**Namecheap 예시:**
1. Namecheap 계정 로그인
2. **Dashboard** → **Domain List**
3. 해당 도메인 옆의 **Manage** 클릭
4. **Advanced DNS** 탭

### 3.2 CNAME 레코드 추가

#### A. 기존 레코드 확인

DNS 관리 페이지에서:
- `A` 레코드 (있으면 삭제 또는 수정)
- `AAAA` 레코드 (있으면 삭제 또는 수정)
- `CNAME` 레코드 확인

#### B. CNAME 레코드 추가

**필드 작성:**

| 필드 | 값 |
|------|-----|
| **Type** | CNAME |
| **Name/Host** | @ (또는 yourdomain.com) |
| **Value/Points to** | publish-01.obsidian.md |
| **TTL** | 3600 (또는 기본값) |

**예시 (GoDaddy):**
```
Name: @
Type: CNAME
Value: publish-01.obsidian.md
TTL: 3600
```

#### C. 저장

- **Add Record** 또는 **Save** 클릭
- 변경사항 저장 완료

### 3.3 DNS 설정 확인

DNS 설정 후 몇 분 내에 다음이 표시되어야 함:

```
@ CNAME publish-01.obsidian.md
```

---

## 4단계: DNS 전파 대기

### 4.1 DNS 전파란?

DNS 변경사항이 전 세계의 DNS 서버에 반영되는 과정입니다.

**예상 시간:**
- 최소: 30분
- 일반적: 2-24시간
- 최대: 48시간

### 4.2 전파 상태 확인

**온라인 DNS 체커 사용:**

1. **MXToolbox** (https://mxtoolbox.com/cname.aspx)
   - CNAME Lookup 클릭
   - 도메인 입력
   - 검색

2. **What's My DNS** (https://www.whatsmydns.net/)
   - Query Type: CNAME 선택
   - 도메인 입력
   - 검색

3. **Google Admin Toolbox** (https://toolbox.googleapps.com/apps/checkmx/)
   - MX Lookup 탭
   - 도메인 입력

### 4.3 터미널에서 확인 (선택사항)

```bash
# Mac/Linux
nslookup mynotevault.com

# 또는
dig mynotevault.com

# Windows
nslookup mynotevault.com
```

예상 출력:
```
mynotevault.com     CNAME   publish-01.obsidian.md
```

---

## 5단계: 도메인 접속 확인

### 5.1 브라우저에서 접속

DNS 전파 완료 후:

```
https://mynotevault.com
```

브라우저에서 직접 접속

### 5.2 예상 결과

✅ **성공:**
- Publish 사이트가 정상적으로 로드됨
- URL이 도메인으로 표시됨
- SSL 인증서 자동 적용 (녹색 자물쇠)

❌ **실패 시:**
- 404 오류 또는 접속 불가
- DNS가 아직 전파되지 않았을 가능성
- 24시간 대기 후 재시도

### 5.3 HTTPS 인증서 확인

Obsidian Publish는 자동으로 Let's Encrypt SSL 인증서를 제공합니다.

- 주소 표시줄의 **녹색 자물쇠** 확인
- 인증서 클릭 → 상세 정보 확인

---

## 6단계: 이전 URL 리다이렉트 (선택)

### 6.1 기존 Publish URL 리다이렉트

기존: `https://[site-id].obsidian.md`
신규: `https://mynotevault.com`

### 6.2 Obsidian에서 리다이렉트 설정

Manage site > Advanced 탭에서:
- "Redirect to custom domain" 활성화 (있으면)
- 또는 Obsidian이 자동으로 처리

### 6.3 검색 엔진 업데이트

Google Search Console에서:
1. 기존 URL 속성 추가
2. 도메인 변경 알림
3. 새 도메인 추가 및 검증

---

## 📊 문제 해결 가이드

### Q1: "도메인이 이미 사용 중입니다" 오류

**원인:** 다른 서비스가 도메인을 사용 중

**해결:**
- DNS 레코드 확인 및 정리
- 도메인 제공자에 문의
- 네임서버 확인

### Q2: DNS 설정 후에도 접속 불가

**원인:** DNS 전파 미완료 또는 CNAME 오류

**해결:**
1. CNAME 레코드 재확인
2. 24시간 대기
3. 다른 네트워크에서 테스트
4. DNS 캐시 초기화

**DNS 캐시 초기화:**

```bash
# Mac
sudo dscacheutil -flushcache

# Windows (관리자 권한)
ipconfig /flushdns

# Linux
sudo systemctl restart systemd-resolved
```

### Q3: SSL 인증서 오류

**원인:** Let's Encrypt 인증서 미발급

**해결:**
- Obsidian이 자동으로 처리 (24시간 이내)
- 여전히 오류면 Obsidian 지원팀에 문의

### Q4: 도메인 구매 후 설정 안 됨

**원인:** 도메인 네임서버 미설정

**확인:**
1. 도메인 제공자에서 네임서버 확인
2. 기본 네임서버 사용하고 있는지 확인
3. 커스텀 네임서버 설정 피하기

---

## 🔒 보안 권장사항

### 6.1 이메일 보호

도메인 이메일이 스팸 발송에 악용되지 않도록:
- SPF 레코드 설정
- DKIM 설정 (선택사항)
- DMARC 설정 (선택사항)

### 6.2 도메인 자동 갱신

도메인 만료 방지:
- 도메인 제공자에서 자동 갱신 활성화
- 갱신 이메일 알림 설정

### 6.3 정기 백업

Obsidian Sync 또는 Git으로 정기 백업:
- Vault 손실 방지
- 버전 관리

---

## 📝 체크리스트

### 도메인 연결 체크리스트

- [ ] 도메인 구매 완료
- [ ] Obsidian Publish에 도메인 입력
- [ ] Obsidian에서 제공한 CNAME 정보 확인
- [ ] 도메인 제공자 대시보드 접속
- [ ] DNS 관리 페이지에서 CNAME 레코드 추가
- [ ] DNS 설정 저장
- [ ] DNS 전파 상태 확인 (온라인 체커 사용)
- [ ] 24시간 대기 (또는 더 빨리 전파될 수 있음)
- [ ] 브라우저에서 도메인으로 접속 테스트
- [ ] HTTPS 연결 확인 (녹색 자물쇠)
- [ ] Google Search Console에 도메인 추가 (선택)
- [ ] 기존 URL 리다이렉트 확인 (선택)

---

## 🆘 추가 지원

### Obsidian 공식 문서

- [Obsidian Publish 가이드](https://help.obsidian.md/Obsidian+Publish/Introduction+to+Obsidian+Publish)
- [커스텀 도메인 설정](https://help.obsidian.md/Obsidian+Publish/Set+up+a+custom+domain)

### 도메인 제공자 지원

- **GoDaddy:** https://www.godaddy.com/help
- **Gabia:** https://www.gabia.com/customer/contact
- **Namecheap:** https://www.namecheap.com/support/
- **Google Domains:** https://support.google.com/domains

### DNS 도구

- **MXToolbox:** https://mxtoolbox.com/
- **What's My DNS:** https://www.whatsmydns.net/
- **DNS Checker:** https://dnschecker.org/

---

## 📌 요약

1. **도메인 구매** - GoDaddy, Gabia, Namecheap 등에서 구매
2. **Obsidian 설정** - Manage site에서 도메인 입력
3. **DNS 설정** - 도메인 제공자에서 CNAME 레코드 추가
4. **전파 대기** - 최대 48시간 소요
5. **확인** - 도메인으로 접속해서 작동 확인

**총 소요 시간:** 10분 (설정) + 최대 48시간 (DNS 전파)

---

*마지막 업데이트: 2026년 3월*
