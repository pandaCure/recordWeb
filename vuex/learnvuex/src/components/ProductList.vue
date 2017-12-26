<template>
    <div class="productList">
        <ul>
            <li v-for="(p,index) in product" :key="index">
                {{p.title}}---{{p.price}}
                <br>
                <button @click="addToCart(p)" :disabled='!p.inventory'>买买买</button>
            </li>
        </ul>
    </div>
</template>

<script>
    /* eslint-disable */
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        name: 'productList',
        computed: mapGetters({
            product: 'allProducts'
        }),
        methods: mapActions(['addToCart']),
        created() {
            this.$store.dispatch('getAllProducts');
        }
    }
</script>

