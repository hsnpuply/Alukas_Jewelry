<template >
  <section class="w-full bg-gray-500 py-4 ">
    <div class="grid_show-case container">
      <div class="item1 bg-red-700  text-white text-2xl">
        <img src="../../../assets//2_84c973d9-47c0-484c-9962-7b6e95370227.webp" class="object-fit w-full h-full" alt="">
       </div>
      <div class="item2 bg-emerald-500 outline outline-black border-black p-8 text-white text-2xl">HASAN 2 </div>
      <div class="item3 bg-green-800 p-8 text-white text-2xl">HASAN 3 </div>
      <div class="item4 bg-lime-200 p-8 text-black text-2xl">HASAN 4 </div>
      <div class="item5 bg-violet-800 p-8 text-white text-2xl">HASAN 5 </div>
      <div class="item6 bg-orange-500 p-8 text-white text-2xl">.
                <img src="../../../assets//2_84c973d9-47c0-484c-9962-7b6e95370227.webp" class="object-fit w-full h-full max-h-[80rem]" alt="">
         </div>


    </div>
    
  </section>
</template>
<style scoped>
.grid_show-case{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(6,1fr);
}
.item1{
  grid-area: 1 / 1 / 5 / 3;
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
  grid-area:5 / 3 / 7 / 6;
  /* ROW START / COL START / row End / Col end */
}

</style>
<script setup>

</script>
