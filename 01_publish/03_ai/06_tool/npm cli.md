
* cli 명령어를 만들어 ai가 사용하도록 하는 과정
# 개요

npm install -g something 했을때 something 명령어가 생기는 이유는, 그 패키지의 package.json에 bin 필드가 있기 때문. npm이 그 스크립트를 시스템 PATH에 심볼릭 링크해줌.

bin/index.js 첫 줄에는 반드시 셔뱅(shebang)이 있어야 OS가 Node로 실행함
```js
#!/usr/bin/env node
console.log("hello world!");
```

# 서브 명령어
`mini_cli run` 입력 시, Node는 `process.argv`로 인자를 받습니다:
- `process.argv[0]` = node 실행파일 경로
- `process.argv[1]` = 스크립트 경로
- `process.argv[2]` = `"run"` ← 우리가 보고 분기할 값

* 작은 프로그램경우는 argv[2] === "run"등으로 하면되고 커지면 commander같은 라이브러리 사용 

* 로컬설치 : npm install -g ./mini_cli_cmd
* 글로벌 공개 : `npm publish` → 다른 곳에서 `npm install -g mini_cli_cmd`