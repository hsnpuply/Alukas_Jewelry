<template>
    <div class="bg-green-400 h-full overflow-hidden ">
        <h1 class="text-3xl text-center pt-6 pb-4">Lorem, ipsum.</h1>
        <MyTestComponent v-for="(item, index) in 5" :key="index"
            :myItems="myFeaturedProducts.getAllFeatureProducts[index]" />
        hi

    </div>
</template>

<script setup>
import { useFeatureProducts } from '@/stores/stores';
import MyTestComponent from './myTestComponent.vue';

const myFeaturedProducts = useFeatureProducts()
myFeaturedProducts.getAsyncProducts()
</script>
