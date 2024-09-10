<script setup>
import Header_home from '@/components/header/header.vue';
import Footer_home from '@/components/footer/footer.vue';
import { RouterView } from 'vue-router';
import Home_swiper from "@/components/home_pages/Home_Swiper/home_swiper.vue";
import Home_gridShowCase from "@/components/home_pages/home_grid_Showcase/home_grid_showcase.vue";
import Home_featureProdcuts from "@/components/home_pages/home_feature_prodcuts/home_featured_products.vue";
import Home_banner from '@/components/home_pages/home_banner/home_banner.vue';
import Home_journal from '@/components/home_pages/home_journal/home_journal.vue';
import Home_testimonial_customers from '@/components/home_pages/home_testimonial_customers/home_testimonial_customers.vue';
import Home_brands from '@/components/home_pages/home_brands/home_brands.vue';
import Home_social_media from '@/components/home_pages/home_social_media/home_social_media.vue';

const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


</script>
<template>
    <div class="toTheTop">
        <div
            class="bg-title-gray text-white z-[10000000] fixed bottom-[5%] right-[4%]  rounded-full p-1 cursor-pointer">
            <Icon icon="lets-icons:arrow-top" class="text-4xl text-[#222222]" @click="toTop()" />
        </div>
    </div>
    <Header_home />
    <main>
        <RouterView>
            <Home_swiper />
            <Home_gridShowCase />
            <Home_featureProdcuts />
            <Home_banner />
            <Home_journal />
            <Home_testimonial_customers />
            <Home_brands />
            <Home_social_media />

        </RouterView>
        <!-- <div class="h-[40vh] w-full bg-green-600"></div> -->
    </main>
    <Footer_home />

</template>
