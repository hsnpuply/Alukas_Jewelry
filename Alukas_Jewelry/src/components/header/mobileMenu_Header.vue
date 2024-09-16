<template>
  <div class="mobileMenu_nav fixed  duration-[700ms]  w-full sm:w-2/3 lg:hidden md:w-1/2 h-svh bg-white z-max+
  border-r-2 border-black -translate-x-full" ref="mobileMenu_nav">
    <aside class="">
      <nav>
        <div class="container py-3 bg-[#222222] w-full flex items-center justify-between">
          <h3 class="text-xl  text-white">Menu</h3>
          <button class="select-none text-[#919191]    text-xl" @click="closeMenu()">
            <Icon icon="gridicons:cross" width="28" height="28" />
          </button>
        </div>
        <ul class="ul_mobile_nav group  py-2 container flex items-start  text-xl flex-col gap-6">
          <li v-for="(item, index) in menuMobile" :key="index" class="cursor-pointer hover:font-semibold duration-100 ">
            {{ item }}
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  toggleNav: Boolean,
});

const mobileMenu_nav = ref(false)
let myToggleNav = props.toggleNav
const closeMenu = () => {
  mobileMenu_nav.value.classList.add('-translate-x-full')
  myToggleNav = !myToggleNav

}

const menuMobile = ref([
  'Home', 'Shop', 'Blogs', 'About us', 'Contact us'
])

</script>

<style scoped></style>
