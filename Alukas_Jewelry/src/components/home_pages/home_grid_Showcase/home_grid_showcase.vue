<template>
  <section class="  py-4 2xl:px-0">

    <!-- Grid Show Case Section [ Showing Jewelry in Grid ] -->
    <div class="grid_show-case xl:container grid gap-6 
      
        px-0   text-center">


      <!-- item1  -->
      <div class="item1  items bg-black/50 ">
        <div class="group cursor-pointer ">
          <img :src="Pic1" alt="" class="md:gridShowCase_img
           w-full lg:h-[42.5rem] lg:object-cover  ">
          <div class="w-full pb-12 pic-info absolute -bottom-8 sm:-bottom-0 lg:bottom-0 left-[50%]
             -translate-x-1/2  text-black flex flex-col justify-between items-center gap-4
             ">
            <h4 class="gridShowCase-title md:text-lg">Fashion SS 2024</h4>
            <h1 class="text-4xl">New Earring Arrival</h1>
            <a href="#" class=" shop_now gridShowCase-button">
              Shop Now
            </a>
          </div>
        </div>
      </div>


      <!-- item 2 -->
      <div class="item2  items">
        <div class="group cursor-pointer   w-full h-full    bg-blue-600">
          <img :src="Pic2" alt="" class="md:gridShowCase_img md:h-[39.5rem] w-full lg:h-full  object-cover ">
          <div class="w-full pb-12 pic-info absolute top-[15%] left-[57%] sm:top-[20%] lg:left-[57%] -translate-x-1/2
            text-black flex-col-jbtw-istart gap-5">
            <h1 class="text-2xl text-left">Diamond Boxset <br> Bracelets</h1>
            <a href="#" class=" shop_now gridShowCase-button">Shop Now</a>
          </div>
        </div>

        <!-- item 3 -->
      </div>
      <div class="item3   items  bg-green-500 ">
        <div class="group cursor-pointer ">
          <img :src="Pic3" alt=""
            class="md:gridShowCase_img w-full sm:h-[24rem] sm:object-right lg:h-[22.5rem] md:h-[21rem] md:object-right-top object-cover">
          <div class="w-full pb-12 pic-info absolute top-[12%] left-[57%]  md:left-[60%] -translate-x-1/2
            text-black flex-col-jbtw-istart gap-5">
            <h1 class="text-2xl sm:text-3xl md:text-2xl text-left">Trendy Pendants <br> Collection</h1>
            <a href="#" class=" shop_now gridShowCase-button">Shop Now</a>
          </div>
        </div>
      </div>

      <!-- item 4 -->
      <div class="item4  items bg-green-500 ">
        <div class="group cursor-pointer">
          <img :src="Pic4" alt=""
            class="md:gridShowCase_img w-full sm:h-[24rem] sm:object-right lg:h-[22.5rem] md:h-[19.4rem] md:object-bottom object-cover">
          <div class=" pb-12 pic-info absolute top-[12%] left-[57%]  md:left-[60%] w-full -translate-x-1/2
            text-black flex-col-jbtw-istart gap-5">
            <h1 class="text-2xl sm:text-3xl md:text-2xl text-left">Engagment Rings!</h1>
            <a href="#" class=" shop_now gridShowCase-button">Shop Now</a>
          </div>
        </div>
      </div>

      <!-- item 5 -->
      <div class="item5   items bg-red-700">
        <div class="group cursor-pointer">
          <img :src="Pic5" alt="" class="md:gridShowCase_img w-full lg:h-[23.7rem] md:h-[21rem]   ">
          <div class="w-full pb-12 pic-info absolute left-[57%] -bottom-2 sm:bottom-[15%] 
            lg:left-[57%] lg:bottom-[5rem] -translate-x-1/2 
      text-black flex-col-jbtw-istart gap-4">
            <h4 class="gridShowCase-title">New Collection</h4>
            <h1 class="text-xl sm:text-2xl text-start">Modern Necklaces <br>Collection</h1>
            <a href="#" class=" shop_now gridShowCase-button

            ">
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <!-- item 6 -->
      <div class="item6   items bg-red-700">
        <div class="group cursor-pointer">
          <img :src="Pic6" alt=""
            class="md:gridShowCase_img  w-full lg:h-[23.7rem] md:object-cover md:h-[21rem]  object-bottom">
          <div class="w-full pb-12 pic-info absolute -bottom-2 left-[57%]
              sm:bottom-[15%]  md:left-[60%] lg:left-[57%]
               lg:bottom-[5rem] -translate-x-1/2  text-black flex-col-jbtw-istart gap-4">
            <h4 class="gridShowCase-title">Flat Discount</h4>
            <h1 class="text-xl sm:text-2xl text-start">Shop Diamond <br>Ring</h1>
            <a href="#" class=" shop_now gridShowCase-button">
              Shop Now
            </a>
          </div>
        </div>
      </div>


    </div>

  </section>
