/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        cart,
        products
    },
    actions,
    getters
})