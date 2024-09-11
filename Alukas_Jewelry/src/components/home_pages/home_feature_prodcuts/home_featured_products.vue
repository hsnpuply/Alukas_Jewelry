<template>
  <section class="feature_products_section h-[45rem]  overflow-hidden pb-24 pt-16 px-2 lg:px-0">

    <div class="feature_products pt-4 relative">
      <h2 class="text-4xl text-black text-center">Feature Products</h2>

      <div class=" options-button flex items-center gap-8 justify-center py-5 ">
        <button
          :class="{ 'seletcedProduct': selectedButton === 'new-arrivals', 'unSelected-product': selectedButton !== 'new-arrivals' }"
          @click="selectedButton = 'new-arrivals'" class="hover:text-black duration-100 text-xl text-gray-500">
          New Arrivals
        </button>
        <button
          :class="{ 'seletcedProduct': selectedButton === 'featured', 'unSelected-product': selectedButton !== 'featured' }"
          @click="selectedButton = 'featured'" class="relative hover:text-black duration-100 text-xl text-gray-500">
          Featured
        </button>
        <button
          :class="{ 'seletcedProduct': selectedButton === 'best-seller', 'unSelected-product': selectedButton !== 'best-seller' }"
          @click="selectedButton = 'best-seller'" class="relative hover:text-black duration-100 text-xl text-gray-500">
          Best Seller
        </button>
      </div>
      <div class="featured_product_container w-full h-[60vh] overflow-hidden  ">



        <div class="new_arrivals_products flex items-center justify-center
       bg-violet-7002  absolute w-full top-[6rem]  py-5 lg:px-8"
          :class="selectedButton === 'new-arrivals' ? 'appearList' : 'disappearList' + ' down'">
          <swiper :modules="modules" :breakpoints="breakpoints" space-between="2%" class="cursor-pointer container   ">

            <swiper-slide v-for="(item, index) in 4" :key="index">
              <Products :my-products="myFeaturedProducts" />
            </swiper-slide>

          </swiper>
        </div>

        <div class="featured_products flex items-center justify-center
       absolute w-full top-[7.6rem]  " :class="selectedButton === 'featured' ? 'appearList' : 'disappearList'">
          <swiper :modules="modules" :breakpoints="breakpoints" space-between="3%" class="cursor-pointer container  ">

            <swiper-slide v-for="(item, index) in 5" :key="index">
              <!-- <Products /> -->
            </swiper-slide>


          </swiper>
        </div>

        <div class="bestSeller_products flex items-center justify-center 
       absolute w-full top-[7.6rem]  " :class="selectedButton === 'best-seller' ? 'appearList' : 'disappearList'">
          <swiper :modules="modules" :breakpoints="breakpoints" space-between="3%" class=" cursor-pointer container  ">

            <swiper-slide v-for="(item, index) in 4" :key="index">
              <!-- <Products /> -->
            </swiper-slide>



          </swiper>
        </div>


      </div>









    </div>

  </section>

</template>

<script setup>
import { ref } from 'vue';
import { useFeatureProducts } from '../../../stores/stores'
const myFeaturedProducts = useFeatureProducts()
const mymyFeaturedProducts = myFeaturedProducts.getAsyncProducts();



// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import Products from './products.vue';
const AllType_products = ref([]);
const pictureAddresses = ref([]);

// const fetchingData = async function () {
//   const response = await fetch('../../../../db/pics.json');
//   const data = await response.json();

//   AllType_products.value = data;
//   // console.log(AllType_products.value);
//   Object.entries(AllType_products.value).forEach(([key, element]) => {
//     element.forEach(item => {
//       if (item.type === 'back_product') {
//         // console.log(item.pic);
//       }
//     });
//   });



//   const FeatureProducts = useFeatureProducts()


//   await FeatureProducts.getItems()

//   console.log(FeatureProducts.feature_products_items);

// }

// fetchingData()




const selectedButton = ref('new-arrivals');


const toggleHeart = ref('ion:heart-outline')
const toggleMyHeart = () => {

  toggleHeart.value = toggleHeart.value === 'ion:heart-outline' ? 'ion:heart' : 'ion:heart-outline'

}

const breakpoints = {
  276: {
    slidesPerView: 2,

  },
  1023: {
    slidesPerView: 3,
  },

  1244: {
    slidesPerView: 4,
  }
};

</script>

<style scoped>
.unSelected-product,
.seletcedProduct {
  position: relative;
  overflow: hidden;
}

.seletcedProduct {
  color: black
}

.unSelected-product::after,
.seletcedProduct::after {
  content: '';
  height: 2px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  bottom: 0;
  left: 0%;
  transition: all .5s .2s ease-out, transform 1s .2s ease-out;

}

.unSelected-product::after {
  width: 0;
}

.seletcedProduct::after {
  width: 100%;
}

.unSelected-product:hover::after {
  width: 100%;
}

.down {
  visibility: hidden;
  opacity: 0;
}


.new_arrivals_products,
.featured_products {
  z-index: 1;
  /* add z-index */
}

.appearList {
  z-index: 22;
  /* increase z-index */
  position: absolute;
}

.product-frame {
  position: relative;

}

.product-frame:hover {
  /* box-shadow: 0 0 10px #ff161672; */

}

.product-frame::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: -10px;
  top: -1px;
  box-shadow: 0 0 10px #00000072;
  pointer-events: none;
  opacity: 0;
  transition: all .3s ease-in-out
}

.product-frame::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: -10px;
  top: 1px;
  box-shadow: 0 0 10px 2px #0000005d;
  opacity: 0;
  transition: all .3s ease-in-out
}

.add-to-wishlist {
  transition: all 0.5s ease-out !important;
}

.info-product {
  transition: all 0.4s ease-out !important;
}


.product_slider {
  position: relative;
}

.product_slider:hover {
  box-shadow: 1px -1px 8px 1px #000;
  transition: all .4s ease-out;
}

@media screen and (max-width:1023px) {

  .search,
  .wishlist {
    filter: drop-shadow(4px 5px 4px #000);
  }
}
</style>