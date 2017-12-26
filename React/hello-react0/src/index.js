import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*
* 关于组建的生命周期的一些理解
* 每一个组件都有自己的生命周期，组件的生命周期只会在第一次渲染的时候进行一次生命周期的过程
* constructor => componentWillMount => render => componentDidMount => componentWillUnmount
*
*这里需要注意的是 组件这一系列的生命周期跟vue的v-if的效果是一样的   更新数据只会触发 render函数的生命周期
*
* */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
