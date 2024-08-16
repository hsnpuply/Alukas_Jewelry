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








            <div class="featured_products flex items-center justify-center
       bg-violet-7002 absolute w-full top-[7.6rem] "  
     :class="selectedButton === 'featured' ? 'appearList' : 'disappearList'"

      >
                    <swiper
    :modules="modules"
    :slides-per-view="4"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    class="cursor-pointer container bg-red-800"
  > 
    <swiper-slide class="releative ">
      <div class="product-frame bg-violet-600 p-2 hover:bg-white  group relative">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/featured/product-1.webp"
         alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-4.webp"
         alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4   bg-violet-200  w-full  mb-8  group-hover:pb-16 absolute
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki11111111111
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet 
          </h3>

          <p class="text-lg">$169.00</p>  
            <div class="add-to-wishlist ">
              <button class="bg-black text-white p-3  
          rounded-sm w-[130px] mt-2 duration-500">Random add to</button>
        </div>    
        </div>

   
      </div>
       
    </swiper-slide>
       <swiper-slide class="releative">
      <div class="product-frame bg-violet-200 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-2.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-2.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki11111111111
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>
     <swiper-slide class="releative">
      <div class="product-frame bg-violet-600 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-3.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/product-3.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700  absolute top-0 left-0 -hue-rotate-60
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>
     <swiper-slide class="releative">
      <div class="product-frame bg-violet-600 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-4.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-4.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] uppercase ">
            Hasan barati Maleki
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>
     <swiper-slide class="releative">
      <div class="product-frame bg-violet-600 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-2.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-2.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>


  </swiper>
      </div>

                  <div class="new_arrivals_products flex items-center justify-center
       bg-violet-7002 absolute w-full top-[7.6rem] "  
     :class="selectedButton === 'new-arrivals' ? 'appearList' : 'disappearList'"

      >
                    <swiper
    :modules="modules"
    :slides-per-view="4"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    class="cursor-pointer container bg-red-800"
  > 
    <swiper-slide class="releative   ">
      <div class="product-frame   p-2 hover:bg-white group   relative">
        <div class="image-frame p-4  relative">
        <img src="../../../assets/featured_products/best_seller/product-1.webp"
         alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-1.webp"
         alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4     w-full    group-hover:pb-16 absolute
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki dasta bil
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>  
            <div class="add-to-wishlist ">
              <button class="bg-black text-white p-3  
          rounded-sm w-[130px] mt-2 duration-500">Random add to</button>
        </div>    
        </div>

   
      </div>
       
    </swiper-slide>
       <swiper-slide class="releative group/hasan">
      <div class="product-frame bg-gray-600 p-3 hover:bg-white    ">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-2.webp" alt="" class="group-hover/hasan:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-2.webp" alt="" class=" opacity-0 group-hover/hasan:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki hoh Q
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover/hasan:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>
     <swiper-slide class="releative">
      <div class="product-frame bg-violet-600 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-3.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/product-3.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700  absolute top-0 left-0 -hue-rotate-60
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>
     <swiper-slide class="releative">
      <div class="product-frame bg-violet-600 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-4.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-4.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] uppercase ">
            Hasan barati Maleki
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>
     <swiper-slide class="releative">
      <div class="product-frame bg-violet-600 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-2.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-2.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>


  </swiper>
      </div>

                  <div class="featured_products flex items-center justify-center
       bg-violet-7002 absolute w-full top-[7.6rem] "  
     :class="selectedButton === 'featured' ? 'appearList' : 'disappearList'"

      >
                    <swiper
    :modules="modules"
    :slides-per-view="4"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    class="cursor-pointer container bg-red-800"
  > 
    <swiper-slide class="releative ">
      <div class="product-frame bg-violet-600 p-2 hover:bg-white  group relative">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-1.webp"
         alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-1.webp"
         alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4   bg-violet-200  w-full  mb-8  group-hover:pb-16 absolute
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki1212q
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>  
            <div class="add-to-wishlist ">
              <button class="bg-black text-white p-3  
          rounded-sm w-[130px] mt-2 duration-500">Random add to</button>
        </div>    
        </div>

   
      </div>
       
    </swiper-slide>
       <swiper-slide class="releative">
      <div class="product-frame bg-violet-600 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-2.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-2.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>
     <swiper-slide class="releative">
      <div class="product-frame bg-violet-600 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-3.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/product-3.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700  absolute top-0 left-0 -hue-rotate-60
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>
     <swiper-slide class="releative">
      <div class="product-frame bg-violet-600 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-4.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-4.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] uppercase ">
            Hasan barati Maleki
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
    </swiper-slide>
     <swiper-slide class="releative">
      <div class="product-frame bg-violet-600 p-3 hover:bg-white overflow-hidden group">
        <div class="image-frame relative">
        <img src="../../../assets/featured_products/best_seller/product-2.webp" alt="" class="group-hover:opacity-0  duration-700">
        <img src="../../../assets/featured_products/best_seller/back_product-2.webp" alt="" class=" opacity-0 group-hover:opacity-100 duration-700 absolute top-0 left-0
        ">
        </div>

        <div class="info-product py-4  bg-white
        flex flex-col gap-1 duration-500  ">
          <h4 class="product-brand text-sm text-[#757575] ">
            Hasan barati Maleki
          </h4>
          <h3 class="text-lg"> 
        Cross Stripes & Stone Bracelet
          </h3>

          <p class="text-lg">$169.00</p>
          <button class="bg-black text-white p-3 
          rounded-sm w-[130px] mt-2 opacity-0 group-hover:opacity-100 duration-500">Random add to</button>
          
        </div>
      </div>
       
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