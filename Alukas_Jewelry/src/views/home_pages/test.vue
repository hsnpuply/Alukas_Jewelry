<template>
  <div class="bg-orange-500 w-full h-[24vh] p-5 flex justify-center" @click="parent()">
            <p class="text-2xl mx-8" > pedar</p>

    <div class="bg-blue-500  w-1/2 h-full flex items-center justify-center p-4" @click.stop="pesar()">
            <p class="text-2xl mx-8"> pesar</p>
        
        <div class="bg-green-500 w-1/2 h-full flex justify-center items-center" @click.stop="nave()">
            <p class="text-2xl mx-8"> Naveh</p>
        </div>
    </div>
    <!-- -->
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const parent = () => {
    alert('pedar')
}
const pesar = () => {
    alert('pesar')
}
const nave = () => {
    alert('nave')
}
</script>
