<template>
  <section class="home-brands  border-b-[1px] border-black my-8">
    <div class="container flex items-center py-12  gap-24 justify-center  px-0">
        <div class="brand-img  p-2  w-1/4 relative cursor-pointer" v-for="(brand, index) in brands" :key="index">
<img 
:src="brand"
  :alt="brand" 
  class=" brightness-200  w-28   group"
>
<div class="absolute inset-0  bg-gray-500 w-full h-full opacity-30 hover:opacity-0 mask "></div>
</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const brands = ref([
  Breshka,
  hm,
  mango,
  pull_bear,
  rayBan,
  zara,
])

import Breshka from '../../../assets/brands/Bershka.png'
import hm from '../../../assets/brands/hm.png'
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
  background-color: #fff; /* or any other color you want */
}
</style>