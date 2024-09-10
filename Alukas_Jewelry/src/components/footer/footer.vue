<template>
  <footer class="px-4 ">
    <div class="footer-info xl:container px-4 lg:px-8   sm:px-0 flex flex-col gap-12 mb-6  lg:mb-5   ">
      <div class="footers-menu flex  flex-col md:flex-row  items-start justify-between 
           gap-6 md:gap-x-64 lg:gap-6 flex-wrap lg:flex-nowrap   mt-14 ">

        <!-- Shop Highlights -->
        <div class="shop-highlights 
           border-b-[1px] md:border-none w-full md:w-[30%] lg:w-full  border-black overflow-hidden">
          <div class="title-link flex items-center justify-between cursor-pointer md:cursor-default "
            @click="openList('shopHighlights', 'shopOpeningList')">
            <h3 class="text-[1.45rem] font-semibold lg:font-medium">Shop Highlights</h3>
            <span class="text-xl   select-none md:!hidden" ref="shopPlusSign">➕️</span>
            <span class="text-xl hidden select-none md:!hidden" ref="shopMinusSign">➖</span>
          </div>
          <ul class="footer-list h-0  md:h-full   duration-500 " ref="shopList">
            <li v-for="(list, index) in ShopHighlights" :key="index">{{ list }}</li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="quick-links   border-b-[1px] 
        md:border-none w-full md:w-[30%] lg:w-full border-black overflow-hidden"
          @click="openList('quickLinks', 'quickOpeningList')">
          <div class="title-link cursor-pointer md:cursor-default flex items-center justify-between ">
            <h3 class=" text-[1.45rem] font-semibold lg:font-medium">Quick Links</h3>
            <span class="text-xl   select-none md:hidden" ref="quickPlusSign">➕️</span>
            <span class="text-xl hidden select-none md:hidden" ref="quickMinusSign">➖</span>
          </div>
          <ul class="footer-list h-0 md:h-full    duration-500 " ref="quickList">
            <li v-for="(list, index) in QuickLinks" :key="index">{{ list }}</li>
          </ul>
        </div>

        <!-- Customer Services -->
        <div class="customer-services  
         border-b-[1px] md:border-none w-full md:w-[30%] lg:w-full border-black overflow-hidden">
          <div class="title-link cursor-pointer md:cursor-default flex items-center justify-between"
            @click="openList('customerServices', 'customerOpeningList')">
            <h3 class="text-[1.45rem] font-semibold lg:font-medium">Customer Services</h3>
            <span class="text-xl   select-none md:hidden" ref="customerPlusSign">➕️</span>
            <span class="text-xl hidden select-none md:hidden" ref="customerMinusSign">➖</span>
          </div>
          <ul class="footer-list h-0 md:h-full     duration-500 " ref="customerList">
            <li v-for="(list, index) in CustomerServices" :key="index">{{ list }}</li>

          </ul>
        </div>

        <div class="news-letter flex flex-col  w-full md:w-[30%] lg:w-full   overflow-hidden
           ">
          <div class="title-link cursor-pointer md:cursor-default flex items-center justify-between   "
            @click="openList('newsLetter', 'newsLetterOpeningList')">
            <h3 class="text-[1.45rem] font-semibold lg:font-medium">News Letter</h3>
            <span class="text-xl   select-none md:hidden" ref="NewsPlusSign">➕️</span>
            <span class="text-xl hidden select-none md:hidden" ref="NewsMinusSign">➖</span>
          </div>
          <div class="news-letter-content w-full  h-0 md:h-full   duration-500  " ref="newsLetterList">
            <p class="py-7 text-footer-gray">Sign up for our mailing list to get latest Updates and offers.</p>
            <div class="newsletter-form  ">
              <form action="" class="flex items-center md:flex-col md:items-start gap-3 w-full xl:flex-row">
                <input type="text" class="border-2 border-black px-4 py-2 w-[75%] md:w-full   lg:w-full h-14"
                  placeholder="Enter your email...">
                <button class="uppercase px-8 py-4 lg:px-6 
                   bg-black/95 hover:bg-black duration-100 text-white ">Subcribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div class="footer-others flex    flex-col
          items-center justify-center  xl:justify-end xl:items-end gap-4 overflow-hidden ">
        <div class="payments py-1">
          <img src="@/assets/footer/payments.webp" alt="">
        </div>
        <div class="links_n_copyright flex flex-col items-end gap-8 justify-start">

          <ul class="flex items-center justify-center flex-wrap  gap-8 pt-3 text-lg other_links leading-[0] ">
            <li v-for="(list, index) in usefulLinks" :key="index">{{ list }}</li>
          </ul>

          <div class="copyright   w-full  ">
            <p class="text-center xl:text-right">Copyright © Alukas all rights reserved. Powered by Blueskytechco. <br>
              & Eddited By <span class="text-black font-semibold">Hasan (Puply) Barati</span>
            </p>
          </div>

        </div>


      </div>
    </div>

  </footer>
</template>

<script setup>
import { ref } from 'vue';




const ShopHighlights = ref([
  'Women', 'Accessories', 'Bags', 'Men', 'Shoes', 'Clothings'
])
const QuickLinks = ref([
  'About Us', 'Core Values', 'Careers', 'Press Release', 'Sitemap'
])

const CustomerServices = ref([
  "Help Center",
  "Returns",
  "Product Recalls",
  "Accessibility",
  "Store Pickup"
])

const usefulLinks = ref([
  "Shopping App",
  "Be an Affiliate",
  "Advertise Your Product",
  "Media Enquires",
  "Other Services",
])
const unSortedList = ref('')


const shopPlusSign = ref(null)
const shopMinusSign = ref(null)
const quickPlusSign = ref(null)
const quickMinusSign = ref(null)
const customerPlusSign = ref(null)
const customerMinusSign = ref(null)
const NewsPlusSign = ref(null)
const NewsMinusSign = ref(null)

const shopList = ref(null)
const quickList = ref(null)
const customerList = ref(null)
const newsLetterList = ref(null)


const openList = (type, customClass) => {
  const signVars = {
    shopHighlights: [shopMinusSign, shopPlusSign],
    quickLinks: [quickMinusSign, quickPlusSign],
    customerServices: [customerMinusSign, customerPlusSign],
    newsLetter: [NewsMinusSign, NewsPlusSign]
  };

  const listVars = {
    shopHighlights: shopList,
    quickLinks: quickList,
    customerServices: customerList,
    newsLetter: newsLetterList
  };



  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  if (isMobile) {
    const [minusSign, plusSign] = signVars[type];
    minusSign.value.classList.toggle('showSign');
    plusSign.value.classList.toggle('hideSign');

    listVars[type].value.classList.toggle(customClass);
  }

}


// const openList = () => {
//   unSortedList.value.classList.toggle('oppeningList')

//   plustSign.value.classList.toggle('hideSign')

//   minusSign.value.classList.toggle('showSign')

// }




</script>

<style scoped>
@media screen and (max-width:767px) {
  .shopOpeningList {
    height: 14.4rem;
  }

  .quickOpeningList {
    height: 12rem;
  }

  .customerOpeningList {
    height: 12rem;
  }

  .newsLetterOpeningList {
    height: 10rem;
  }
}

@media screen and (max-width:767px) {
  .showSign {
    display: block;
  }

  .hideSign {
    display: none;
  }
}

ul>li {
  color: #555555;
  cursor: pointer;
  transition: all .28s ease-in-out;
}

ul>li:hover {
  color: #222222;
}

.footers-menu ul>li:hover {
  transform: translateX(10px);
  color: #222222
}
</style>
