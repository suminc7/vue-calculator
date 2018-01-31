# vue-calculator


#### nodejs 설치
- https://nodejs.org/ko/ 8.9.4

#### git 설치
- https://git-scm.com/download 2.13.0

#### atom 설치
- https://atom.io/  
- 설치 후 cmd 창을 열고 아래와 같이 입력하면 현재 경로가 Atom에서 열린다.
```bash
> atom .
```
<br>
<br>

#### github에서 vue-calculator로 Repository를 생성
- Repository 주소를 복사하고 cmd 창을 열어 아래와 같이 입력한다.
```bash
> d:
> mkdir study
> cd study
> git clone https://github.com/[user]/vue-calculator.git
```
<br>
<br>

#### vue-calculator 폴더에서 아톰을 실행
```bash
> cd vue-calculator
> atom .
```
<br>
<br>

#### npm init를 실행해 package.json을 생성
```bash
> npm init
> (계속 엔터)
> Is this ok? (yes) yes
```
<br>
<br>

#### 모듈 설치
```bash
> npm install -g webpack webpack-dev-server
> npm install webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 --save-dev
```
<br>
<br>

#### 폴더와 파일을 생성
- webpack.config.js, main.js, index.html은 그대로 복사해 사용한다.
```
/dist
 ┗ index.html
/src
 ┗ main.js
.babelrc
webpack.config.js
```
<br>
<br>

#### package.json에 아래와 같이 dev를 추가하고

```json
"scripts": {
    "dev": "webpack-dev-server --hot --open --inline",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```
<br>

#### npm run dev 실행

```bash
> npm run dev
```
<br>

#### 화면에 'hello world'가 보이면 성공!

<br>
<br>
<br>



