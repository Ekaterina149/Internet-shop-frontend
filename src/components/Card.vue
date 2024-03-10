<template>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg hover:shadow-lg   hover:shadow-black ">
  
    <Carousel
      :autoplay="false"
      :repeat="false"
      :interval="5000"
      :images="card.pictureBig"
      class="relative overflow-hidden bg-transparent grid grid-cols-[320px] grid-rows-[250px]  auto-cols-auto justify-items-center items-center  rounded-lg "
    >
     
      <template v-slot:slide="{currentIndex, direction }">
        <Slide :direction="direction">
          <template v-slot:image>
            <li
        v-for="(item, index) in card.pictureBig"
        :key="index + 1"
        class="list-item"
        v-show="index === currentIndex"
      >
        <img :alt="card.productName" :src="item" />
      </li>
          </template>
        </Slide>
      </template>
    </Carousel>

    <div class="p-5  relative min-h-[217px] h-[300px]  flex flex-col justify-start gap-y-4 items-center">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span class="text-4xl">{{card.price}}</span> руб.</h5>
        
    
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{card.productName.toUpperCase()}}</h5>
      
        
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 " :class="{ 'line-clamp-2' :card.description.length > 65 }">{{card.description }} </p>
        
        <RouterLink :to="{name: 'cards', params:{cardId:card._id}}" class=" absolute bottom-4  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-900 border-red-900 border-2 rounded-lg hover:bg-red-900 focus:ring-4 hover:text-white  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Подробнее
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </RouterLink>
    
        </div>
      
</div>
</template>
<script setup>

import Carousel from './Carousel.vue';
const  props= defineProps({
 card: Object

  
});

</script>

