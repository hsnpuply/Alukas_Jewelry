<template>
  <div class="px-3 py-2">
      <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="min-h-[40vh] max-w-[50rem]"
  > 
    <swiper-slide class="releative">
        <img :src="atwo" alt="" class="w-[500px] h-[500px] object-cover" >
        <p class="absolute top-0 left-0 p-1 bg-black text-white" ref="nigger">Some Random Item ...</p>
    </swiper-slide>
    <swiper-slide class="releative">
        <img :src="atwo2" alt="" class="w-[500px] h-[500px] object-cover" >
        <p class="absolute top-0 left-0 p-1 bg-black text-white" ref="nigger">Some Random Item ...</p>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import Swiper core and required modules
  import atwo from '../../../assets/home-grid-showcase-slider-1-1.webp'
  import atwo2 from '../../../assets/2_84c973d9-47c0-484c-9962-7b6e95370227.webp'

const screenWidth = ref(window.innerWidth)

  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

const nigger=ref('')
      const onSwiper = (swiper) => {
        nigger.value.classList.add('bg-red-800', 'p-5','bounce');
      };
      const onSlideChange = () => {

          nigger.value.classList.add('bg-red-800', 'p-5', 'bounce');
  setTimeout(() => {
    nigger.value.classList.remove('bounce');
  },100); // remove bounce class after 1 second

      };
</script>
<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: scale(1) skew(365deg);
  }
  50% {
    transform: scale(1.2) skew(100deg);
  }
  75% {
    transform: scale(.8) skew(0deg);
  }
}
.bounce {
  animation: bounce 4s infinite;
}
</style>
