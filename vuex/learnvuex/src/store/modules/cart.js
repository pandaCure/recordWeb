/* eslint-disable */
import * as types from '../mutation-types'
import shop from '../../api/shop'

const state = {
    added: [],
    checkoutStatus: null
}
const getters = {
    checkoutStatus:state => state.checkoutStatus
}
const actions = {
    checkout({ commit, state }, product) {
        const savedCartItems = [...state.added]
        commit(types.CHECKOUT_REQUEST)
        shop.buyProducts(
            product,
            () => commit(types.CHECKOUT_SUCCESS),
            () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
        )
    }
}
const mutations = {
    [types.ADD_TO_CART](state, { id }) {
        const record = state.added.find(p => p.id === id)
        state.checkoutStatus = null
        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },
    [types.CHECKOUT_REQUEST](state) {
        // clear cart
        state.added = []
        state.checkoutStatus = null
    },

    [types.CHECKOUT_SUCCESS](state) {
        state.checkoutStatus = 'successful'
    },

    [types.CHECKOUT_FAILURE](state, { savedCartItems }) {
        // rollback to the cart saved before sending the request
        state.added = savedCartItems
        state.checkoutStatus = 'failed'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}