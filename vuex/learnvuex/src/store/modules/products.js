/* eslint-disable */
import shop from '../../api/shop'
import * as types from '../mutation-types'
const state = {
    all: []
}

const getters = {
    allProducts(state, getters) {
        return state.all;
    }
}

const mutations = {
    [types.RECEIVE_PRODUCTS](state, { products }) {
        state.all = products
    },
    [types.ADD_TO_CART](state, { id }){
        state.all.find(pro => pro.id === id).inventory--;
    }
}

const actions = {
    getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit(types.RECEIVE_PRODUCTS, { products })
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}