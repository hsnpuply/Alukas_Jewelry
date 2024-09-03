<template>
  <div class=" md:px-0 container  px-2">
      <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class=" container home_swiper max-w-[1800px]  mb-8 mt-2 "
    navigation
  > 

    <swiper-slide class="releative ">
        <img :src="atwo" alt="" class="wiper-moves min-w-[1304px]
         h-[600px] lg:w-full lg:h-[70vh] object-cover" >
        <div class="swiper-text absolute top-[4rem] left-10 md:left-28 p-1 text-lg" ref="text1">
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
        <img :src="atwo2" alt="" class="min-w-[1304px] h-[600px] lg:w-full lg:h-[70vh] object-cover" >
              <div class="swiper-text absolute top-[4rem] left-10 md:left-28 p-1 text-lg" ref="text2">
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
  import { Mousewheel } from 'swiper/modules';

// import Swiper core and required modules
  import atwo from '../../../assets/home-grid-showcase-slider-1-1.webp'
  import atwo2 from '../../../assets/home-grid-2.webp'

const screenWidth = ref(window.innerWidth)
  // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  const modules = [Navigation, Pagination, Scrollbar, A11y, Mousewheel] // Add Mousewheel to the modules array


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
  top:11rem;
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

<style>
.swiper-button-prev, .swiper-button-next{
  color:white !important;
  opacity: 0;
  transition: all .4s ease-out;
}

.swiper-button-disabled{
  opacity: 0 !important;
  transition: all .4s ease-out !important;
}

.home_swiper:hover .swiper-button-disabled{
  opacity: .35 !important;
}

.swiper-button-prev {
  left: 30px;
}
.swiper-button-next {
  right: 30px;
}
.home_swiper:hover .swiper-button-prev{
  left: 20px !important;
  opacity: 1;
}
.home_swiper:hover .swiper-button-next{
  right: 20px !important;
  opacity: 1;
}
.swiper-img{
  width: 100%;
  height: 100%;
  background-color: red !important;
}


</style>