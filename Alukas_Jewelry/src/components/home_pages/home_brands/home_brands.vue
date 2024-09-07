<template>
  <section class="home-brands   border-black my-8  py-5 flex items-center justify-center ml-8">

    <!-- Swiper Slider Parent Element -->
    <swiper :modules="modules" :breakpoints="breakpoints" @swiper="onSwiper" :space-between="0"
      @slideChange="onSlideChange" class=" lg:container  journalSwiper " navigation>

      <swiper-slide v-for="(item, index) in brands" :key="index" class="p-5">
        <div class="brand-img  relative cursor-pointer flex items-center justify-center ">
          <img :src="item" alt="Brands" class=" brightness-200 group aspect-[1.5] object-contain   ">
          <!-- w-[7rem] h-[1.8rem]
           lg:w-[6rem] lg:h-[1.5rem] -->
          <div class="absolute inset-0  bg-gray-500 w-full h-full opacity-30 hover:opacity-0 mask "></div>
        </div>
      </swiper-slide>


    </swiper>
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
  276: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 4,
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