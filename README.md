# koa에 apidoc을 사용해보자 

## API 명세를 시각화 해보자

```bash
$ npm run generate
```

으로 시각화 템플릿 생성

```json
{
  "scripts": {
    "run": "node src/index.js 3000",
    "generate": "apidoc -i src -o apidoc/ -t ./node_modules/apidoc/template/"
  }
}
```

apidoc 명령어로 수행
apidoc은 기본적으로 모든 *.js를 탐색하기 때문에 -i로 소스 경로를 지정해준다
템플릿은 기본 내장 템플릿을 사용하도록 설정

### 주석을 include 가능

## 히스토리 관리가 가능

수동적으로 히스토리리 관리가 가능하다 src/_apidoc.js를 참고하면 되는데
변경이전에 이 파일로 주석을 직접 백업하면 히스토리 관리가 가능하다

## ACL 관리가 가능한지 해보자

ACL 관리는 해주지 않는 것 같다
