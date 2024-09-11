<template>
    <div
        class="bg-transparent hover:bg-white duration-300 group min-w-[235px] md:min-w-[270px] myHasan  px-5 py-4 mx-3 my-4">
        <div class="imgProduct relative h-[250px]  overflow-hidden bg-black/70  w-full  ">
            <img :src="myProducts" alt="" class="absolute top-0 left-0 group-hover:opacity-0 duration-500
            min-h-[250px] object-cover
            ">
            <img :src="ProducBckImage" alt="" class="absolute top-0 left-0 opacity-0   duration-500 group-hover:opacity-100
            min-h-[250px] object-cover
            ">

            <!-- Search And Wishlist -->
            <div class="search  bg-white rounded-full p-2 absolute right-3
                     top-4 lg:translate-x-5 lg:opacity-0 group-hover:opacity-100
                       group-hover:translate-x-0 duration-[400ms]">
                <Icon icon="mdi-light:magnify" class="text-2xl lg:text-3xl  " />
            </div>
            <div class="wishlist  bg-white rounded-full p-2
                     absolute right-3 top-[4.5rem] lg:translate-x-5 lg:opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]"
                @click="toggleFavs">
                <Icon icon="ion:heart-outline" class="text-2xl lg:text-3xl" />
            </div>
            <div class="badges absolute left-5 top-4 flex items-start justify-center flex-col gap-2 uppercase">
                <p class="text-xs bg-red-600 py-1 px-2 rounded-sm text-white ">{{
                    myProducts }} !</p>
                <p class="text-xs  bg-cyan-700 py-1 px-2 rounded-sm text-white ">{{ NEW }}</p>
                <p class="text-xs  bg-cyan-700 py-1 px-2 rounded-sm text-white ">{{ HOT }}</p>
                <div class="bg-gray-500 py-1 px-2 rounded-sm text-white ">{{ SouldOut }}</div>

            </div>
        </div>
        <!-- group-hover:-translate-y-20 duration-300 -->
        <div class="productInfo py-2 overflow-hidden duration-300 -translate-y-[1.5rem] md:translate-y-0 lg:group-hover:-translate-y-[1.5rem] px-2
          group bg-white lg:bg-transparent group-hover:bg-white ">
            <h3>{{ title }}</h3>
            <p>{{ DESCRIPTION }}</p>
            <p>$ {{ Price }}</p>
            <p>hello + {{ myProducts.featured_product }}</p>

            <div class="addToCart h-20  lg:h-0  lg:group-hover:h-20 lg:translate-y-20
             lg:group-hover:translate-y-0 duration-300">
                <button class="bg-black px-8 py-3 text-white text-xl my-4
             ">Add to CarT</button>
            </div>

        </div>


    </div>
</template>

<style scoped>
@media screen and (min-width:766px) {
    .myHasan:hover {
        box-shadow: 0px 0px 10px rgb(0, 0, 0)
    }
}
</style>

<script setup>
import aks from '../../../assets/featured_products/best_seller/product-1.webp'
import { useFeatureProducts } from '@/stores/stores';
import { defineProps } from 'vue'

const featureProducts = useFeatureProducts()

defineProps({
    myProducts: Object,

    // ProductImg: {
    //     require: true
    // },
    // ProducBckImage: {
    //     require: true
    // },
    // OffPercent: {},
    // Hot: {},
    // NEW: {},
    // Subscription: {},
    // SoldOut: {},
    // title: {},
    // DESCRIPTION: {},
    // Price: {},
    // toggleFavs: {
    //     require: true
    // },

})

</script>