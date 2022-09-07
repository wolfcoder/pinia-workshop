<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";
import {useProductStore} from "@/stores/ProductStore"
import {useCartStore} from "@/stores/CartStore"
import { storeToRefs } from "pinia"

// const productStore = useProductStore();
// const cartStore = useCartStore();
// console.log(productStore.name) //"The pineapple Stand"

const { name, products } = storeToRefs(useProductStore());

// const { name:newName } = storeToRefs(useProductStore());
// console.log(newName.value)
// name.value = "Hello new good"

</script>

<template>
  <div class="container">
    <TheHeader />

    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>
