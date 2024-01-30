<template>
  <!-- <pre>{{ cardsStore.getCardById(route.params.cardId) }}</pre> -->
  <div class=" shadow-lg  shadow-black flex flex-col box-border xl:pl-8 xl:pr-40 px-0 py-8 items-center justify-center h-full  w-full mt-10 bg-white rounded-xl ">
    <h5 class="self-center mt-12  mb-12 text-2xl md:text-3xl ">{{ ucFirst(currentCard.productName) }}</h5>
    <section class="flex flex-row  gap-x-1   md:gap-x-4 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-40 w-full   flex-wrap justify-center">
      <Carousel
        :autoplay="false"
        :repeat="false"
        :interval="5000"
        :images="currentCard.pictureBig"
        class=" grow-0 relative overflow-hidden bg-transparent grid grid-cols-[300px] grid-rows-[280px] min-[580px]:grid-cols-[520px] min-[580px]:grid-rows-[487px] auto-cols-auto justify-items-center items-center rounded-lg"
      >
        <template v-slot:slide="{ currentIndex, direction }">
          <Slide :direction="direction">
            <template v-slot:image>
               <li
                v-for="(item, index) in currentCard.pictureBig"
                :key="index + 1"
                class="list-item"
                v-show="index === currentIndex"
              >
                <img :alt="currentCard.productName" :src="item" />
              </li>
            </template>
          </Slide>
        </template>
      </Carousel>
      
      <div class="grow-0 min-[400px]:grow  md:max-w-[450px] xl:max-w-[600px] max-w-full self-center  ">
        
        <ul class="bg-white box-border px-4 pt-4 pb-11 flex flex-col gap-y-4">
          <h5 class="self-center my-4 text-2xl md:text-3xl">{{"Характеристики"}}</h5>
          <li class="grow-0 md:grow">
            <div class="flex flex-row w-full items-center gap-x-3 text-xs min-[400px]:text-base">
            <span class="grow-0">Артикул</span
            ><span
              class="border-2 h-0 border-dashed grow border-stone-700"
            ></span>
            {{ currentCard.articleNumber }}
          </div>
          </li>
          
        
          <li class="grow-0 md:grow">
            <div class="flex flex-row w-full items-center gap-x-3 text-xs min-[400px]:text-base">
              <span class="grow-0">Ширина</span
            ><span
              class="border-2 h-0 border-dashed grow border-stone-700"
            ></span
            >
            {{ currentCard.size.split('X').slice(0,1).join('') }}
            </div>
            
          </li>
          <li class="grow-0 md:grow">
            <div class="flex flex-row w-full items-center gap-x-3 text-xs min-[400px]:text-base">
              <span class="grow-0">Высота</span
            ><span
              class="border-2 h-0 border-dashed grow border-stone-700"
            ></span
            >
            {{ currentCard.size.split('X').slice(1,2).join('') }}
            </div>
            
          </li>
          <li class="grow-0 md:grow">
            <div class="flex flex-row w-full items-center gap-x-3 text-xs min-[400px]:text-base">
              <span class="grow-0">Глубина</span
            ><span
              class="border-2 h-0 border-dashed grow border-stone-700"
            ></span
            >
            {{ currentCard.size.split('X').slice(2,3).join('') }}
            </div>
            
          </li>
          <li class="grow-0 md:grow">
            <div class="flex flex-row w-full items-center gap-x-3 text-xs min-[400px]:text-base">
              <span class="grow-0">Материал</span
            ><span
              class="border-2 h-0 border-dashed grow border-stone-700"
            ></span
            >
            {{ currentCard.material }}
            </div>
            
          </li>
          <li class="grow-0 md:grow">
            <div class="flex flex-row w-full items-center gap-x-3 text-xs min-[400px]:text-base">
              <span class="grow-0">Наличие</span
            ><span
              class="border-2 h-0 border-dashed grow border-stone-700"
            ></span
            >
            {{ currentCard.amount > 0 ? "Есть в наличии" : "Под заказ" }}
            </div>
            
          </li>
          <li class="grow-0 md:grow">
            <div class="flex flex-row w-full items-center gap-x-3 text-xs min-[400px]:text-base">
              <span class="grow-0">Цена</span
            ><span
              class="border-2 h-0 border-dashed grow border-stone-700"
            ></span
            >
            {{ currentCard.price + " " }}₽
            </div>
            
          </li>
          
            <div class="flex flex-row gap-10 py-20  justify-between items-center"
            ><p class="font-bold text-3xl text-right ">{{ currentCard.price + " " }}₽</p>
              <TobasketButton @click="onAddToBasket" class=" inline-block"/>
            </div>
          
          
          <!-- <li>{{ currentCard.amount > 0 ? "Есть в наличии" : "Под заказ" }}</li> -->
        </ul>
      
     
    
      </div>
      
    </section>
    <h5 class="self-center  mt-12  mb-12 text-2xl md:text-3xl ">{{ "Описание" }}</h5>
    <p class="bg-white box-border px-10 pb-10 self-stretch  text-justify">{{ (currentCard.description.length > 30) && !clicked ? currentCard.description.split(' ').slice(0,Math.trunc(currentCard.description.split(' ').length/4)).join(' ') + '...': currentCard.description   }}</p>
    <!-- <a :class="{'text-red-900': clicked }"  @click="showDetails">

      {{DetailsTextContent}}</a> -->
    <ShowDetailsButton v-if="currentCard.description.length > 30" :class="{'underline': clicked, 'text-red-900': clicked }"  :clickedButton="clicked" @onclick="showDetails"/>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useCounterStore } from "../stores/counter.ts";
import { useCardsStore } from "../stores/cardsStore.ts";
import { mdiCartMinus } from "@mdi/js";
import BasketButton from "../components/BasketButton.vue";
import TobasketButton from "../components/TobasketButton.vue";
import Carousel from "../components/Carousel.vue";
import ShowDetailsButton from "../components/ShowDetailsButton.vue";
const clicked = ref(false);
const cardsStore = useCardsStore();
const route = useRoute();
const currentCard = computed(() => cardsStore.getCardById(route.params.cardId));
console.log(route.params.cardId);
 const onAddToBasket= () => {
  cardsStore.addBasketArray(route.params.cardId)
 } 
 const showDetails = () => {
  clicked.value =!clicked.value ;
  
 }
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

</script>
