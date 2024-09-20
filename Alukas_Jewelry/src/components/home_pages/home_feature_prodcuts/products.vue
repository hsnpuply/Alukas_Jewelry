<template>
    <div v-if="myItems">
        <div
            class="bg-transparent  hover:bg-white duration-300 group min-w-[235px] md:min-w-[270px] myProduct  px-5 py-4 mx-3 my-4">
            <div class="imgProduct relative h-[250px]  overflow-hidden bg-black/70  w-full  ">
                <img :src="myItems.pic" alt="" class="absolute top-0 left-0 group-hover:opacity-0 duration-500
            min-h-[250px] object-cover
            " :class="myItems.soldOut ? 'grayscale-[.8] ' : ''">
                <img :src="myItems.back_pick" alt="" class="absolute top-0 left-0 opacity-0   duration-500 group-hover:opacity-100
            min-h-[250px] object-cover
            " :class="myItems.soldOut ? ' hover:grayscale-0' : ''">

                <!-- Search And Wishlist -->
                <div class=" search bg-white rounded-full p-2 absolute right-3 top-4 lg:translate-x-5 lg:opacity-0
                    group-hover:opacity-100 group-hover:translate-x-0 duration-[400ms]"
                    :class="myItems.soldOut ? 'hidden' : ''">
                    <Icon icon="mdi-light:magnify" class="text-2xl lg:text-3xl  " />
                </div>
                <div class="wishlist  bg-white rounded-full p-2 cursor-pointer
                     absolute right-3 top-[4.5rem] lg:translate-x-5 lg:opacity-0 group-hover:opacity-100  group-hover:translate-x-0 duration-[400ms]"
                    :class="myItems.soldOut ? 'hidden' : ''" @click="myFeaturedProducts.toggleFav(myItems.id)">
                    <Icon :icon="myItems.fav ? 'ion:heart' : 'ion:heart-outline'" class="text-2xl lg:text-3xl" />
                </div>
                <div class="badges absolute left-5 top-4 flex items-start justify-center flex-col gap-2 uppercase">
                    <p class="text-xs bg-red-600 py-1 px-1 rounded-sm text-white "
                        :class="myItems.offPercentage > 0 && !myItems.soldOut ? '' : 'hidden'">
                        --{{
                            myItems.offPercentage }}%</p>

                    <p class="text-xs bg-red-600 py-1 px-2 rounded-sm text-white " :class="myItems.hot ? '' : 'hidden'">
                        {{
                            myItems.hot ? 'HOT' : '' }}</p>
                    <p class="text-xs  bg-cyan-700 py-1 px-2 rounded-sm text-white "
                        :class="myItems.newItem ? '' : 'hidden'">{{ myItems.newItem ? 'NEW' : '' }}</p>

                    <p class="bg-gray-500 py-1 px-2 rounded-sm text-white " :class="!myItems.soldOut ? 'hidden' : ''">
                        {{ myItems.soldOut ? 'Sold out' : '' }}
                    </p>

                    <p class="text-sm  bg-[#f8ba26]  py-1 px-2 rounded-sm  font-semibold uppercase"
                        :class="myItems.subscription && !myItems.soldOut ? '' : 'hidden'"> {{ myItems.subscription ?
                            'subscription ' :
                            '' }}
                    </p>



                </div>
            </div>
            <!-- group-hover:-translate-y-20 duration-300 -->
            <div class="productInfo py-2  overflow-hidden duration-300 -translate-y-[1.5rem] md:translate-y-0 lg:group-hover:-translate-y-[1.5rem] px-2
          group bg-white lg:bg-transparent group-hover:bg-white ">
                <h3 class="uppercase text-[#757575] py-1">{{ myItems.brand }}</h3>
                <p class="py-1 text-lg">{{ myItems.description }}</p>
                <p class=" text-black">{{ myItems.getDiscountCalculation }}</p>
                <p class=""><span class="discounted"
                        :class="myItems.offPercentage > 0 ? 'text-lg text-black' : 'hidden'">
                        ${{ (myItems.price - (myItems.price * myItems.offPercentage / 100)).toFixed(2) }}</span>

                    <span
                        :class="myItems.offPercentage > 0 ? 'line-through text-gray-500 pl-2' : 'text-lg text-black'">${{
                            (myItems.price).toFixed(2) }}</span>
                </p>


                <div class="addToCart h-20  lg:h-0  lg:group-hover:h-20 lg:translate-y-20
             lg:group-hover:translate-y-0 duration-300">
                    <button class="bg-black px-8 py-3 text-white  my-4
             " :class="myItems.soldOut ? 'sm:text-lg md:text-xl' : 'text-xl'">
                        {{ myItems.soldOut ? 'Call me When Available' : 'Add to Cart' }}</button>
                </div>

            </div>


        </div>
    </div>
</template>

<script setup>
defineProps({
    myItems: Object
});
import { useFeatureProducts } from '@/stores/stores';


const myFeaturedProducts = useFeatureProducts()

myFeaturedProducts.getAsyncProducts()
</script>

<style scoped>
@media screen and (min-width:768px) {
    .myProduct:hover {
        box-shadow: 0 0 10px #000000;

    }
}
</style>