<template>
    <section class="location border-t-2 flex flex-col items-center gap-3">
        <h1 class="text-4xl mt-10">Our Local Store</h1>
        <h2 class="text-footer-gray text-2xl">Click on your nears store location below to set the road on Google Map.
        </h2>
        <div class="googleMap w-full py-[3rem] ">
            <iframe :src="mapLocation" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-[25rem] md:h-[34rem] "></iframe>
        </div>

        <div class="storeAddress relative  flex items-center justify-center gap-8">
            <div class="ourStore border-2 border-transparent hover:border-black px-4 py-4 flex items-start justify-center gap-5 flex-col"
                v-for="(item, index) in allStores" :key="index">
                <h3 class="w-full text-xl uppercase cursor-pointer" @click="updateMap(index)">{{ item.id >= 9 ? '' : '0'
                    }}{{
                        item.id }}. {{ item.city }}</h3>

                <p class="localAddress text-lg w-2/3 ">{{ item.fullAddress }}</p>

                <p class="telephone text-lg text-black">Telephone: <span class="text-[#333333]">{{ item.telephone
                        }}</span></p>
                <p class="email text-lg">Email: <span class="text-[#333333]">{{ item.email }}</span></p>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
const mapLocation = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.17400641192!2d-76.85010612673292!3d38.893906382818024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2z2YjYp9i024zZhtqv2KrZhtiMINmF2YbYt9mC2Ycg2qnZhNmF2KjbjNin2Iwg2KfbjNin2YTYp9iqINmF2KrYrdiv2Ycg2KLZhdix24zaqdin!5e0!3m2!1sfa!2suk!4v1726470319223!5m2!1sfa!2suk')
const allStores = ref({
    "store1": {
        "id": 1,
        "city": "New York",
        "fullAddress": "7021 Washington SQ. South New York, NY 10012",
        "telephone": "703.172.3412",
        "email": "NewYorkAlukas_Jewelry@gmail.com",
        "storeMapLocation": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.17400641192!2d-76.85010612673292!3d38.893906382818024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2z2YjYp9i024zZhtqv2KrZhtiMINmF2YbYt9mC2Ycg2qnZhNmF2KjbjNin2Iwg2KfbjNin2YTYp9iqINmF2KrYrdiv2Ycg2KLZhdix24zaqdin!5e0!3m2!1sfa!2suk!4v1726470319223!5m2!1sfa!2suk"
    },
    "store2": {
        "id": 2,
        "city": "Austin",
        "fullAddress": "2972 Collins St. Victoria, Austin 8007",
        "telephone": "+44 905.221.3899",
        "email": "AustinAlukas@gmail.com",
        "storeMapLocation": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12607.176872009215!2d144.97510593587566!3d-37.81828876386398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2zQ29sbGlucyBTdCwgTWVsYm91cm5lIFZJQywg2KfYs9iq2LHYp9mE24zYpw!5e0!3m2!1sfa!2suk!4v1726473977411!5m2!1sfa!2suk"
    },
    "store3": {
        "id": 3,
        "city": "AMSTERDAM",
        "fullAddress": "1081 Vansla Spartan, Salta Town, Amsterdam 10012",
        "telephone": "703.172.3412",
        "email": "amesterdamAlukas@gmail.com",
        "storeMapLocation": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34728.86524981601!2d4.935546265689336!3d52.36381297320405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ebc84d0c33%3A0xa0391c1acb0118a6!2sVilla%20del%20Arte!5e0!3m2!1sfa!2suk!4v1726474079423!5m2!1sfa!2suk"

    },
    "store4": {
        "id": 4,
        "city": "SAN FRANCICO",
        "fullAddress": "4140 Crosscut Rd. Waytown, San Francisco 12134",
        "telephone": "703.172.3412",
        "email": "SanfrancicoAlukas@gmail.com",
        "storeMapLocation": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404955.1500078339!2d-122.12985619964923!3d37.68522015366545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z2LPYp9mGINmB2LHYp9mG2LPbjNiz2qnZiNiMINqp2KfZhNuM2YHYsdmG24zYp9iMINin24zYp9mE2KfYqiDZhdiq2K3Yr9mHINii2YXYsduM2qnYpw!5e0!3m2!1sfa!2suk!4v1726474168391!5m2!1sfa!2suk"
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