<template>
  <div class=" 2xl:px-0 container  px-2  w-full bg-violet-800 ">

    <!-- Swiper Slider Parent Element -->
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
      class=" homeSwiper " navigation>

      <!-- Slider Number 1 -->
      <swiper-slide class="releative  ">
        <div class="swiper-1 w-full">
          <div class="swiper-text " ref="text1">
            <h2 class="swiper-header
                 
               " ref="swiper_header">
              Personalize <br>
              your choker.
            </h2>
            <p class="swiperDesc">
              Create a custom ring as unique as your love.
            </p>
            <div class="shopButton_container ">
              <button class="shopButton">Shop Now</button>
            </div>
          </div>

        </div>
      </swiper-slide>


      <!-- Slider Number 2 -->
      <swiper-slide class="releative">
        <div class="swiper-2">

          <div class="swiper-text" ref="text2">

            <h2 class="swiper-header
                 " ref="swiper_header">
              Grace Designer <br>
              Collection
            </h2>
            <p class="swiperDesc">A symbol of love and a
              modern take on gold.</p>

            <div class="shopButton_container  ">
              <button class="shopButton">Shop Now</button>
            </div>
          </div>
        </div>

      </swiper-slide>

    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

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
@media screen and (min-width:768px) {
  .swiper-text {
    opacity: 0;
    transition: all 1s ease-in-out
  }

  .swiper-moves {
    opacity: 1;
    transform: translateY(0)
  }

}


@keyframes swiper_appear {
  0% {
    opacity: 0;
  }

  40% {
    opacity: .55;
  }

  100% {
    opacity: 1;
  }
}

.swiper-1,
.swiper-2 {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.swiper-1 {
  /* background-image: url('../../../assets/home-grid-showcase-slider-1-1.webp'); */
  background: green;
}

.swiper-2 {
  /* background-image: url('../../../assets/home-grid-2.webp'); */
  background: green;
}

@media screen and (max-width:623px) {
  .swiper-2 {
    /* background-image: url('../../../assets/Slider-2-mini-size.webp'); */
    background: green;
  }

  .swiper-1 {
    /* background-image: url('../../../assets/Slider-1-mini-size.webp'); */
    background: green;
  }



}

@media screen and (min-width:624px) and (max-width:1023px) {
  .swiper-2 {
    /* background-image: url('../../../assets/Slider-2-normal-size.webp'); */
    background: green;
  }


  .swiper-1 {
    /* background-image: url('../../../assets/Slider-1-normal-size.webp'); */
    background: green;
  }

  .swiper-text {
    opacity: 0;
    transition: all 1s ease-in-out
  }

  .swiper-moves {
    opacity: 1;
    top: 0%;
  }

}
</style>

<style>
@media screen and (max-width:767px) {

  .home_swiper .swiper-button-next,
  .home_swiper .swiper-button-prev,
  .swiper-button-disabled {
    opacity: 0;
    visibility: hidden;
  }

  .swiper-text {
    opacity: 0;
    transition: all 1s ease-in-out
  }

  .swiper-moves {
    opacity: 1;
    transform: translateY(0px);
  }


}

@media screen and (min-width:767px) and (max-width:1023px) {

  .home_swiper .swiper-button-next,
  .home_swiper .swiper-button-prev,
  .swiper-button-disabled {
    opacity: 1;
    visibility: visible;
  }

  .swiper-button-prev {
    left: 20px;
  }

  .swiper-button-next {
    right: 20px;
  }
}

.swiper-button-prev,
.swiper-button-next {
  color: white !important;
  opacity: 0;
  transition: all .4s ease-out;
}

.swiper-button-disabled {
  opacity: 0 !important;
  transition: all .4s ease-out !important;
}

.home_swiper:hover .swiper-button-disabled {
  opacity: .35 !important;
}

.swiper-button-prev {
  left: 30px;
}

.swiper-button-next {
  right: 30px;
}

.home_swiper:hover .swiper-button-prev {
  left: 20px !important;
  opacity: 1;
}

.home_swiper:hover .swiper-button-next {
  right: 20px !important;
  opacity: 1;
}

.swiper-img {
  width: 100%;
  height: 100%;
}
</style>