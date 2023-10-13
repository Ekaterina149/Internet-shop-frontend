<template>
    <GCarousel :items="items" item-gap="5" :items-to-show="2">
      <template #item="{ data }">
        

          <div class="slide">
        {{ data }}
      </div>
      
        
      </template>
    </GCarousel>
  </template>
  
  <script setup>
  import 'gitart-vue-dialog/dist/style.css';
  import { ref } from 'vue';
  import { GCarousel } from 'gitart-scroll-carousel';
  import picPumkin from "../assets/pumkins.jpg";
import picBasket from "../assets/basket-5.jpg";
import picBag from "../assets/bag-3.jpg";
import picBed from "../assets/dolls-bed.jpg"
const items= ref[ picPumkin, picBasket, picBag, picBed];
  </script>
  
  <style scoped>
  .slide {
    box-shadow: 0 6px 15px -3px rgb(0 0 0/0.3);
    padding: 25px;
    border-radius: 5px;
  }
  </style>