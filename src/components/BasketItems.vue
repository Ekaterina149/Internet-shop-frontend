<template>
  <ul
    v-if="props.cardsStore.basketArray.length"
    class="w-full flex flex-col items-center gap-y-3"
  >
    <li
      v-for="item in props.basketArrayWithQuantity"
      :key="props.basketArrayWithQuantity._id"
      class="flex flex-col justify-start rounded-xl px-2 pt-2 sm:px-10 sm:py-2 box-border bg-white max-w-[1000px] grow w-full"
    >
      <BasketItem
        :item="item"
        :removeItem="props.cardsStore.removeBasketArray"
        :removeOneItem="props.cardsStore.removeOneItemBasketArray"
        :addOneItem="props.cardsStore.addBasketArray"
        :isBasket="isBasket"
      />
    </li>
  </ul>
  <h5 class="grow" v-else>Ваша корзина пуста</h5>
</template>
<script setup>
 import {ref} from "vue";
import BasketItem from "./BasketItem.vue";
// const cardsStore = useCardsStore();
const  isBasket=ref(true);
 const props = defineProps({
  cardsStore: Object,
  basketArrayWithQuantity: Array

});
// const basketArrayWithQuantity = computed(() =>
//   props.cardsStore.basketArray.reduce((acc, curr) => {
//     const existingItem = acc.find((item) => item._id === curr._id);
//     if (existingItem) {
//       // eslint-disable-next-line no-plusplus
//       existingItem.quantity++;
//     } else {
//       acc.push({ ...curr, quantity: 1 });
//     }
//     return acc;
//   }, [])
// );
</script>
