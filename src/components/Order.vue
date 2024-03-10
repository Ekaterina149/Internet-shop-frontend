<template>
  <h5 class="text-left font-bold md:text-xl text-base">Заказ № {{ order._id }} </h5>
   <h5 class="font-bold md:text-base text-xs">Сумма заказа <span class="text-left font-bold md:text-xl text-base">{{ order.orderSum }} </span> руб.</h5>
   

   <p class="font-bold md:text-base text-xs"> {{ order.postIndex }}, <p class="inline-block"> {{ order.city }} </p> , <p class="inline-block"> {{ order.street }} </p>, дом <p class="inline-block"> {{ order.house }} </p>, кв. <p class="inline-block"> {{ order.flat }} </p> 
  </p>
   
   <ul
   
    class="w-full flex flex-col items-center gap-y-3"
  >
    <li
      v-for="(item, index) in props.order.orderItems"
      :key="index"
      class="flex flex-col justify-start rounded-xl px-2 pt-2 sm:px-10 sm:py-2 box-border bg-white max-w-[1000px] grow w-full"
    >
      <BasketItem
        :item="item"
        :isBasket="isBasket"
        :removeItem="cardsStore.removeBasketArray"
        :removeOneItem="cardsStore.removeOneItemBasketArray"
        :addOneItem="cardsStore.addBasketArray"
      />
    </li>
  </ul>
  <RepeatOrderButton @onClick="repeatOrder"/>

</template>
<script setup>
import BasketItem from "./BasketItem.vue";
import {ref} from  "vue";
import { useCardsStore } from "../stores/cardsStore.ts";
import RepeatOrderButton from "./RepeatOrderButton.vue"
const cardsStore = useCardsStore();
const isBasket=ref(false);
const props=defineProps({
  order: Object,
  
  
});
const emit = defineEmits(['repeat'])
const repeatOrder = ()=>{

emit('repeat', props.order._id);

} 

</script>