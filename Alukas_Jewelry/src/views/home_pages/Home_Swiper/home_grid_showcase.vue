<template >
  <section class=" w-full  py-4 ">
    <div class="grid_show-case container   text-center">
      <!-- item1  -->
      <div class="item1   text-white text-2xl overflow-hidden relative ">
        <a href="#" class="group">
          <img :src="Pic1" alt="" class="w-full group-hover:scale-110 duration-300 h-full object-cover ">
        <div class="w-full pb-12 pic-info absolute bottom-0 left-[50%] -translate-x-1/2  text-black flex flex-col justify-between items-center gap-4">
          <h4 class="uppercase font-light text-lg">Fashion SS 2024</h4>
          <h1 class="text-4xl">New Earring Arrival</h1>
          <a href="#" class="uppercase  text-base shop_now relative overflow-hidden

            ">
            Shop Now
          </a>
        </div>
        </a>


        <!-- item 2 -->
       </div>
      <div class="item2    border-black  text-white text-2xl overflow-hidden  relative">
        <a href="#" class="group">
        <img :src="Pic2" alt="" class="w-full group-hover:scale-110  hover:scale-110 duration-300 h-full object-cover ">
          <div class=" pb-12 pic-info absolute top-10 left-32 -translate-x-1/2
            text-black flex flex-col justify-between items-start gap-5">
          <h1 class="text-2xl text-left">Diamond Boxset <br> Bracelets</h1>
          <a href="#" class="uppercase  text-base shop_now relative overflow-hidden ">Shop Now</a>
        </div>
        </a>

      </div>
      <div class="item3   text-white text-2xl overflow-hidden relative">
        <a href="#" class="group">
          <img :src="Pic3" alt="" class="w-full hover:scale-110 duration-300 h-full object-cover">
            <div class=" pb-12 pic-info absolute top-10 left-32 -translate-x-1/2
            text-black flex flex-col justify-between items-start gap-5">
          <h1 class="text-2xl text-left">Trendy Pendants <br> Collection</h1>
          <a href="#" class="uppercase  text-base shop_now relative overflow-hidden ">Shop Now</a>
        </div>
        </a>
      </div>
      <div class="item4   text-black text-2xl overflow-hidden relative">
      <a href="#" class="group">
        <img :src="Pic4" alt="" class="w-full hover:scale-110 duration-300 h-full object-cover">
            <div class=" pb-12 pic-info absolute top-10 left-32 -translate-x-1/2
            text-black flex flex-col justify-between items-start gap-5">
          <h1 class="text-2xl text-left">Engagment Rings!</h1>
          <a href="#" class="uppercase  text-base shop_now relative overflow-hidden ">Shop Now</a>
        </div>
      </a>
      </div>
      <div class="item5   text-white text-2xl overflow-hidden relative">
        <a href="#" class="group">
          <img :src="Pic5" alt="" class="w-full hover:scale-110 duration-300 h-full object-cover">
     <div class=" pb-12 pic-info absolute bottom-[2.78rem] left-[10.5rem] -translate-x-1/2 
      text-black flex flex-col justify-between items-start gap-4">
          <h4 class="uppercase font-light text-base">New Collection</h4>
          <h1 class="text-3xl text-start">Modern Necklaces <br>Collection</h1>
          <a href="#" class="uppercase  text-base shop_now relative overflow-hidden

            ">
            Shop Now
          </a>
        </div>
        </a>
      </div>
      <div class="item6   text-white text-2xl overflow-hidden relative">
        <a href="#" class="group">
          <img :src="Pic6" alt="" class="w-full hover:scale-110 duration-300 h-full object-cover">
     <div class=" pb-12 pic-info absolute bottom-[2.78rem] left-[8.5rem] -translate-x-1/2  text-black flex flex-col justify-between items-start gap-4">
          <h4 class="uppercase font-light text-base">Flat Discount</h4>
          <h1 class="text-3xl text-start">Shop Diamond <br>Ring</h1>
          <a href="#" class="uppercase  text-base shop_now relative overflow-hidden

            ">
            Shop Now
          </a>
        </div>
        </a>
      </div>


    </div>
    
  </section>
</template>
<style scoped>

.shop_now::after{
  content: '';
  width: 100%;
  height: 2px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  bottom: 0;
  left: 0%;
  transition: all .5s .2s ease-out, transform 1s .2s ease-out;

}


.shop_now::before{
  content: '';
  width: 100%;
  height: 2px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  bottom: 0;
  left: 0%;
  transition: all .2s .4s  ease-out, transform .6s  ease-out;
  transform: translateX(101%);

}
 

.grid_show-case{
  display: grid;
  grid-template-columns: repeat(4,.5fr);
  grid-template-rows: repeat(6,.414fr);
  gap: 1.5rem;
}
img{
  transform: 1s cubic-bezier(.26,.54,.32,1) forwards fadeIn;
}

.item1{
  grid-area: 1 / 1 / 5 /  3;
  /* ROW START / COL START / row End / Col end */
}
.item2{
  grid-area: 1 / 3 / 3 / 5;
  /* z-index: 122 */
  /* ROW START / COL START / row End / Col end */
}
.item3{
  grid-area:3 / 3 / 5 / 4;
  z-index: 200;
  /* ROW START / COL START / row End / Col end */
}
.item4{
  grid-area:3 / 4 / 5 / 4;
  /* ROW START / COL START / row End / Col end */
}
.item5{
  grid-area:5 / 1 / 7 / 3;
  /* ROW START / COL START / row End / Col end */
}
.item6{
  grid-area:5 / 3 / 7 / 5;
  /* ROW START / COL START / row End / Col end */
}

/* Backup */
/* 
.shop_now::after{
  content: '';
  width: 100%;
  height: 3px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  bottom: 0;
  left: 0%;
  transition: all .8s .5s ease-out, transform 1s .5s ease-out;

}
.shop_now:hover::after{
  width: 0%;
  transform: translateX(-100%);
  transition: all .7s .2s ease-out, transform 1s .8s ease-out;


}

.shop_now::before{
  content: '';
  width: 100%;
  height: 3px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  bottom: 0;
  left: 0%;
  transition: all .7s .5s  ease-in-out, transform 1s  ease-out;
  transform: translateX(100%);

}
.shop_now:hover::before{
  width: 100%;
  transform: translateX(0%);
  transition: all .7s   ease-in-out, transform 1s .7s ease-out;
} 


*/

</style>
<script setup>
import Pic1 from '../../../assets/grid_show-case/show_case_1.webp';
import Pic2 from '../../../assets/grid_show-case/show_case_2.webp';
import Pic3 from '../../../assets/grid_show-case/show_case_3.webp';
import Pic4 from '../../../assets/grid_show-case/show_case_4.webp';
import Pic5 from '../../../assets/grid_show-case/show_case_5.webp';
import Pic6 from '../../../assets/grid_show-case/show_case_6.webp';

</script>
