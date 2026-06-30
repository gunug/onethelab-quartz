* Model Context Protocol
* **AI 모델이 외부 도구나 데이터와 표준화된 방식으로 통신하기 위한 프로토콜**입니다.

# MCP 설정값 등

* user 스코프로 등록, project 스코프는 해당 프로젝트 폴더 안에서만 mcp연결 가능
* 파일 생성의 경우 상대경로의 폴더에 저장(MCP 소스코드에 저장하면 각 프로젝트 클라이언트에서 파일 접근 어려움)
* MCP 서버에서는 호출된 프로젝트경로를 알기 어려움으로 인자값으로 프로젝트 경로를 받도록함
* **`Path.cwd()` 그대로 사용** claude를 실행하는 위치만 일치한다면 실행 위치에 파일생성 -가장 적합해 보임

---

## `Path.cwd()` 사용 이유

**MCP 서버는 Claude Code가 자식 프로세스로 spawn**하기 때문에, MCP의 `Path.cwd()` = Claude Code를 실행한 디렉토리입니다.

즉:

- `cd C:\myproj` → `claude` 실행 → MCP의 cwd = `C:\myproj`
- 자동으로 `C:\myproj\png\`에 이미지 저장됨

**장점:**

- 코드 변경 불필요 (이미 그렇게 작성됨 — [server.py:117](vscode-webview://0tpp0a6kgek0ggn9e803k8jkcu93c3083b1qjoj6pdj4livh8cqo/server.py#L117))
- Claude가 매번 경로를 인자로 넘길 필요 없음
- user 스코프로 한 번만 등록하면 어떤 프로젝트에서든 그 프로젝트 폴더에 저장

**전제 조건:** 항상 프로젝트 루트에서 `claude`를 실행하면 됨.

---
os.getcwd() + os.path.join 사용하지 않음 (다른 mcp들과의 통일성 이유로)