<template>
  <section class="feature_products_section  py-12">
    <div class="feature_products pt-4 relative">
      <h2 class="text-4xl text-black text-center">Feature Products</h2>
      <div class=" options-button flex items-center gap-8 justify-center py-5 ">
 <button
          :class="{ 'seletcedProduct': selectedButton === 'new-arrivals', 'unSelected-product': selectedButton !== 'new-arrivals' }"
          @click="selectedButton = 'new-arrivals'"
          class="hover:text-black duration-100 text-xl text-gray-500"
        >
          New Arrivals
        </button>
        <button
          :class="{ 'seletcedProduct': selectedButton === 'featured', 'unSelected-product': selectedButton !== 'featured' }"
          @click="selectedButton = 'featured'"
          class="relative hover:text-black duration-100 text-xl text-gray-500"
        >
          Featured
        </button>
        <button
          :class="{ 'seletcedProduct': selectedButton === 'best-seller', 'unSelected-product': selectedButton !== 'best-seller' }"
          @click="selectedButton = 'best-seller'"
          class="relative hover:text-black duration-100 text-xl text-gray-500"
        >
          Best Seller
        </button>
      </div>


      <div class="new_arrivals_products flex items-center justify-center bg-red-700  bg-green-700 absolute w-full top-[7.6rem]" 
      :class="selectedButton === 'new-arrivals' ? 'appearList' : 'disappearList'"
      >
      <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    class="cursor-pointer container"
  > 
    <swiper-slide class="releative">
      <img src="../../../assets/featured_products/best_seller/back_product-1.webp" alt="">
       
    </swiper-slide>


  </swiper>

      </div>
      
      <div class="feautred_products flex items-center justify-center bg-green-700 absolute w-full top-[7.6rem]"
            :class="selectedButton === 'featured' ? 'appearList' : 'disappearList'" >
            <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    class="cursor-pointer container"
  > 
    <swiper-slide class="releative">
      <img src="../../../assets/featured_products/best_seller/product-2.webp" alt="">
       
    </swiper-slide>
        <swiper-slide class="releative">
      <img src="../../../assets/featured_products/best_seller/product-4.webp" alt="">
       
    </swiper-slide>


  </swiper>
      </div>
      
      <div class="best_seller_products  bg-violet-700 absolute w-full top-[7.6rem]"
     :class="selectedButton === 'best-seller' ? 'appearList' : 'disappearList'"

      >
                    <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    class="cursor-pointer container"
  > 
    <swiper-slide class="releative">
      <img src="../../../assets/featured_products/best_seller/product-2.webp" alt="">
       
    </swiper-slide>
        <swiper-slide class="releative">
      <img src="../../../assets/featured_products/best_seller/product-2.webp" alt="">
       
    </swiper-slide>



  </swiper>
      </div>
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




const selectedButton = ref('new-arrivals');


</script>

<style scoped>


.unSelected-product,.seletcedProduct{
  position: relative;
  overflow: hidden;
}
.seletcedProduct{
  color:black
}

.unSelected-product::after,.seletcedProduct::after{
  content: '';
  height: 2px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  bottom: 0;
  left: 0%;
  transition: all .5s .2s ease-out, transform 1s .2s ease-out;

}
.unSelected-product::after{
  width: 0;
}

.seletcedProduct::after{
  width: 100%;
}

.unSelected-product:hover::after{
  width: 100%;
}


</style>