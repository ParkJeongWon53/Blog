[현대의 해파이토스 블로그 보기](https://benevolent-biscochitos-46a629.netlify.app)

# Vue3 블로그 만들기
[Bootstrap](https://getbootstrap.com/docs/5.1/components/buttons/)<br>
[vue-router](https://router.vuejs.org/)
## 블로그

### Home

1. Nav 구성<br>
- Home, Skill, Protfolio, Contact 구성으로 만들어 준다.<br>
- [router의 active-class 사용](https://router.vuejs.org/api/#active-class)<br>
- active-class 를 사용함으로 Nav 버튼 활성화 유무를 알 수 있게 해준다.

2. Logo 와 폰트 설정<br>
- Noto Sans Korean, Yeon Sung 폰트을 사용하였다.<br>
- 로고만 Yeon Sung 폰트를 사용하였다.<br>
- src/components/Logo.vue 파일 생성!!

3. Headline 생성
- src/components/Headline.vue 생성
- 가운데 정렬을 위해 참고.[bootstrap-containers](https://getbootstrap.com/docs/5.1/layout/containers/)

4. 프로필 생성
- 사진과 소개하는 내용을 삽입한다.

### Contact

1. Vuex 를 활용하기 위해 설치해준다. ___ 나중을 위해 사용해본다..ㅎㅎ___
```
npm i vuex
```
Vuex 는 일종의 상태(state)를 관리하는 라이브러리 이다.<br>
공통의 상태를 공유하기 때문에, 이 상태가 여러 컴포넌트에서 동일한 상태로 관리되어야 한다. Vue는 단방향으로 데이터가 흐르기때문에, 여러 컴포넌트가 한 상태를 공유하는 경우, 형제 컴포넌트간의 상태공유/관리가 복잡해질 수 있다.<br>

2. src/store/index.js 생성, contact.js 생성

3. index.js 에 기본 store 구성을 만들어 진행해 줄것이다.

4. src/main.js 파일에 연결시켜주어야 한다.
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/inedex.js' //이부분!!

createApp(App)
  .use(router)
  .use(store) // 이부분!!
  .mount('#app')
```

5. contact.js 에서 모듈화 되어 사용할 수 있게 namespaced: true 를 설정해주어야 한다. 그래야 index.js 에서 별개의 개념으로 사용가능하다.<br>
```js
// 5가지 옵션!!
namespaced: true  // 모듈로 활용 하여 별개의 데이터로 사용가능!

state: ''  // 상태

getters: ''  // 계산된 상태를 만드는것

mutations: '' // methods 와 유사하여 함수들을 만들어 사용할 수 있다.
// 주의!!! mutations 에서만 데이터를 변경 할 수 있다.

actions: ''  // methods 와 유사하여 함수들을 만들어 사용할 수 있다.
// actions 비동기로 처리된다. (async와 await 사용없이 비동기로 처리된다.)

```
```js
// index.js
import { createStore } from 'vuex'
import contact from './contact'

export default createStore({ 
    contact //모듈화
  }
})
```
### Skill
1. 사용할 수 있는 기능을 카드형태로 구현!!
2. 카드는 플립형태로 회전하여 뒤에 내용작성!

### Protfolio

1. 펼쳐지는 ui를 사용하여 시각적인 효과 증가.


----

작은화면(스마트폰) 환경에서 비정상적으로 보이는 현상을 바로 잡아보자.
