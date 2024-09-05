<template>
  <section class="home-testimonial_customers w-full  my-24  ">
    <div class="container  w-full pt-8 pb-6">

      <swiper :modules="modules" :slides-per-view="1" :space-between="50" @swiper="onSwiper"
        @slideChange="onSlideChange" class="min-h-[40vh] max-w-[50rem]  cursor-grab   ">
        <swiper-slide class="releative  w-[100vw] h-full py-12  " v-for="(item, index) in ourCustomers" :key="index">

          <div class="customer-1 flex items-center justify-start flex-col gap-4">
            <h3 class="title-customer text-2xl">
              {{ item.customerTitle }}
            </h3>

            <div class="customer-rate flex items-center justify-center gap-2 py-3">
              <Icon icon="noto:star" width="24" height="24" v-for="(myitem, index) in item.customerStarsRate"
                :key="index" />
            </div>

            <div class="customer-qoute  ">
              <p class="text-3xl text-center   max-w-2xl ">{{ item.customerDesc }}</p>
            </div>

            <div class="customer-profile flex flex-col items-center gap-3">
              <img :src="item.customerImg" alt="" class="rounded-full w-24">
              <span class="text-[#222222] text-base">

                - {{ item.customerName }}

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
import { ref, onMounted } from 'vue';



import customer0 from '../../../assets/customers-profile/1.webp'
import customer1 from '../../../assets/customers-profile/2.webp'
import customer2 from '../../../assets/customers-profile/3.png'

const ourCustomers = ref({
  0: {
    'customerTitle': 'ALUKAS IS MY FAVOURITE STORE',
    'customerStarsRate': 4,
    'customerName': 'Donald Duclk',
    'customerDesc': 'Great products and designs and such great quality, they always wash up well no matter how many times I wash them.',
    'customerImg': customer0
  },
  1: {
    'customerTitle': 'Beautiful Products',
    'customerStarsRate': 5,
    'customerName': 'Nimah Oxely',
    'customerDesc': `I've never been a big jewelry person, but the piece I got from Alukas Jewelry has become my favorite accessory. The design is sleek and modern, and the quality is outstanding.     `,
    'customerImg': customer1
  },
  2: {
    'customerTitle': 'Lovely Products',
    'customerStarsRate': 3,
    'customerName': 'Mary Green',
    'customerDesc': `I'm absolutely thrilled with my Alukas jewelry purchase! The products are not only stunningly designed, but they're also incredibly durable.`,
    'customerImg': customer2
  }
})



</script>


<style scoped>
.home-testimonial_customers {
  background: url('../../../assets/customers-profile/Background.webp');
}
</style>