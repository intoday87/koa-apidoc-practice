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
- [@apiUse](http://apidocjs.com/#param-api-use)

## 히스토리 관리가 가능
- [versioning](http://apidocjs.com/#example-versioning)

수동적으로 히스토리리 관리가 가능하다 src/_apidoc.js를 참고하면 되는데
변경이전에 이 파일로 주석을 직접 백업하면 히스토리 관리가 가능하다

## ACL 관리가 가능한지 해보자

ACL 관리는 해주지 않는 것 같다

# 장단점

## 장점
- API를 작성하는 다른 프레임웤과 완전히 독립적이다(의존성 없음, 유연)
- 주석에만 정해진 규칙대로 javadoc과 같이 기술하면되고 설정이 매우 단순하고 직관적이다
- API 버전간 diff를 보여주도록 주석기반 히스토리 관리가 가능
- 주석기반으로 확장(상속)이 가능([@apiUse](http://apidocjs.com/#param-api-use))

## 단점
- ACL 관리와 같은 기능이 없다
- 코드 기반으로 동작하지 못하기 때문에 프로덕션 코드와 주석과 동기화를 보장할 수 없다
    - 사용하는 모델 코드를 주석에서 연결해서 도큐먼트화 할 수 없다
- 히스토리 기능도 수동으로 백업해줘야 가능하다(작성자가 보장해줘야하는)
