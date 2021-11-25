# Vue 3 Example Codes

한 권으로 배우는 Vue.js 3 책에 실린 모든 코드들입니다.
모든 예제는 package.json 파일이 동봉되어 있으며, node_modules 가 포함되어 있지 않습니다.

## 각 예제 관련 패키지 설치 방법
npm install

## 서버 실행 방법
node server.js

## 앱 실행 방법 

### 디버깅 모드
npm run dev

### 패키징 모드
npm run build

_vitejs 를 통해 빌드된 dist 아래 파일들은 적절한 서버환경으로 Copy해야 합니다. (IIS, Apache 등)_


### github Permission denied (publickey) 오류 해결법
- git remote set-url origin https://bmclab-git@github.com/bmclab-git/vue3-examples.git
- 위 코드로 깃허브 페러지토리에 대한 접근 권한/인증을 받으면 됩니다.
