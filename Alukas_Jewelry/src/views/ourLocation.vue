<template>
    <section class="location px-2  border-t-2 flex flex-col items-center gap-3">
        <h1 class="text-3xl lg:text-4xl  mt-10">Our Local Store</h1>
        <h2 class="text-footer-gray text-xl text-center lg:text-2xl">Click on your nears store location below to set the
            road on
            Google Map.
        </h2>
        <div class="googleMap w-full py-[3rem] ">
            <iframe :src="mapLocation" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-[25rem] md:h-[34rem] "></iframe>
        </div>

        <div class="storeAddress  w-full mt-2 mb-10 relative">
            <swiper :modules="modules" :breakpoints="breakpoints" :space-between="30" @swiper="onSwiper"
                @slideChange="onSlideChange" class=" journalSwiper " navigation>

                <!-- Slider Number 1 -->
                <swiper-slide class="releative" v-for="(item, index) in allStores" :key="index">
                    <div
                        class="ourStore  border-2 border-transparent md:hover:border-black duration-[400ms] px-4 py-4 flex items-start justify-center gap-5 flex-col">
                        <div class="storeAddress cursor-pointer" @click="updateMap(index)">
                            <h3 class="w-full text-xl uppercase cursor-pointer">{{ item.id >=
                                9 ?
                                '' : '0'
                                }}{{
                                    item.id }}. {{ item.city }} <img :src="item.flag" alt="" class="inline-block w-10 h-10">
                            </h3>

                            <p class="localAddress text-lg md:w-2/3 ">{{ item.fullAddress }}</p>
                        </div>

                        <a :href="item.telephoneLink" class="telephone text-lg text-black font-semibold">Telephone:
                            <span class=" font-normal text-[#333333]">{{ item.telephone
                                }}</span></a>
                        <a :href="'mailto:' + item.email" class="email text-lg font-semibold">Email: <span
                                class="text-[#333333] font-normal">{{
                                    item.email
                                }}</span></a>
                    </div>
                </swiper-slide>

            </swiper>
        </div>


    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

import { ref } from "vue";
import usFlag from '@/assets/flags/us.png';
import nl from '@/assets/flags/nl.png';
import gbFlag from '@/assets/flags/gb.png';


const breakpoints = {
    200: {
        slidesPerView: 1,
    },
    598: {
        slidesPerView: 2,
    },
    1044: {
        slidesPerView: 3,
    },
    1124: {
        slidesPerView: 4
    }
};


const mapLocation = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.17400641192!2d-76.85010612673292!3d38.893906382818024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2z2YjYp9i024zZhtqv2KrZhtiMINmF2YbYt9mC2Ycg2qnZhNmF2KjbjNin2Iwg2KfbjNin2YTYp9iqINmF2KrYrdiv2Ycg2KLZhdix24zaqdin!5e0!3m2!1sfa!2suk!4v1726470319223!5m2!1sfa!2suk')
const allStores = ref({
    "store1": {
        "id": 1,
        "telephoneLink": "tel:02109999999",
        "flag": usFlag,
        "city": "New York",
        "fullAddress": "7021 Washington SQ. South New York, NY 10012",
        "telephone": "703.172.3412",
        "email": "NewYorkAlukas_Jewelry@gmail.com",
        "storeMapLocation": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.17400641192!2d-76.85010612673292!3d38.893906382818024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2z2YjYp9i024zZhtqv2KrZhtiMINmF2YbYt9mC2Ycg2qnZhNmF2KjbjNin2Iwg2KfbjNin2YTYp9iqINmF2KrYrdiv2Ycg2KLZhdix24zaqdin!5e0!3m2!1sfa!2suk!4v1726470319223!5m2!1sfa!2suk"
    },
    "store2": {
        "id": 2,
        "telephoneLink": "tel:02109999999",
        "flag": nl,
        "city": "AMSTERDAM",
        "fullAddress": "1081 Vansla Spartan, Salta Town, Amsterdam 10012",
        "telephone": "703.172.3412",
        "email": "amesterdamAlukas@gmail.com",
        "storeMapLocation": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34728.86524981601!2d4.935546265689336!3d52.36381297320405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ebc84d0c33%3A0xa0391c1acb0118a6!2sVilla%20del%20Arte!5e0!3m2!1sfa!2suk!4v1726474079423!5m2!1sfa!2suk"

    },
    "store3": {
        "id": 3,
        "telephoneLink": "tel:02109999999",
        "flag": usFlag,
        "city": "Austin",
        "fullAddress": "2972 Collins St. Victoria, Austin 8007",
        "telephone": "+44 905.221.3899",
        "email": "AustinAlukas@gmail.com",
        "storeMapLocation": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12607.176872009215!2d144.97510593587566!3d-37.81828876386398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2zQ29sbGlucyBTdCwgTWVsYm91cm5lIFZJQywg2KfYs9iq2LHYp9mE24zYpw!5e0!3m2!1sfa!2suk!4v1726473977411!5m2!1sfa!2suk"
    },
    "store4": {
        "id": 4,
        "telephoneLink": "tel:02109999999",
        "flag": gbFlag,
        "city": "London",
        "fullAddress": "44 York Street - St. Victoria ,Twickenham",
        "telephone": "+20 224.113.4422",
        "email": "EnglandAlukas@gmail.com",
        "storeMapLocation": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79559.0559953215!2d-0.14411093853902487!3d51.45410789823466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b88237c5027%3A0xa9a7de1ab1d56e58!2z2LHbjNqG2YXZiNmG2K8sIFJpY2htb25k!5e0!3m2!1sfa!2suk!4v1726486173366!5m2!1sfa!2suk"
    },
})


const updateMap = (sotreName) => {
    mapLocation.value = allStores.value[sotreName].storeMapLocation
}
</script>

<style scoped>
@media screen and (min-width:765px) {
    .storeAddress::after {
        content: '';
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: -1rem;
        left: 0;
        background-color: gray;
    }
}
</style>