<template>
  <footer>
    <div class="footer-info container flex flex-col gap-12 ">
        <div class="footers-menu flex items-start justify-between flex-wrap   mt-14 ">
      <!-- Shop Highlights -->
       <div class="shop-highlights">
          <h3 class="text-[22px]">Shop Highlights</h3>
          <ul class="flex items-start flex-col gap-3 pt-3 text-base ">
            <li>Women</li>
            <li>Accessories</li>
            <li>Bags</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Clothings</li>
          </ul>
       </div>

        <!-- Quick Links -->
       <div class="quick-links">
          <h3 class="text-[22px]">Quick Links</h3>
          <ul class="flex items-start flex-col gap-3 pt-3 text-base ">
            <li>About Us</li>
            <li>Core Values</li>
            <li>Careers</li>
            <li>Press Release</li>
            <li>Sitemap</li>
          </ul>
       </div>

        <!-- Customer Services -->
       <div class="customer-services">
          <h3 class="text-[22px]">Customer Services</h3>
          <ul class="flex items-start flex-col gap-3 pt-3 text-base ">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Product Recalls</li>
            <li>Accessibility</li>
            <li>Store Pickup</li>
          </ul>
       </div>

       <div class="news-letter flex items-start justify-start  flex-col">
        <h3 class="text-[22px]">Newsletter</h3>
        <p class="py-7 text-[#555555]">Sign up for our mailing list to get latest Updates and offers.</p>
        <div class="newsletter-form">
          <form action="" class="flex items-center gap-3">
            <input type="text" class="border-2 border-black px-4 py-2 w-80 h-14" placeholder="Enter your email...">
            <button class="uppercase px-8 py-4 bg-black text-white">Subcribe</button>
          </form>
        </div>
       </div>

    </div>

      
    <div class="footer-others flex  items-start justify-between">
      <div class="payments py-1">
          <img src="../assets/footer/payments.webp" alt="">
      </div>
      <div class="links_n_copyright flex flex-col items-end gap-8 justify-start">

        <ul class="flex items-center gap-8 pt-3 text-lg other_links leading-[0] ">
          <li>Shopping App</li>
          <li>Be an Affiliate</li>
          <li>Advertise Your Product</li>
          <li>Media Enquires</li>
          <li>Other Services</li>
        </ul>

        <div class="copyright text-right">
        <p>Copyright © Alukas all rights reserved. Powered by Blueskytechco. <br>
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


</script>

<style scoped>
ul > li {
  color:#555555;
  cursor: pointer;
  transition: all .28s ease-in-out;
}
 ul > li:hover {
  color:#222222;
}

.footers-menu ul > li:hover {
  transform: translateX(10px);
  color:#222222
}



</style>
