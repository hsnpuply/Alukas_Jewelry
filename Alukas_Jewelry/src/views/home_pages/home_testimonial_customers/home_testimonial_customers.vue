<template>
  <section class="home-testimonial_customers w-full  my-8 ">
    <div class="container  w-full py-8">

       <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="min-h-[40vh] max-w-[50rem]  "
  > 
      <swiper-slide class="releative  w-[100vw] h-full">
        <div class="customer-1 flex items-center justify-start flex-col gap-4">
          <h3 class="title-customer">
            ALUKAS IS MY FAVOURITE STORE
          </h3>

          <div class="customer-rate flex items-center justify-center gap-2 py-3">
            <Icon icon="noto:star" width="24" height="24" v-for="(item,index) in 4" :key="index" />
          </div>

          <div class="customer-qoute  ">
            <p class="text-3xl text-center   max-w-2xl ">Great products and designs and such great quality, they always wash up well no matter how many times I wash them.		</p>
          </div>

          <div class="customer-profile flex flex-col items-center gap-3">
            <img src="../../../assets/customers-profile/1.webp" alt="" class="rounded-full w-24">
            <span class="text-[#222222] text-base">
              
                      - Donald Duclk
                    
            </span>
          </div>

        </div>
    </swiper-slide>


          <swiper-slide class="releative  w-[100vw] h-full">
        <div class="customer-1 flex items-center justify-start flex-col gap-4">
          <h3 class="title-customer">
            ALUKAS IS MY FAVOURITE STORE
          </h3>

          <div class="customer-rate flex items-center justify-center gap-2 py-3">
            <Icon icon="noto:star" width="24" height="24" v-for="(item,index) in 4" :key="index" />
          </div>

          <div class="customer-qoute  ">
            <p class="text-3xl text-center   max-w-2xl ">Great products and designs and such great quality, they always wash up well no matter how many times I wash them.		</p>
          </div>

          <div class="customer-profile flex flex-col items-center gap-3">
            <img src="../../../assets/customers-profile/2.webp" alt="" class="rounded-full w-24">
            <span class="text-[#222222] text-base">
              
                      - Mary Green
                    
            </span>
          </div>

        </div>
    </swiper-slide>


              <swiper-slide class="releative  w-[100vw] h-full">
        <div class="customer-1 flex items-center justify-start flex-col gap-4">
          <h3 class="title-customer">
            ALUKAS IS MY FAVOURITE STORE
          </h3>

          <div class="customer-rate flex items-center justify-center gap-2 py-3">
            <Icon icon="noto:star" width="24" height="24" v-for="(item,index) in 4" :key="index" />
          </div>

          <div class="customer-qoute  ">
            <p class="text-3xl text-center   max-w-2xl ">Great products and designs and such great quality, they always wash up well no matter how many times I wash them.		</p>
          </div>

          <div class="customer-profile flex flex-col items-center gap-3">
            <img src="../../../assets/customers-profile/3.png" alt="" class="rounded-full w-24">
            <span class="text-[#222222] text-base">
              
                      - Mary Green
                    
            </span>
          </div>

        </div>
    </swiper-slide>

    

  </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

</script>


<style  scoped>
.home-testimonial_customers{
  background: url('../../../assets/customers-profile/Background.webp');
}
</style>