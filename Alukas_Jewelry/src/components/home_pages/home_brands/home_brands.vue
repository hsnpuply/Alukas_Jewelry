<template>
  <section class="home-brands   border-black my-8  py-5 flex items-center justify-center ml-8">

    <!-- Swiper Slider Parent Element -->
    <swiper :modules="modules" :breakpoints="breakpoints" @swiper="onSwiper" @slideChange="onSlideChange"
      class=" journalSwiper " navigation>

      <!-- <swiper-slide class="releative  w-[100vw] h-full py-12  " v-for="(item, index) in brands" :key="index">
        <div class="container flex items-center py-12  gap-24 justify-center  px-0">
          <div class="brand-img  p-2  min-w-[400px] relative cursor-pointer">
            <img :src="item" :alt="brand" class=" brightness-200  w-full   group">
            <div class="absolute inset-0  bg-gray-500 w-full h-full opacity-30 hover:opacity-0 mask "></div>
          </div>
        </div>
      </swiper-slide> -->
      <swiper-slide v-for="(item, index) in brands" :key="index" class="p-5">
        <div class="brand-img  relative cursor-pointer flex items-center justify-center ">
          <img :src="item" alt="Brands" class=" brightness-200     group ">
          <div class="absolute inset-0  bg-gray-500 w-full h-full opacity-30 hover:opacity-0 mask "></div>
        </div>
      </swiper-slide>


    </swiper>
    <!-- <div class="container flex items-center py-12  gap-24 justify-center  px-0">
      <div class="brand-img  p-2  min-w-[400px] relative cursor-pointer" v-for="(brand, index) in brands" :key="index">
        <img :src="brand" :alt="brand" class=" brightness-200  w-full   group">
        <div class="absolute inset-0  bg-gray-500 w-full h-full opacity-30 hover:opacity-0 mask "></div>
      </div>
    </div> -->
  </section>
  <hr class="bg-[#1011] w-full h-full p-1">
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { ref } from 'vue'


const brands = ref([
  Breshka,
  mango,
  pull_bear,
  rayBan,
  zara,
])

const breakpoints = {
  576: {
    slidesPerView: 5,
  },
  768: {
    slidesPerView: 1,
  },
  1044: {
    slidesPerView: 5,

  }
};


import Breshka from '../../../assets/brands/Bershka.png'
import mango from '../../../assets/brands/mango.png'
import pull_bear from '../../../assets/brands/pull-bear.png'
import rayBan from '../../../assets/brands/ray-ban.png'
import zara from '../../../assets/brands/zara.png'
</script>
<style scoped>
.mask::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* or any other color you want */
}
</style>