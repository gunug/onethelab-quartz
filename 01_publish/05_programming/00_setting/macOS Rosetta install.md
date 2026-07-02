
# Rosetta란?

**Rosetta 2**는 Apple Silicon (M1, M2, M3 등) Mac에서 Intel 기반 애플리케이션을 실행하도록 해주는 변환 레이어입니다.

- **Intel x86_64 앱** → **Apple Silicon (ARM64)에서 실행 가능**
- 대부분의 경우 자동으로 작동하지만, 패키지 매니저 초기화 시 문제가 발생할 수 있습니다.

---

# 문제 상황

**npm initialize package manager에서 무한로딩 발생:**
- Node.js를 Intel 아키텍처로 설치한 경우, Apple Silicon Mac에서 `npm install`이나 `npx` 명령 실행 시 무한로딩 걸림
- 특히 Gemini CLI나 다른 Node.js 패키지 설치 시 진행률이 멈춰있는 현상

---

# 해결 방법: Rosetta 설치

## 방법 1: 자동 설치 (권장)

터미널을 열고 다음 명령어 실행:

```bash
softwareupdate --install-rosetta --agree-to-license
```

**출력 예시:**
```
Installing Rosetta 2...
```

설치가 완료될 때까지 기다립니다 (1~5분 소요).

---

## 방법 2: 수동 설치

1. **터미널 실행** (Command ⌘ + Space → "터미널" 입력)

2. **다음 명령어 실행:**
```bash
softwareupdate -i -a -R
```

3. **설치 확인:**
```bash
file /usr/bin/cc
```

**정상 작동 시 출력:**
```
/usr/bin/cc: Mach-O arm64 executable
```

---

# 설치 후 확인

### Node.js 아키텍처 확인

```bash
node -p "process.arch"
```

**출력 결과:**
- `arm64` → Apple Silicon 기본 (권장)
- `x64` → Intel 호환성 모드 (Rosetta 필요)

---

### Node.js 재설치 권장 (Apple Silicon용)

**기존 Node.js가 Intel 버전인 경우:**

1. **Homebrew로 Node.js 제거:**
```bash
brew uninstall node
```

2. **Apple Silicon용 Node.js 설치:**
```bash
brew install node
```

3. **확인:**
```bash
node --version
npm --version
```

---

# Rosetta 설치 이후 npm 설치

Rosetta가 설치되었으면, 기존 방법대로 npm 명령어 실행 가능:

```bash
npm install -g @google/gemini-cli
```

또는 Homebrew 방식:

```bash
brew install gemini-cli
```

---

# 추가 팁

### Mac의 아키텍처 확인

```bash
uname -m
```

**출력 결과:**
- `arm64` → Apple Silicon (M1, M2, M3 등)
- `x86_64` → Intel Mac

### Homebrew 상태 확인

```bash
brew doctor
```

문제가 있으면 상세 메시지와 해결 방법 표시됨.

---

# 참고 링크

- [Apple 공식 - Rosetta란](https://support.apple.com/en-us/HT211861)
- [Homebrew 공식 문서](https://brew.sh/)
