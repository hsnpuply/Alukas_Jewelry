<template>

    <section class="home_journal-section    container px-2 xl:px-0 mb-8">

        <!-- Journal title -->
        <div class="journal_title text-center pb-8 pt-4">
            <h2 class="text-[40px]  mb-2 text-black text-center">Read Journal</h2>
            <h3 class="text-[#555555] text-[20px]">Latest trends and inspirations in fashion design.</h3>
        </div>


        <!-- Swiper Slider Parent Element -->
        <swiper :modules="modules" :breakpoints="breakpoints" :space-between="30" @swiper="onSwiper"
            @slideChange="onSlideChange" class=" journalSwiper " navigation>

            <!-- Slider Number 1 -->
            <swiper-slide class="releative" v-for="(item, index) in blogs" :key="index">
                <div class="journalItem">
                    <div class="imgBlog cursor-pointer  w-full overflow-hidden relative">
                        <img :src="item.postImg" alt="image" class="w-full h-full
                          hover:scale-110 duration-300 max-h-[22rem] lg:max-h-[44rem]">
                        <span class=" text-white bg-[#222222] px-2 py-1 uppercase absolute top-4 left-4 text-sm">
                            {{ item.tag }}
                        </span>
                    </div>

                    <div class="blog-info text-center py-4 ">
                        <div class="author text-[15.5px] ">
                            <span class="my-axe uppercase">Post by <span class="font-medium">{{ item.authur
                                    }}</span></span>
                            <span class="breaker "> - </span> <span class="date-blog text-[#757575] uppercase">
                                {{ item.postDate }}
                            </span>
                        </div>
                        <div class="blog-title py-2">
                            <h3 class="text-2xl xl:text-3xl font-base font-[500]">{{ item.postTitle }}</h3>
                        </div>
                        <button class=" blog_button
                
            

                relative overflow-hidden text-lg group">Continue Reading</button>
                    </div>
                </div>


            </swiper-slide>

        </swiper>



        <!-- <div class="home_journal-section__content flex items-start justify-start gap-7 ">
            <div class="journal_item-1 flex flex-col justify-center gap-6  group">

                <div class="img-blog cursor-pointer  w-full overflow-hidden relative">
                    <img src="../../../assets/journal/Journal_1.webp" alt="image"
                        class="w-[750px] h-[300px] hover:scale-110 duration-300">
                    <span class=" text-white bg-[#222222] px-2 py-1 uppercase absolute top-4 left-4 text-sm">
                        Accessories
                    </span>
                </div>

                <div class="blog-info text-center">
                    <div class="author text-[15.5px] ">
                        <span class="my-axe uppercase">Post by <span class="font-medium">Alukas Shopify</span></span>
                        <span class="breaker "> - </span> <span class="date-blog text-[#757575] uppercase">
                            Mar 06 2024
                        </span>
                    </div>
                    <div class="blog-title py-2">
                        <h3 class="text-[28px] font-base font-[500]">Selective Styles Help your look</h3>
                    </div>
                    <button class=" blog_button
                
                

                relative overflow-hidden text-lg group">Continue Reading</button>
                </div>
            </div>





            <div class="journal_item-1 flex flex-col justify-center gap-6 group">

                <div class="img-blog cursor-pointer  w-full overflow-hidden relative">
                    <img src="../../../assets/journal/Journal_2.webp" alt="image"
                        class="w-[750px] h-[300px] hover:scale-110 duration-300">
                    <span class=" text-white bg-[#222222] px-2 py-1 uppercase absolute top-4 left-4 text-sm">
                        Accessories
                    </span>
                </div>

                <div class="blog-info text-center">
                    <div class="author text-[15.5px] ">
                        <span class="my-axe uppercase">Post by <span class="font-medium">Alukas Shopify</span></span>
                        <span class="breaker "> - </span> <span class="date-blog text-[#757575]  uppercase">
                            Jul 06 2024
                        </span>
                    </div>
                    <div class="blog-title py-2">
                        <h3 class="text-[28px] font-base font-[500]">
                            How to Style a Quiff
                        </h3>
                    </div>
                    <button class=" blog_button
                
                

                relative overflow-hidden text-lg group">Continue Reading</button>
                </div>
            </div>


            <div class="journal_item-1 flex flex-col justify-center gap-6 group">

                <div class="img-blog  w-full cursor-pointer overflow-hidden relative">
                    <img src="../../../assets/journal/Journal_3.webp" alt="image"
                        class="w-[750px] h-[300px] hover:scale-110 duration-300">
                    <span class=" text-white bg-[#222222] px-2 py-1 uppercase absolute top-4 left-4 text-sm">
                        Accessories
                    </span>
                </div>

                <div class="blog-info text-center  ">
                    <div class="author text-[15.5px] ">
                        <span class="my-axe uppercase">Post by <span class="font-medium">Alukas Shopify</span></span>
                        <span class="breaker "> - </span> <span class="date-blog text-[#757575] uppercase">
                            Jun 06 2024
                        </span>
                    </div>
                    <div class="blog-title py-2">
                        <h3 class="text-[28px] font-base font-[500]">Christmas Gift Guide</h3>
                    </div>
                    <button class="blog_button 


                relative overflow-hidden text-lg">Continue Reading hs</button>
                </div>
            </div>


        </div> -->
    </section>
</template>

<script setup>
import { ref } from 'vue';
import post0 from '@/assets/journal/Journal_1.webp'
import post1 from '@/assets/journal/Journal_2.webp'
import post2 from '@/assets/journal/Journal_3.webp'


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

const modules = [Navigation, Pagination, Scrollbar, A11y, Mousewheel] // Add Mousewheel to the modules array


const breakpoints = {
    576: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1044: {
        slidesPerView: 3,
    }
};

const blogs = ref({
    0: {
        'tag': 'Accessories',
        'authur': 'Alukas Shopify',
        'postDate': 'Mar 06 2024',
        'postTitle': 'Selective Styles Help your look',
        'postImg': post0
    },
    1: {
        'tag': 'Accessories',
        'authur': 'Alukas Shopify',
        'postDate': 'May 09 2024',
        'postTitle': 'How to Style a Quiff',
        'postImg': post1
    },
    2: {
        'tag': 'Accessories',
        'authur': 'Alukas Shopify',
        'postDate': 'Sep 12 2023',
        'postTitle': 'Christmas Gift Guide',
        'postImg': post2
    }
})







</script>

<style scoped>
.blog_button::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    bottom: 0;
    left: 0%;
    transition: all .5s .2s ease-out, transform 1s .2s ease-out;

}

.blog_button::before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    bottom: 0;
    left: 0%;
    transition: all .2s .4s ease-out, transform .6s ease-out;
    transform: translateX(101%);

}
</style>