<script setup>
import Header_home from '../../components/header.vue';
import Footer_home from '../../components/footer.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Home_swiper from "./Home_Swiper/home_swiper.vue";
import Home_gridShowCase from "./home_grid_Showcase/home_grid_showcase.vue";
import Home_featureProdcuts from "./home_feature_prodcuts/home_featured_products.vue";


</script>
<template>
<div class="size-of-screen">
                <div class="fixed bottom-16 right-8 bg-green-800 p-3 rounded-full text-2xl border-4 border-white text-white z-[1000]">
            <p class="sm:hidden ">Tony</p>
            <p class="hidden sm:block md:hidden">Small</p>
            <p class="hidden md:block lg:hidden ">Medium</p>
            <p class="hidden lg:block xl:hidden  ">Large </p>
            <p class="hidden xl:block 2xl:hidden">Xl</p>
            <p class="hidden 2xl:block">2XL</p>
    </div>
</div>
    <Header_home/>
    <main>
    <RouterView>
        <Home_swiper/>
        <Home_gridShowCase/>
        <Home_featureProdcuts/>
        
    </RouterView>

    </main>
    <Footer_home/>

</template>


