// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import store from './store'
/* eslint-disable */


// vuex中的state是代表的vue里面的初始化data的数据，通过computed将二者关联起来，只要state修改了，通过computed的计算属性更改数据

// let store = new Vuex.Store({
//   state:{
//     stateA: 'a',
//     stateB: 'b'
//   },
//   getters:{
//     zzy(state,getters){
//       console.log(getters);
//       return state.stateA + ':' + new Date().toDateString();
//     }
//   }
// })

// 访问自身的属性 可以给自身赋值
// console.log(store.state.stateA)
// console.log(store);
// console.log(store.getters.zzy);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
