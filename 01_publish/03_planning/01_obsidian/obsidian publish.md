# Obsidian Publish 설정 가이드

## Obsidian Publish란?

Obsidian Publish는 당신의 노트를 온라인으로 공개할 수 있는 공식 호스팅 서비스입니다.
- 비용: 월 $8 또는 연 $80
- 커스텀 도메인 지원
- 웹에서 노트 검색, 공유 가능

---

## 1단계: Obsidian Publish 구독

### 1.1 Obsidian 계정 생성
- [Obsidian 공식 사이트](https://obsidian.md) 방문
- "Sign up" 클릭
- 이메일 주소 입력 및 비밀번호 설정
- 이메일 인증 완료

### 1.2 Obsidian Publish 구독
- Obsidian 계정으로 로그인
- [Obsidian Publish 페이지](https://obsidian.md/publish) 이동
- "Get started" 또는 "Subscribe" 버튼 클릭
- 결제 정보 입력 (신용카드)
- 구독 완료

---

## 2단계: Obsidian 앱에서 설정

### 2.1 Publish 플러그인 활성화
1. Obsidian 앱 열기
2. 좌측 하단 **Settings** (⚙️) 클릭
3. **Core plugins** 탭 이동
4. **Publish** 플러그인 검색
5. 토글 활성화 (켜기)

### 2.2 사이트 생성
1. 좌측 탭에서**Publish** 아이콘 클릭 (위성 모양)
2. **Create new site** 버튼 클릭
3. **Site ID** 입력 (예: my-vault, my-notes 등)
   - URL이 됨: `https://[site-id].obsidian.md`
4. 공개할 **Vault 선택**
5. **Create** 클릭

### 2.3 공개 노트 선택
1. 공개하고 싶은 노트 또는 폴더 우클릭
2. **Publish** 선택 (또는 **Mark as ready to publish**)
3. 공개하고 싶은 노트들에 체크 표시
4. **Publish** 버튼 클릭

---

## 3단계: 설정 커스터마이징

### 3.1 사이트 기본 설정
1. Publish 탭 > **Manage site** 클릭
2. **Site settings** 탭에서:
   - **Site name**: 웹사이트 제목 입력
   - **Site description**: 사이트 설명 입력
   - **Logo**: 사이트 로고 이미지 선택 (선택사항)
   - **Favicon**: 파비콘 이미지 선택 (선택사항)
   - **Base URL**: 커스텀 도메인 설정 (유료)

### 3.2 테마 및 외관 설정
1. **Appearance** 탭에서:
   - **Theme**: Light 또는 Dark 선택
   - **Font**: 기본 폰트 변경
   - **Graph**: 그래프 표시 여부 선택

### 3.3 접근 권한 설정
1. **Access** 탭에서:
   - **Public**: 누구나 접근 가능
   - **Private**: 초대받은 사람만 접근
   - **Password protected**: 비밀번호로 보호

### 3.4 고급 설정
1. **Advanced** 탭에서:
   - **Search**: 웹 검색 기능 활성화/비활성화
   - **Backlinks**: 백링크 표시 여부
   - **Local graph**: 로컬 그래프 표시 여부
   - **TOC (Table of Contents)**: 목차 자동 생성

---

## 4단계: 커스텀 도메인 설정 (선택사항)

### 4.1 도메인 구매
- Godaddy, Namecheap, Route53 등에서 도메인 구매

### 4.2 Obsidian에서 도메인 연결
1. Publish 탭 > **Manage site**
2. **Site settings** > **Base URL**
3. 구매한 도메인 입력 (예: `https://mynotes.com`)
4. DNS 설정 지침 확인 및 도메인 제공자에서 설정

### 4.3 DNS 레코드 설정 (도메인 제공자 대시보드)
- CNAME 레코드 생성
- Obsidian에서 제공하는 값으로 설정
- DNS 전파 대기 (최대 48시간)

---

## 5단계: 콘텐츠 관리

### 5.1 새 노트 공개
1. 노트 우클릭 > **Publish**
2. 새로운 노트들 선택
3. **Publish** 버튼 클릭

### 5.2 노트 업데이트
1. Vault에서 노트 수정
2. 좌측 탭에서 수정된 노트 확인
3. **Publish** 클릭 (변경사항 자동 반영)

### 5.3 노트 언퍼블리시
1. 노트 우클릭
2. **Unpublish** 선택
3. 확인 후 언퍼블리시 완료

---

## 6단계: 웹에서 사이트 확인

- 브라우저에서 접속: `https://[site-id].obsidian.md`
- 또는 커스텀 도메인: `https://yourdomain.com`
- 공개된 노트들이 표시됨
- 검색, 그래프, 백링크 등 기능 사용 가능

---

## 유용한 팁

### 📌 노트 전면에 메타데이터 추가
```yaml
---
title: 노트 제목
description: 노트 설명
tags: [tag1, tag2]
---
```

### 🔒 특정 노트 비공개 처리
- 노트 YAML에 `publish: false` 추가

### 🔗 내부 링크 활용
- `[[노트명]]`으로 연결된 노트들도 함께 공개
- 웹에서 클릭하여 네비게이션 가능

### 🎨 CSS 커스터마이징 (고급)
- Publish 탭 > **Customize your site**에서 CSS 편집 가능

---

## 자주 묻는 질문 (FAQ)

**Q: 언제든지 구독을 취소할 수 있나요?**
A: 네, Settings에서 언제든 취소 가능합니다. 취소 후 사이트는 비활성화됩니다.

**Q: 여러 개의 사이트를 만들 수 있나요?**
A: 한 구독으로 최대 10개의 사이트 운영 가능합니다.

**Q: 사이트 통계를 볼 수 있나요?**
A: 기본 방문자 통계는 Manage site에서 확인 가능합니다.

**Q: 백업은 자동으로 되나요?**
A: Obsidian Sync 서비스를 별도로 구독하면 자동 백업 가능합니다.

---

## 참고 자료

- [Obsidian 공식 문서](https://help.obsidian.md/)
- [Obsidian Publish 공식 가이드](https://help.obsidian.md/Obsidian+Publish/Introduction+to+Obsidian+Publish)
- [Obsidian 커뮤니티 포럼](https://forum.obsidian.md/)
