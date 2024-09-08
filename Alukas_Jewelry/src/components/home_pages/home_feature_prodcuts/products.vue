<template>
    <div class="bg-transparent hover:bg-white duration-300 group min-w-[215px]   myHasan  px-5 py-4 mx-3 my-4">
        <div class="imgProduct relative h-[317px]  overflow-hidden bg-black/70  w-full  ">
            <img :src="aks1" alt="" class="absolute top-0 left-0 group-hover:opacity-0 duration-500
            min-h-[320px] object-cover
            ">
            <img :src="aks1_back" alt="" class="absolute top-0 left-0 opacity-0   duration-500 group-hover:opacity-100
            min-h-[320px] object-cover
            ">

            <!-- Search And Wishlist -->
            <div class="search  bg-white rounded-full p-2 absolute right-3
                     top-4 lg:translate-x-5 lg:opacity-0 group-hover:opacity-100
                       group-hover:translate-x-0 duration-[400ms]">
                <Icon icon="mdi-light:magnify" class="text-2xl lg:text-3xl  " />
            </div>
            <div class="wishlist  bg-white rounded-full p-2
                     absolute right-3 top-[4.5rem] lg:translate-x-5 lg:opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]"
                @click="toggleMyHeart()">
                <Icon icon="ion:heart-outline" class="text-2xl lg:text-3xl" />
            </div>
            <div class="badges absolute left-5 top-4 flex items-start justify-center flex-col gap-2 uppercase">
                <p class="bg-red-600 py-1 px-2 rounded-sm text-white ">-34%</p>
                <p class="bg-cyan-700 py-1 px-2 rounded-sm text-white ">NEW</p>
                <p class="bg-cyan-700 py-1 px-2 rounded-sm text-white ">HOT</p>
                <!-- <div class="bg-gray-500 py-1 px-2 rounded-sm text-white ">sould out</div> -->

            </div>
        </div>
        <!-- group-hover:-translate-y-20 duration-300 -->
        <div class="productInfo py-2 overflow-hidden duration-300 group-hover:-translate-y-[1.5rem] px-2
          group bg-transparent group-hover:bg-white ">
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit.</p>
            <p>$164.0</p>

            <div class="addToCart  h-0 group-hover:h-20 translate-y-20
             group-hover:translate-y-0 duration-300">
                <button class="bg-black px-8 py-3 text-white text-xl my-4
             ">Add to CarT</button>
            </div>

        </div>


    </div>
</template>

<style scoped>
.myHasan:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0)
}
</style>

<script setup>
import aks1 from '@/assets/featured_products/best_seller/product-5.webp'
import aks1_back from '@/assets/featured_products/best_seller/back_product-5.webp'
</script>