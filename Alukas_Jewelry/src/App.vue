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

<!-- <Icon icon="mdi:success" style="color: green;font-size: 44px "  /> -->
<template>
  <div class="toTheTop">
    <div class="arrowUpHome">
      <Icon icon="lets-icons:arrow-top" class="text-4xl text-Metalic" @click="toTop()" />
    </div>
  </div>
  <Header_home />
  <RouterView />

  <Footer_home />



</template>

<style scoped></style>
