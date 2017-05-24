# vue-calculator Step1


#### Vue 모듈 설치 

```bash
> npm install vue --save
> npm install vue-loader css-loader vue-template-compiler --save-dev
```
<br>
<br>

#### 파일 교체

- main.js
```javascript
import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
```
<br/>
<br/>

- dist/index.html
```html
<body>
<div id="app"></div> <!-- 추가 -->
<script src="js/main.js"></script>
</body>
```
<br/>

- src/App.vue
```vue
<template>
    <div id="app">
        Hello World Vue!
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        background-color: #ccc;
    }
</style>
```


<br>
<br>
<br>
<br>

#### github에서 vue-calculator로 Repository를 생성
- Repository 주소를 복사하고 cmd 창을 열어 아래와 같이 입력한다.
<pre><code>
> d:
> mkdir study
> cd study
> git clone https://github.com/[user]/vue-calculator.git
</code></pre>
<br>
<br>
<br>
<br>

#### vue-calculator 폴더에서 아톰을 실행
<pre><code>
> cd vue-calculator
> atom .
</code></pre>
<br>
<br>
<br>
<br>

#### npm init를 실행해 package.json을 생성
<pre><code>
> npm init
> (계속 엔터)
> Is this ok? (yes) yes
</code></pre>
<br>
<br>
<br>
<br>

#### 모듈 설치
<pre><code>
> npm install -g webpack webpack-dev-server
> npm install babel-loader babel-core babel-preset-es2015 --save-dev
</code></pre>
<br>
<br>
<br>
<br>

#### 폴더와 파일을 생성
- webpack.config.js, main.js, index.html은 그대로 복사해 사용한다.
<pre><code>
/dist
 ┗ index.html
/src
 ┗ main.js
.babelrc
webpack.config.js
</code></pre>
<br>
<br>
<br>
<br>

#### 아래의 명령어 실행
- 화면에 'hello world'가 보이면 성공!
<pre><code>
> webpack-dev-server --hot --open --inline
</code></pre>
<br>
<br>
<br>



