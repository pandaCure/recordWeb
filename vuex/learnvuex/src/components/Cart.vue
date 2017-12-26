<template>
  <div class="cart">
    <h1>我的购物车</h1>
    <p v-show='!products.length'>你需要买一些东西，不要不好意思</p>
    <ul>
      <li v-for="(p,index) in products" :key="index">
        {{p.title}} --- {{p.price}} * {{p.quantity}}
      </li>
    </ul>
    <p>总价：{{total}}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
  /* eslint-disable */
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    name: 'cart',
    computed:{
      ...mapGetters({
        products:'cartProducts',
        checkoutStatus:'checkoutStatus'
      }),
      total(){
        return this.products.reduce((sum,p,index,arr) => {
          return sum += sum + p.price * p.quantity
        },0)
      }
    },
    methods:{
        checkout(product){
          this.$store.dispatch('checkout',product)
        }
      }
  }
</script>

