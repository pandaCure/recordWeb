<template>
    <div id="app">
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <product-list></product-list>
        <hr>
        <cart></cart>
        <h1>标题</h1>
        <div>{{title}}</div>
        <div>{{d}}</div>
        <!-- <div>{{a}}</div>
            <div>{{stateB}}</div>
            <div>{{c}}</div> -->
    </div>
</template>

<script>
    /* eslint-disable */
    import Cart from './Cart.vue'
    import ProductList from './ProductList.vue'
    import {
        mapState,
        mapGetters
    } from 'vuex'
    export default {
        name: 'app',
        components: {
            Cart,
            ProductList
        },
        // mounted(){
        //     console.log(this);
        //     console.log(this.$store.state.stateB);
        // },
        // 这里有两种处理mapState的方法，一种是key与value值相同，一种不相同
        computed: {
            ...mapState({
                title: state => state.products.all
            }),
            ...mapGetters({
                d: 'allProducts'
            })
            // ...mapState({
            //     a:state => state.stateA,
            //     // 必须这么写 不能使用ES6
            //     stateB:'stateB',
            //     c(state){
            //         return state.stateB + 'lllll';
            //     }
            // })
            // ...mapState(['stateA','stateB'])
        }
    }
</script>

<style scoped>

</style>


