<template>
  <div class=" px-0 container ">
      <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class=" container  "
  > 
    <swiper-slide class="releative ">
        <img :src="atwo" alt="" class=".wiper-moves min-w-[1204px] h-[600px] lg:w-full lg:h-[60vh] object-cover" >
        <div class="swiper-text absolute top-[3rem] left-28 p-1 text-lg" ref="text1">
          <h2 class="swiper-header      text-[50px] leading-[3.4rem] text-white"
           ref="swiper_header">
            Personalize <br>
            your choker.
          </h2>
          <p class="text-[#aaaaaa] text-2xl pt-5">Create a custom ring as unique as your love.</p>

          <button class="bg-white px-10 py-[.64rem] text-black text-xl mt-8">Shop Now</button>
        </div>
      </swiper-slide>
    <swiper-slide class="releative">
        <img :src="atwo2" alt="" class="min-w-[1234px] h-[600px lg:w-full lg:h-[60vh] object-cover" >
        <div class="swiper-text absolute top-[3rem] left-28 p-1 text-lg" ref="text2">
          <h2 class=" text-[50px] leading-[3.4rem] text-white" ref="swiper_header">
            Grace Designer <br>
            Collection
</h2>
          <p class="text-[#aaaaaa] text-2xl pt-5">A symbol of love and a modern take on gold.</p>

          <button class="bg-white px-10 py-[.64rem] text-black text-xl mt-8">Shop Now</button>
        </div>
    </swiper-slide>

  </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import Swiper core and required modules
  import atwo from '../../../assets/home-grid-showcase-slider-1-1.webp'
  import atwo2 from '../../../assets/home-grid-2.webp'

const screenWidth = ref(window.innerWidth)
  // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



const text1 = ref(null)
const text2 = ref(null)
const swiper_header = ref(null)

const onSwiper = () => {
    text1.value.classList.add('swiper-moves')

}
const onSlideChange = (swiper) => {
  
  const currentSlideIndex = swiper.activeIndex
  
  const currentText = [text1, text2][currentSlideIndex]

  // Hide all texts
  text1.value.classList.remove('swiper-moves')
  text2.value.classList.remove('swiper-moves')
  // Show current text
  setTimeout(() => {
    currentText.value.classList.add('swiper-moves')
    // alert(swiper_header.value)
    swiper_header.value.classList.add('swiper-header-move')

  }, 100)
}
</script>
<style scoped>

.swiper-text{
  top:4rem;
  opacity: 0;
  transition: all 1s ease-in-out
}

.swiper-moves{
  opacity: 1;
  top:8rem;
}

@keyframes swiper_appear {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