</template>
<style scoped>
.shop_now::after {
  content: '';
  width: 100%;
  height: 2px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  bottom: 0;
  left: 0%;
  transition: all .5s .2s ease-out, transform 1s .2s ease-out;

}


.shop_now::before {
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



img {
  transform: 1s cubic-bezier(.26, .54, .32, 1) forwards fadeIn;
}


/* 243 - 767 */
@media screen and (min-width:240px) {



  .item1 {
    grid-area: 1 / 1 /1 / 8;
    /* Rstart - Cstart - Rend - Cend */
    /* border: 2px solid rebeccapurple; */
  }

  .item2 {
    grid-area: 2 / 1 / 2 / 8;
    /* Rstart - Cstart - Rend - Cend */
    /* border: 2px solid green; */
  }


  .item3 {
    grid-area: 3 / 1 / 4 /8;
    /* Rstart - Cstart - Rend - Cend */
    /* border: 2px solid violet; */
  }

  .item4 {
    grid-area: 4 / 1 / 5 / 8;
    /* Rstart - Cstart - Rend - Cend */
    /* border: 2px solid red; */
  }

  .item5 {
    grid-area: 5 / 1 / 6 / 8;
    /* Rstart - Cstart - Rend - Cend */
    /* border: 2px solid blue; */
  }

  .item6 {
    grid-area: 6/ 1 / 7 / 8;
    /* Rstart - Cstart - Rend - Cend */
    /* border: 2px dotted brown; */
  }
}

/* 243 - 767 */


/* 768 - 1023 */
@media screen and (min-width:768px) and (max-width:1023px) {

  .grid_show-case {
    grid-template-columns: repeat(7, minmax(20px, .5fr));
    grid-template-rows: repeat(7, minmax(20px, .35fr));

  }

  .item1 {
    grid-area: 1 / 1 / 4 /8;
    /* rSTart - Cstart - Rend - Cend */
  }

  .item2 {
    grid-area: 4 / 1 /6 / 8;
    /* rSTart - Cstart - Rend - Cend */
  }


  .item3 {
    grid-area: 6 / 1 / 7 / 4;
    /* row start - col start - row end - col end */
    z-index: 2222;
    background-color: red;
  }

  .item4 {
    grid-area: 6 / 4 / 7 / 8;
    /* row start - col start - row end - col end */
    background-color: burlywood;
  }

  .item5 {
    grid-area: 7 / 1 / 9 / 4;
    /* row start - col start - row end - col end */
    background-color: rgb(38, 0, 255);
  }

  .item6 {
    grid-area: 7 / 4 / 9 / 8;
    /* row start - col start - row end - col end */
    z-index: 2222;
    background-color: red;
  }

}



/* md:grid-rows-[repeat(4, .414fr)] md:grid-cols-[repeat(4, .5fr)] */
.grid_show-case {
  display: grid;

  gap: 20px;
  padding: 20px;
}

@media screen and (min-width:1024px) {

  .grid_show-case {
    grid-template-columns: repeat(8, minmax(20px, .2fr));
    grid-template-rows: repeat(9, minmax(40px, .30fr));
  }

  .item1 {
    /* grid-area: 1 / 1 / 4 /5; */
    grid-row: 1 / 7;
    grid-column: 1/5;
    /* Rstart - Cstart / Rend / Cend */
  }

  .item2 {
    /* grid-area: 1 / 5 / 2 / 9; */
    grid-row: 1 / 4;
    grid-column: 5/9;
    /* Rstart - Cstart / Rend / Cend */

  }

  .item3 {
    /* grid-area: 2 / 5 / 4 / 9; */
    grid-row: 4 / 7;
    grid-column: 5/7;
    /* Rstart - Cstart / Rend / Cend */

  }

  .item4 {
    /* grid-area: 3 / 4 / 5 / 4; */
    grid-row: 4 / 7;
    grid-column: 7/9;
    /* Rstart - Cstart / Rend / Cend */

  }

  .item5 {
    /* grid-area: 5 / 1 / 7 / 3; */
    grid-row: 7 / 11;
    grid-column: 1/5;
    /* Rstart - Cstart / Rend / Cend */

  }

  .item6 {
    /* grid-area: 5 / 3 / 7 / 5; */
    grid-row: 7 / 11;
    grid-column: 5/9;
    /* Rstart - Cstart / Rend / Cend */

  }

}
</style>
<script setup>
import Pic1 from '@/assets/grid_show-case/show_case_1.webp';
import Pic2 from '@/assets/grid_show-case/show_case_2.webp';
import Pic3 from '@/assets/grid_show-case/show_case_3.webp';
import Pic4 from '@/assets/grid_show-case/show_case_4.webp';
import Pic5 from '@/assets/grid_show-case/show_case_5.webp';
import Pic6 from '@/assets/grid_show-case/show_case_6.webp';




</script>
