<template>
    
      
      <h1 class ="text-xl text-red-900">
        Город солнца
      </h1>
      <ul class="grid grid-cols-[320px] auto-rows-auto md:grid-cols-[320px_320px] xl:grid-cols-[320px_320px_320px] gap-3 ">
        <li v-for="card in cardsStore.cardsArray">
        <Card :card="card" class="shadow hover:shadow-md"/>
        </li>
      </ul>
      <!-- <Card :images="cardsArray[0].pictureBig" :productName="cardsArray[0].productName" :description="cardsArray[0].description" :price="cardsArray[0].price"/> -->
    
    
   
  </template>
  <script setup>
  import Card from '../components/Card.vue';
  import {useCardsStore} from "../stores/cardsStore.ts";
  const cardsStore=useCardsStore();
  
  </script>