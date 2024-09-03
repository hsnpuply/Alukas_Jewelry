<template>
  <section class="home-social_media text-center pt-16 pb-8 " >
    <h3 class="social-title text-[38.72px]  ">Follow Us on Instagram
</h3>
<div class="social-desc">
    <p class="social-id text-[#555555] text-2xl py-1">@bersky</p>
</div>
    <div class="social-contents mt-10 p-1 flex " >
        <div class="social-img relative group overflow-hidden cursor-pointer" v-for="(item,index) in social_imgs" :key=index>
            <img :src="item" alt="" class="group-hover:scale-110 duration-300 group w-[330px] h-[320px]">
            <Icon icon="hugeicons:instagram" width="50" height="50"
              style="color: white" 
              class="group-hover:scale-125  absolute top-1/2
               left-1/2 opacity-0 bg-gray-600  group-hover:opacity-100 -translate-x-[50%] -translate-y-[50%]
                rounded-full p-3 duration-500" />
        </div>



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
</script>

<style scoped>
.social-title{
    word-spacing: .5rem;
}
</style>