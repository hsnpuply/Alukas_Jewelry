<template>
  <section class="feature_products_section  py-12">
    <div class="feature_products pt-4 ">
      <h2 class="text-4xl text-black text-center">Feature Products</h2>
      <div class=" options-button flex items-center gap-6 justify-center py-5 ">
          <button class=" shop_now hover:text-black duration-100 text-xl text-black border-b-2 border-black">New Arrivals</button>
          <button class="shop_now hover:text-black duration-100 text-xl text-gray-500">Featured</button>
          <button class="shop_now hover:text-black duration-100 text-xl text-gray-500">Best Seller</button>
      </div>


      <div class="new_arrivals_products flex items-center justify-center bg-red-700">
      <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    class="cursor-pointer container"
  > 
    <swiper-slide class="releative">
      <img :src="FeatureProducts.feature_products_items[0].pic" alt="">
    </swiper-slide>


  </swiper>

      </div>
      <div class="feautred_products hidden"></div>
      <div class="best_seller_products hidden"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useFeatureProducts } from '../../../stores/stores'

  // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
const AllType_products = ref([]);
const pictureAddresses = ref([]);

const fetchingData = async function() {
    const response = await fetch('../../../../db/pics.json');
    const data = await response.json();

  AllType_products.value = data;
  // console.log(AllType_products.value);
 Object.entries(AllType_products.value).forEach(([key, element]) => {
  element.forEach(item => {
    if (item.type === 'back_product') {
      // console.log(item.pic);
    }
  });
 });

const FeatureProducts = useFeatureProducts()


 await FeatureProducts.getItems()

console.log(FeatureProducts.feature_products_items);

}

fetchingData()







</script>
