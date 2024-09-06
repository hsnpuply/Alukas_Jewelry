<template>
    <section class="home-social_media text-center pt-16 pb-8 ">
        <h3 class="social-title text-[2.4rem]  ">Follow Us on Instagram
        </h3>
        <div class="social-desc">
            <p class="social-id text-[#555555] text-2xl py-1">@bersky</p>
        </div>
        <div class="social-contents mt-10 p-1 flex ">
            <swiper :modules="modules" :breakpoints="breakpoints" @swiper="onSwiper" @slideChange="onSlideChange"
                class=" socialSwiper " navigation>
                <swiper-slide class="releative" v-for="(item, index) in social_imgs" :key="index">
                    <div class="social-img relative group overflow-hidden cursor-pointer">
                        <img :src="item" alt="" class="group-hover:scale-110 duration-300 group w-[330px] h-[320px]">
                        <Icon icon="hugeicons:instagram" width="50" height="50" style="color: white" class="group-hover:scale-125  absolute top-1/2
                            left-1/2 opacity-0 bg-gray-600  group-hover:opacity-100 -translate-x-[50%] -translate-y-[50%]
                            rounded-full p-3 duration-500" />
                    </div>
                </swiper-slide>

            </swiper>


        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue'
import social_1 from '../../../assets/social/1.jpg';
import social_2 from '../../../assets/social/2.jpg';
import social_3 from '../../../assets/social/3.jpg';
import social_4 from '../../../assets/social/4.jpg';
import social_5 from '../../../assets/social/5.jpg';
import social_6 from '../../../assets/social/6.jpg';

const social_imgs = ref([
    social_1,
    social_2,
    social_4,
    social_6,
    social_5,
    social_3,
])



// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

const modules = [Navigation, Pagination, Scrollbar, A11y, Mousewheel] // Add Mousewheel to the modules array


const breakpoints = {
    276: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    1024: {
        slidesPerView: 5,
    }
    ,
    1122: {
        slidesPerView: 6,
    }

};
</script>

<style scoped>
@media screen and (min-width:768px) {
    .social-title {
        word-spacing: .5rem;
    }
}
</style>