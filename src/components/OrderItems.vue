<template>
    <ul
      v-if="props.user.orderArray.length"
      class="w-full flex flex-col items-center gap-y-3"
    >
      <li
        v-for="(item, index ) in props.orderArrayWithQuantity"
        :key="index"
        class="flex flex-col justify-start rounded-xl px-2 pt-2 sm:px-10 sm:py-2 box-border bg-white max-w-[1000px] grow w-full"
      >
      <!-- <h5>Сумма заказа {{ item.orderSum }}</h5> -->
        <Order
          :order="item"
          @repeat="(id)=> emit('repeatOrd', id)"
         
         
        />
      </li>
    </ul>
    <h5 class="grow" v-else>У Вас нет заказов</h5>
  </template>
  <script setup>
   
  import Order from "./Order.vue";
  import {computed} from "vue";
  // const cardsStore = useCardsStore();
   const props = defineProps({
    user: Object,
    orderArrayWithQuantity: Array,
    
  
  });
  const emit=defineEmits(['repeatOrd']);

  
    
  </script>