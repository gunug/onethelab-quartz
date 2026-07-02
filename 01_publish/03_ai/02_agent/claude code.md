Pro 월20$ sonet4
Max 월100$ opus4
https://claude.ai/onboarding

## 설치
```
npm install -g @anthropic-ai/claude-code
```


## vscode extansion
claude for vscode

```error
Error: Claude Code on Windows requires git-bash (https://git-scm.com/downloads/win). If installed but not in PATH, set environment variable pointing to your bash.exe, similar to: CLAUDE_CODE_GIT_BASH_PATH=C:\Program Files\Git\bin\bash.exe  
View output logs · [Troubleshooting resources](https://code.claude.com/docs/en/vs-code#troubleshooting)
```

git이 설치가 안되어 있거나 설치가 되었어도 환경변수 Path에 경로가 없어서 못찾음

---

* /init : 코드 분석후 claud.md 파일을 생성함.
* shift+드래그 드롭 : 파일 참조
* @ : 채팅창에 입력하면 파일 리스트가 나옴
* 에디터에서 줄수 드래그 하고 물어보면 해당 줄에 관련 답변
* 윈도우 스크린샷 후 붙여넣기 하면 이미지 첨부 질문 가능
* /terminal-setup에서 shift+enter를 사용할 수 있도록 설정할 수 있음. (extansion에서 말고 터미널에서)
* esc는 멈춤, ctrl은 재게
* ctrl+c 두번은 에이전트 종료
* shift tab으로 모드 변경
	* auto aec : 자동승인
	* plan : 계획
	* normal : 승인후 작업
* /compact : 이전내용 간략하게 줄여서 요약
* /clear : 새로운 세션
* .claude 폴더에 settings.json 파일을 만들어 놓으면 프로젝트별로 환경설정 가능

---

## MCP
* context7 등의 mcp 서버를 활용하면 최신 정보로 답변받기 가능
```
# 기본 설치 (API 키가 없는 경우)
claude mcp add context7 -- npx -y @upstash/context7-mcp

# API 키가 있는 경우 (더 높은 사용 한도 제공)
claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
```

* 키받는곳 : https://context7.com/sign-in?redirect_url=https%3A%2F%2Fcontext7.com%2Fdashboard

```
claude mcp add context7 "npx -y @upstash/context7-mcp"
```
* -y 옵션을 claud 옵션으로 착각하여 npx 옵션으로 적용할 수 있도록 따옴표

/mcp list 를 입력하여 설치된 mcp 목록을 알 수 있음.

https://github.com/upstash/context7
https://context7.com/docs/resources/all-clients#claude-code


https://context7.com/sign-in?redirect_url=https%3A%2F%2Fcontext7.com%2Fdashboard
대시보드로 진입해서 회원가입하고 API키를 발급 받아야함.

## local server connection
```
claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
```

## remote server connection
```
claude mcp add --header "CONTEXT7_API_KEY: YOUR_API_KEY" --transport http context7 https://mcp.context7.com/mcp
```