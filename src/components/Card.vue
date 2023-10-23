<template>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
    <Carousel
      :autoplay="false"
      :repeat="false"
      :interval="5000"
      :images="images"
      class="relative overflow-hidden bg-transparent grid grid-cols-[320px] grid-rows-[250px]  auto-cols-auto justify-items-center items-center  rounded-md sm:rounded-xl "
    >
     
      <template v-slot:slide="{currentIndex, direction }">
        <Slide :direction="direction">
          <template v-slot:image>
            <li
        v-for="(item, index) in images"
        :key="index + 1"
        class="list-item"
        v-show="index === currentIndex"
      >
        <img :alt="props.productName" :src="item" />
      </li>
          </template>
        </Slide>
      </template>
    </Carousel>

    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{props.productName}}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ props.description }}</p>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{props.price}} руб.</h5>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</template>
<script setup>

import Carousel from './Carousel.vue';
const  props= defineProps({
  images: Array,
  productName: String,
  description: String,
  price: Number,

  
});
console.log('Re-re',props.images);
</script>

