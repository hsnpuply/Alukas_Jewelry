<template>
    <section class="notFoundSection border-t-2 min-h-[70vh]
         w-full flex items-center justify-center flex-col gap-6 lg:gap-8 bg-green-300/0">
        <div class="errorImage ">
            <img :src="errorImage" alt="Error 404! Not Found" class=" w-[16rem] lg:w-[26rem]">
        </div>
        <div class="errorText text-3xl lg:text-4xl text-center leading-[1.4]">
            <h2>This page has been probably moved somewhere...
            </h2>
            <p class="text-title-gray text-2xl lg:text-3xl  mt-4"> or maybe it's just playing hide and
                seek!</p>
        </div>

        <div class="homePageButton group mt-10 ">
            <RouterLink class="lg:text-3xl text-2xl bg-Metalic rounded-lg text-white px-6 py-2" to="/"><span
                    class=" text-3xl lg:text-4xl pr-3 group-hover:mr-4 duration-300">←</span>Back To
                Homepage</RouterLink>


        </div>

    </section>
</template>

<script setup>
import errorImage from '@/assets/404-page.webp'

</script>