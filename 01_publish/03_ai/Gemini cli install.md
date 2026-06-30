
# Gemini [[cli]]

![[Pasted image 20260701074040.png]]
# AI를 CLI로 사용하는 장점

- **프로젝트 폴더에서 바로 실행:** 작업 중인 폴더에서 AI를 호출하므로 파일 복사/붙여넣기 없이 코드를 직접 읽고 수정할 수 있다.
- **파일 일괄 처리:** 여러 파일을 한 번에 분석하거나 수정하는 작업을 명령어 하나로 처리할 수 있다.
- **브라우저 불필요:** 웹 채팅창을 오갈 필요 없이 터미널 안에서 코딩과 AI 질의를 동시에 수행한다.
- **자동화 연계:** 셸 스크립트, CI/CD 파이프라인 등과 조합하여 반복 작업을 자동화할 수 있다.
- **리소스 절약:** GUI가 없으므로 메모리와 CPU 사용이 적고, 원격 서버(SSH)에서도 그대로 사용 가능하다.

# Gemini CLI
![[Pasted image 20260701074048.png]]
Google이 만든 오픈소스 터미널 AI 도구. 터미널에서 Gemini 모델로 코드 생성, 파일 편집 등을 수행한다.

- GitHub: [https://github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)
- 공식 문서: [https://geminicli.com/docs/](https://geminicli.com/docs/)

---

# Windows 설치

## 터미널(CMD) 실행 방법

1. **Windows 키** 누르기
2. **"cmd"** 또는 **"명령 프롬프트"** 입력
3. **"명령 프롬프트"** 클릭 (또는 Enter 입력)

> **관리자 권한이 필요한 경우:** 마우스 우클릭 → **"관리자 권한으로 실행"** 클릭

---

## 0. 패키지 관리자 설치 (선택사항)

### 방법 1: winget 사용 (권장)

**winget 설치 여부 확인:**
```cmd
winget --version
```

- **Windows 11:** 기본 포함 (별도 설치 불필요)
- **Windows 10:** Microsoft Store에서 "App Installer" 업데이트 필요
  1. Microsoft Store 열기
  2. "App Installer" 검색
  3. "설치" 또는 "업데이트" 클릭

### 방법 2: chocolatey 사용

**chocolatey 설치 여부 확인:**
```cmd
choco --version
```

**chocolatey 설치 방법:**

1. **CMD를 관리자 권한으로 실행** (위의 "터미널(CMD) 실행 방법" 참고)

2. **chocolatey 설치 명령어 실행:**
```cmd
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

3. **CMD를 닫고 다시 열기** ⚠️ (환경 변수 적용을 위해 필수)

4. **설치 확인:**
```cmd
choco --version
```

---

## 1. Node.js 설치

### 방법 1: winget 사용 (권장)

```cmd
winget install nodejs
```

### 방법 2: chocolatey 사용

```cmd
choco install nodejs
```

### 방법 3: 수동 설치

[https://nodejs.org](https://nodejs.org) 에서 LTS 버전 다운로드 후 설치

### 설치 확인

⚠️ **CMD를 완전히 닫았다가 다시 열기** (환경 변수 적용을 위해 필수)

그 후 다음 명령어들을 실행하여 설치 완료 확인:

```cmd
node --version
```

```cmd
npm --version
```

## 2. Gemini CLI 설치

```cmd
npm install -g @google/gemini-cli
```

## 3. 실행

```cmd
gemini
```

최초 실행 시 Google 계정 로그인 필요.

---

# macOS 설치

## 터미널 실행 방법

1. **Spotlight 검색 실행:** Command (⌘) + Space 입력
2. **"터미널"** 입력
3. **"터미널"** 클릭 (또는 Enter 입력)

> 또는 **Finder** → **응용 프로그램** → **유틸리티** → **터미널** 더블클릭

---

## 0. Homebrew 설치 (필수 선행작업)

Homebrew는 macOS의 패키지 관리자로, `brew install node` 명령어를 사용하기 위해 필수입니다.

### Homebrew 설치 여부 확인

다음 명령어 실행:
```bash
brew --version
```

**출력 예시:**
```
Homebrew 4.x.x
```

### Homebrew 설치 방법

위 명령어가 작동하지 않으면 (명령어를 찾을 수 없다는 오류 발생), 다음을 실행:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**설치 과정:**
1. 위 명령어를 터미널에 붙여넣고 Enter 입력
2. 설치 중 비밀번호 입력 요청 시 macOS 로그인 비밀번호 입력
3. 설치 완료 후 자동으로 설치 경로 정보 표시

### 설치 확인

⚠️ **터미널을 완전히 닫았다가 다시 열기** (환경 변수 적용을 위해 필수)

그 후 다음 명령어로 확인:
```bash
brew --version
```

**성공 시 출력:**
```
Homebrew 4.x.x
```

---

## 1. Node.js 설치

```bash
brew install node
```

**설치 확인:**
```bash
node --version
```

## 2. Gemini CLI 설치

npm 방식:
```bash
npm install -g @google/gemini-cli
```

또는 Homebrew 방식:
```bash
brew install gemini-cli
```

## 3. 실행

```bash
gemini
```

최초 실행 시 Google 계정 로그인 필요.

---

# 요금 정책

## 무료 (Google 계정 로그인)

| 항목 | 제한 |
|---|---|
| 일일 요청 수 | **1,000 요청 / 사용자 / 일** |
| 분당 요청 수 | **60 요청 / 사용자 / 분** |
| 사용 모델 | Gemini 모델 패밀리 전체 |

## 무료 (API Key)

| 항목 | 제한 |
|---|---|
| 일일 요청 수 | **250 요청 / 사용자 / 일** |
| 분당 요청 수 | **10 요청 / 사용자 / 분** |
| 사용 모델 | **Flash 모델만** |

> Google 계정 로그인 방식이 이용량이 훨씬 많으므로 권장.

## 유료

| 등급 | 일일 요청 | 분당 요청 |
|---|---|---|
| Standard | 1,500 / 일 | 120 / 분 |
| Enterprise | 2,000 / 일 | 120 / 분 |

사용량 확인: 세션 중 `/stats model` 명령 입력
