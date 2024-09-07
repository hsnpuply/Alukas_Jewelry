<template>
  <section class="feature_products_section   overflow-hidden pb-24 pt-16">
    <!-- <div class="group/hasan group w-1/3" >
            <div class="product-frame bg-gray-600 p-3 hover:bg-white    "   >
        <div class="image-frame "  >
        <img src="../../../assets/featured_products/best_seller/product-2.webp" alt="" class="group-hover/hasan:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-2.webp" alt="" class=" opacity-0 group-hover/hasan:opacity-100 duration-700 absolute top-0 left-0
        "
        >
        </div>

        <div class="info-product py-4  
        flex flex-col gap-1 duration-500  " 
        >
          <h4 class="product-brand text-sm text-[#757575] " >
            Amo Hasan
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          cursor-pointer" >Random add to</button>
          
        </div>
      </div>
    </div> -->
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
       bg-violet-7002  absolute w-full top-[7.6rem]"
          :class="selectedButton === 'new-arrivals' ? 'appearList' : 'disappearList' + ' down'">
          <swiper :modules="modules" :slides-per-view="4" :space-between="50" class="cursor-pointer container ">
            <swiper-slide class="releative group/hasan group group">
              <div class="product_slider group overflow-hidden
      before:group-hover:opacity-100 before:duration-500 after:group-hover:opacity-100 after:duration-500 
      h-[460px]
      ">
                <div class="img_frame relative h-[340px] overflow-hidden ">
                  <img src="../../../assets/featured_products/best_seller/product-1.webp" alt="" class="
              absolute top-0 left-0 opacity-100 group-hover:opacity-0
                duration-500 min-w-[340px] min-h-[340px]">
                  <img src="../../../assets/featured_products/best_seller/back_product-1.webp" alt="" class="
              absolute top-0 left-0 opacity-0  group-hover:opacity-100
                min-w-[340px] min-h-[340px] duration-500">
                  <div
                    class="search bg-gray-400 !bg-white rounded-full p-2 absolute right-3 top-4 translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]">
                    <Icon icon="mdi-light:magnify" class="text-3xl  " />
                  </div>
                  <div
                    class="wishlist bg-gray-400 !bg-white rounded-full p-2 absolute right-3 top-[4.5rem] translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]"
                    @click="toggleMyHeart()">
                    <Icon :icon="toggleHeart" class="text-3xl" />
                  </div>

                </div>
                <div class="info-product pt-4 overflow-hidden max-h-[7rem] group-hover:max-h-[10rem] px-3
          bg-white flex  flex-col justify-start
        group-hover:-translate-y-10 duration-500  ">
                  <h4 class="product-brand text-sm text-[#757575] ">
                    Hasan barati Maleki dasta bilquid
                  </h4>
                  <h3 class="text-lg">
                    Cross Stripes & Stone Bracelet
                  </h3>

                  <p class="text-lg">$169.00</p>



                  <div class="add-to-wishlist opacity-0 group-hover:opacity-100
                   transition-all duration-500 py-0 translate-y-24
                   group-hover:translate-y-0 group-hover:py-2
                   
                      ">
                    <button class="bg-black text-white p-3  
          rounded-sm    ">
                      Add to my WishList
                    </button>

                  </div>


                </div>

              </div>

            </swiper-slide>


            <swiper-slide class="releative group/hasan group">
              <div class="product_slider group overflow-hidden
            before:group-hover:opacity-100 before:duration-500 after:group-hover:opacity-100 after:duration-500 duration-300 bg-white
      h-[460px]
      ">
                <div class="img_frame relative h-[340px] overflow-hidden ">
                  <img src="../../../assets/featured_products/best_seller/product-1.webp" alt="" class="
              absolute top-0 left-0 opacity-100 group-hover:opacity-0
                duration-500 min-w-[340px] min-h-[340px]">
                  <img src="../../../assets/featured_products/best_seller/back_product-1.webp" alt="" class="
              absolute top-0 left-0 opacity-0  group-hover:opacity-100
                min-w-[340px] min-h-[340px] duration-500">
                  <div
                    class="search bg-gray-400 !bg-white rounded-full p-2 absolute right-3 top-4 translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]">
                    <Icon icon="mdi-light:magnify" class="text-3xl  " />
                  </div>
                  <div
                    class="wishlist bg-gray-400 !bg-white rounded-full p-2 absolute right-3 top-[4.5rem] translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]"
                    @click="toggleMyHeart()">
                    <Icon :icon="toggleHeart" class="text-3xl" />
                  </div>

                </div>
                <div class="info-product pt-4 overflow-hidden max-h-[7rem] group-hover:max-h-[10rem] px-3
          bg-white flex  flex-col justify-start
        group-hover:-translate-y-10 duration-500  ">
                  <h4 class="product-brand text-sm text-[#757575] ">
                    Hasan barati Maleki dasta bilquid
                  </h4>
                  <h3 class="text-lg">
                    Cross Stripes & Stone Bracelet
                  </h3>

                  <p class="text-lg">$169.00</p>



                  <div class="add-to-wishlist opacity-0 group-hover:opacity-100
                   transition-all duration-500 py-0 translate-y-24
                   group-hover:translate-y-0 group-hover:py-2
                   
                      ">
                    <button class="bg-black text-white p-3  
          rounded-sm    ">
                      Add to my WishList
                    </button>

                  </div>


                </div>

              </div>

            </swiper-slide>



            <swiper-slide class="releative group/hasan group">
              <div class="product_slider group overflow-hidden
            before:group-hover:opacity-100 before:duration-500 after:group-hover:opacity-100 after:duration-500 duration-300 bg-white
      h-[460px]
      ">
                <div class="img_frame relative h-[340px] overflow-hidden ">
                  <img src="../../../assets/featured_products/best_seller/product-1.webp" alt="" class="
              absolute top-0 left-0 opacity-100 group-hover:opacity-0
                duration-500 min-w-[340px] min-h-[340px]">
                  <img src="../../../assets/featured_products/best_seller/back_product-1.webp" alt="" class="
              absolute top-0 left-0 opacity-0  group-hover:opacity-100
                min-w-[340px] min-h-[340px] duration-500">
                  <div
                    class="search bg-gray-400 !bg-white rounded-full p-2 absolute right-3 top-4 translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]">
                    <Icon icon="mdi-light:magnify" class="text-3xl  " />
                  </div>
                  <div
                    class="wishlist bg-gray-400 !bg-white rounded-full p-2 absolute right-3 top-[4.5rem] translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]"
                    @click="toggleMyHeart()">
                    <Icon :icon="toggleHeart" class="text-3xl" />
                  </div>

                </div>
                <div class="info-product pt-4 overflow-hidden max-h-[7rem] group-hover:max-h-[10rem] px-3
          bg-white flex  flex-col justify-start
        group-hover:-translate-y-10 duration-500  ">
                  <h4 class="product-brand text-sm text-[#757575] ">
                    Hasan barati Maleki dasta bilquid
                  </h4>
                  <h3 class="text-lg">
                    Cross Stripes & Stone Bracelet
                  </h3>

                  <p class="text-lg">$169.00</p>



                  <div class="add-to-wishlist opacity-0 group-hover:opacity-100
                   transition-all duration-500 py-0 translate-y-24
                   group-hover:translate-y-0 group-hover:py-2
                   
                      ">
                    <button class="bg-black text-white p-3  
          rounded-sm    ">
                      Add to my WishList
                    </button>

                  </div>


                </div>

              </div>

            </swiper-slide>



            <swiper-slide class="releative group/hasan group">
              <div class="product_slider group overflow-hidden
            before:group-hover:opacity-100 before:duration-500 after:group-hover:opacity-100 after:duration-500 duration-300 bg-white
      h-[460px]
      ">
                <div class="img_frame relative h-[340px] overflow-hidden ">
                  <img src="../../../assets/featured_products/best_seller/product-1.webp" alt="" class="
              absolute top-0 left-0 opacity-100 group-hover:opacity-0
                duration-500 min-w-[340px] min-h-[340px]">
                  <img src="../../../assets/featured_products/best_seller/back_product-1.webp" alt="" class="
              absolute top-0 left-0 opacity-0  group-hover:opacity-100
                min-w-[340px] min-h-[340px] duration-500">
                  <div
                    class="search bg-gray-400 !bg-white rounded-full p-2 absolute right-3 top-4 translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]">
                    <Icon icon="mdi-light:magnify" class="text-3xl  " />
                  </div>
                  <div
                    class="wishlist bg-gray-400 !bg-white rounded-full p-2 absolute right-3 top-[4.5rem] translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]"
                    @click="toggleMyHeart()">
                    <Icon :icon="toggleHeart" class="text-3xl" />
                  </div>

                </div>
                <div class="info-product pt-4 overflow-hidden max-h-[7rem] group-hover:max-h-[10rem] px-3
          bg-white flex  flex-col justify-start
        group-hover:-translate-y-10 duration-500  ">
                  <h4 class="product-brand text-sm text-[#757575] ">
                    Hasan barati Maleki dasta bilquid
                  </h4>
                  <h3 class="text-lg">
                    Cross Stripes & Stone Bracelet
                  </h3>

                  <p class="text-lg">$169.00</p>



                  <div class="add-to-wishlist opacity-0 group-hover:opacity-100
                   transition-all duration-500 py-0 translate-y-24
                   group-hover:translate-y-0 group-hover:py-2
                   
                      ">
                    <button class="bg-black text-white p-3  
          rounded-sm    ">
                      Add to my WishList
                    </button>

                  </div>


                </div>

              </div>

            </swiper-slide>



          </swiper>
        </div>

        <div class="new_arrivals_products flex items-center justify-center
       absolute w-full top-[7.6rem]  " :class="selectedButton === 'featured' ? 'appearList' : 'disappearList'">
          <swiper :modules="modules" :slides-per-view="4" :space-between="50" class="cursor-pointer container  ">

            <swiper-slide class="releative group/hasan group">
              <div class="product_slider group overflow-hidden
            before:group-hover:opacity-100 before:duration-500 after:group-hover:opacity-100 after:duration-500 duration-300 bg-white
      h-[460px]
      ">
                <div class="img_frame relative h-[340px] overflow-hidden ">
                  <img src="../../../assets/featured_products/best_seller/product-1.webp" alt="" class="
              absolute top-0 left-0 opacity-100 group-hover:opacity-0
                duration-500 min-w-[340px] min-h-[340px]">
                  <img src="../../../assets/featured_products/best_seller/back_product-1.webp" alt="" class="
              absolute top-0 left-0 opacity-0  group-hover:opacity-100
                min-w-[340px] min-h-[340px] duration-500">
                  <div
                    class="search bg-gray-400 !bg-white rounded-full p-2 absolute right-3 top-4 translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]">
                    <Icon icon="mdi-light:magnify" class="text-3xl  " />
                  </div>
                  <div
                    class="wishlist bg-gray-400 !bg-white rounded-full p-2 absolute right-3 top-[4.5rem] translate-x-5 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]"
                    @click="toggleMyHeart()">
                    <Icon :icon="toggleHeart" class="text-3xl" />
                  </div>

                </div>
                <div class="info-product pt-4 overflow-hidden max-h-[7rem] group-hover:max-h-[10rem] px-3
          bg-white flex  flex-col justify-start
        group-hover:-translate-y-10 duration-500  ">
                  <h4 class="product-brand text-sm text-[#757575] ">
                    Hasan barati Maleki dasta bilquid
                  </h4>
                  <h3 class="text-lg">
                    Cross Stripes & Stone Bracelet
                  </h3>

                  <p class="text-lg">$169.00</p>



                  <div class="add-to-wishlist opacity-0 group-hover:opacity-100
                   transition-all duration-500 py-0 translate-y-24
                   group-hover:translate-y-0 group-hover:py-2
                   
                      ">
                    <button class="bg-black text-white p-3  
          rounded-sm    ">
                      Add to my WishList
                    </button>

                  </div>


                </div>

              </div>

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

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
const AllType_products = ref([]);
const pictureAddresses = ref([]);

const fetchingData = async function () {
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


const toggleHeart = ref('ion:heart-outline')
const toggleMyHeart = () => {

  toggleHeart.value = toggleHeart.value === 'ion:heart-outline' ? 'ion:heart' : 'ion:heart-outline'

}

const myAlert = () => {
  alert('alerted')
}

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
</style>