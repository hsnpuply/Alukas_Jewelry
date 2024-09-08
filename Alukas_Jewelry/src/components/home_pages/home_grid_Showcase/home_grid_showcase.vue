<template>
  <section class="  py-4 px-2 2xl:px-0 h-fit  ">

    <!-- Grid Show Case Section [ Showing Jewelry in Grid ] -->
    <div class="grid_show-case
       container px-0   text-center w-full">
      <div class="item1 item text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio

        recusandae quas corporis adipisci culpa expedita aspernatur earum sapiente suscipit aliquid!</div>
      <div class="item2 item">Lorem ipsum dolor sit amet.</div>
      <div class="item3 item">Lorem ipsum dolor sit amet.</div>
      <div class="item4 item">Lorem ipsum dolor sit amet.</div>
      <div class="item5 item">Lorem ipsum dolor sit amet.</div>
      <div class="item6 item">Lorem ipsum dolor sit amet.</div>




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


@media screen and (min-width:1024px) {
  .grid_show-case {
    display: grid;
    grid-template-columns: repeat(10, minmax(100px, 1fr));
    grid-template-rows: repeat(8, 1fr);
    gap: 1rem;
    background-color: red;
  }
}

@media screen and (max-width:1023px) {
  .grid_show-case {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 1rem;
    background-color: rgb(0, 26, 255);
  }
}


.item {
  background-color: rgb(79, 79, 207);
  border: 2px solid black;
}

.item1 {
  background-color: rgb(186, 58, 58);
  border: 2px solid rgb(55, 55, 220);
  /* Ghaleb 8 XY */
  grid-area: 1 / 1 / 5 / 12;
  /* rowStart / ColStart / rowEnd / ColEnd */
}

.item2 {
  background-color: rgb(134, 21, 57);
  border: 2px solid rgb(55, 55, 220);
  /* Ghaleb 8 XY */
  grid-area: 3 / 1 / 4 / 12;
  /* rowStart / ColStart / rowEnd / ColEnd */
}

.item3 {
  background-color: rgb(134, 64, 21);
  border: 2px solid rgb(220, 55, 212);
  /* Ghaleb 8 XY */
  grid-area: 4 / 1 / 7 / 5;
  /* rowStart / ColStart / rowEnd / ColEnd */
}

.item4 {
  background-color: rgb(167, 150, 140);
  border: 2px solid rgb(220, 127, 55);
  /* Ghaleb 8 XY */
  grid-area: 4 / 5 /7 / 9;
  /* rowStart / ColStart / rowEnd / ColEnd */
}


.item5 {
  background-color: rgb(29, 28, 27);
  border: 2px solid rgb(55, 55, 220);
  color: white;
  /* Ghaleb 8 XY */
  grid-area: 7 / 1 / 9 / 5;
  /* rowStart / ColStart / rowEnd / ColEnd */
}

.item6 {
  background-color: rgb(29, 28, 27);
  border: 2px solid rgb(55, 55, 220);
  color: white;
  /* Ghaleb 8 XY */
  grid-area: 7 / 5 / 9 / 9;
  /* rowStart / ColStart / rowEnd / ColEnd */
}

img {
  transform: 1s cubic-bezier(.26, .54, .32, 1) forwards fadeIn;
}


/* 243 - 767 */
/* @media screen and (min-width:240px) {



  .item1 {
    grid-area: 1 / 1 /1 / 8;

  }

  .item2 {
    grid-area: 2 / 1 / 2 / 8;

  }


  .item3 {
    grid-area: 3 / 1 / 4 /8;

  }

  .item4 {
    grid-area: 4 / 1 / 5 / 8;

  }

  .item5 {
    grid-area: 5 / 1 / 6 / 8;

  }

  .item6 {
    grid-area: 6/ 1 / 7 / 8;

  }
} */

/* 243 - 767 */


/* 768 - 1023 */
/* @media screen and (min-width:768px) and (max-width:1023px) {
  .item1 {
    grid-area: 1 / 1 / 3 / 8;
  }

  .item2 {
    grid-area: 3 / 1 / 4 / 8;
    border: 3px double pink;
    z-index: 100020;
  }


  .item3 {
    grid-area: 4 / 1 / 4 / 3;
    z-index: 2222;
  }

  .item4 {
    grid-area: 4 / 3 / 4 / 8;
    z-index: 2222;
  }

  .item5 {
    grid-area: 5 / 1 / 5 / 3;
    z-index: 2222;
    background-color: red;
  }

  .item6 {
    grid-area: 5 / 3 / 5 / 8;
    z-index: 2222;
    background-color: red;
  }

} */

@media screen and (min-width:1024px) and (max-width:2024px) {

  /* section{
    background-color: violet;
  } */
  /* .item1 {
    grid-area: 1 / 1 / 5 / 3;
  }

  .item2 {
    grid-area: 1 / 3 / 3 / 5;
  }

  .item3 {
    grid-area: 3 / 3 / 5 / 4;
    z-index: 200;
  }

  .item4 {
    grid-area: 3 / 4 / 5 / 4;
  }

  .item5 {
    grid-area: 5 / 1 / 7 / 3;
  }

  .item6 {
    grid-area: 5 / 3 / 7 / 5;
  } */

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
