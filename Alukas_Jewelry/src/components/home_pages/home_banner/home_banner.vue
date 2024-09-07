<template>
  <section
    class="home_banner-section container  h-[15rem] 2xl:py-0  w-full md:h-[7.7rem] bg-cover bg-right mb-12 mx-2 sm:mx-auto">
    <div class="banner-hook flex flex-col  lg:flex-row items-center justify-center py-6 h-full
       text-[1.625rem] md:text-[1.4rem] lg:text-[1.625rem] text-white    gap-2 md:gap-0 ">
      <span class=" font-semibold md:pr-2">Gold Club </span>
      <p class=" text-center ">
        - plus 5% rewards and free shipping
      </p>
      <div class="banner-button mt-4 md:mt-0 md:mx-4">
        <button class="bg-white px-7 py-2 md:px-4 md:py-1 lg:px-7 lg:py-2 text-xl rounded-sm text-black">Shop
          Now</button>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.home_banner-section {
  background-image: url('../../../assets/banner/banner_call_to_action.jpg');
}

.home_banner-section span {
  text-shadow: 1px 1px 5px rgba(238, 203, 7, 0.947);
}

.home_banner-section p {
  text-shadow: 1px 1px 5px #000;
}
</style>
