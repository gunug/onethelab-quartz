# Claudian git clone 설치 방법

## 사전 요구사항

### Git 설치 확인
CMD에서 실행:
```
git --version
```
설치되지 않았다면 [Git 설치](https://git-scm.com/)

## 설치 방법

### 1단계: Vault plugins 폴더로 이동
```bash
cd YOUR_VAULT/.obsidian/plugins
```

### 2단계: Claudian clone
```bash
git clone https://github.com/YishenTu/claudian.git
```

### 3단계: 폴더 이동 및 의존성 설치
```bash
cd claudian
npm install
```

### 4단계: 빌드
```bash
npm run build
```

### 5단계: Obsidian 재시작
Obsidian을 완전히 종료한 후 다시 실행

### 6단계: 플러그인 활성화
Settings → Community plugins → Installed plugins에서 Claudian 활성화

### 7단계: Claude 로그인
처음 실행 시 Claude 로그인 또는 [API key](https://console.anthropic.com) 입력

## 사용법

Claudian 플러그인 활성화 후 다음과 같이 사용할 수 있습니다:
- Obsidian 편집기에서 Claude의 AI 기능 활용
- API key를 통한 Claude 모델 통합
- 노트 작성 및 편집 시 AI 보조

## 업데이트 방법

git clone 방식의 장점은 업데이트가 매우 간단합니다:

```bash
cd .obsidian/plugins/claudian
git pull
npm install
npm run build
```

Obsidian을 재시작하면 업데이트가 적용됩니다.

## 트러블슈팅

### eventTargets 에러

```
❌ Error: The "eventTargets" argument must be an instance of EventEmitter or EventTarget. Received an instance of AbortSignal
```

**원인:** Obsidian 내장 Electron의 Node.js 런타임 버전 문제입니다. Claudian이 사용하는 `@modelcontextprotocol/sdk`(MCP SDK)가 `AbortSignal`을 `EventTarget`으로 사용하는데, Obsidian에 내장된 Electron의 Node.js 버전이 낮으면 `AbortSignal`이 `EventTarget` 인터페이스를 구현하지 않아 이 에러가 발생합니다.

**핵심:** 시스템에 설치된 Node.js를 업그레이드해도 해결되지 않습니다. Obsidian은 자체 Electron 런타임을 사용하기 때문입니다.

**해결 방법:**
1. **Obsidian 최신 버전으로 업데이트** (가장 중요)
   - Settings → General → Check for updates
   - 또는 Obsidian 재설치 (최신 Electron = 최신 Node.js 런타임)
2. **Claudian 플러그인 업데이트**
   ```bash
   cd .obsidian/plugins/claudian
   git pull
   npm install
   npm run build
   ```
3. Obsidian 완전 종료 후 재시작

**MCP 열기 실패 메시지도 같이 나오는 경우:**
- 이 에러의 직접적인 결과입니다. MCP 서버 연결 시 내부적으로 `AbortSignal`을 사용하는데, 이것이 실패하면서 MCP 서버 초기화도 함께 실패합니다.
- Obsidian 업데이트로 근본 원인이 해결되면 MCP 에러도 함께 해결됩니다.
- Obsidian이 이미 최신인데도 에러가 지속되면, Claudian GitHub Issues에 Obsidian 버전과 함께 보고하세요: https://github.com/YishenTu/claudian/issues

### Failed to update thinking budget / Failed to update MCP servers 에러

```
Failed to update thinking budget
Failed to update MCP servers
```

**원인:** 이 에러들은 독립적인 문제가 아니라 **SDK 세션 초기화 실패의 연쇄 결과**입니다. `eventTargets` 에러나 `binary not found` 에러로 인해 Claude Agent SDK 세션이 정상적으로 시작되지 못하면, 이후 thinking budget 설정, MCP 서버 연결 등 모든 후속 작업이 함께 실패합니다.

**해결 방법:** 근본 원인(eventTargets 에러 또는 binary not found 에러)을 먼저 해결하면 이 에러들도 자동으로 해결됩니다.

---

### Claude Code native binary not found 에러

```
Error: Claude Code native binary not found at C:\Users\사용자명\scoop\apps\nodejs\current\bin\claude.
Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.
```

**원인:** Claude Code CLI는 설치되어 있지만, Claudian 플러그인이 실행 파일 경로를 자동으로 찾지 못하는 문제입니다. Obsidian은 자체 Electron 환경에서 실행되므로 시스템 PATH를 온전히 상속받지 못할 수 있습니다.

**해결 방법:**
1. 실제 claude 경로 확인 (CMD/PowerShell에서):
```bash
where claude
```
2. Claudian 설정에서 경로 직접 지정:
   - Claudian Settings → `pathToClaudeCodeExecutable`에 확인한 경로 입력
   - 예: `C:\Users\사용자명\scoop\apps\nodejs\current\bin\claude`

