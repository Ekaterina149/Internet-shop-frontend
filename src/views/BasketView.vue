<template>
  <section
    class="h-full w-full rounded-lg grow flex flex-col justify-start pt-10 items-start gap-x-4 gap-y-2 md:flex-row"
  >
    <BasketItems
      :cardsStore="cardsStore"
      :basketArrayWithQuantity="cardsStore.basketArrayWithQuantity"
    />
    <OrderAddressForm
      :cardsStore="cardsStore"
      :usersStore="usersStore"
      @newOrder="fetchOrder"
    />
    <ErrorPopup
    :open="usersStore.isError.exist"
    :message="usersStore.isError.message"
    @onSub="onClose"
  />
  </section>
</template>
<script setup>
import BasketItems from "../components/BasketItems.vue";
import OrderAddressForm from "../components/OrderAddressForm.vue";
import { useCardsStore } from "../stores/cardsStore.ts";
import { useUsersStore } from "../stores/usersStore.ts";
import ErrorPopup from "../components/ErrorPopup.vue";
import { watch } from "vue";
const cardsStore = useCardsStore();
const usersStore = useUsersStore();
// const newOrder = ref(null);

// const basketArrayWithQuantity = computed(() =>
//   cardsStore.basketArray.reduce((acc, curr) => {
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
const basketSumm = ref(cardsStore.basketSumm);
const fetchOrder = async(order) => {
  await usersStore.createNewOrder(order)
  .catch((err) => {
      debugger;
      usersStore.isError.exist= true;
      usersStore.isError.message=err.message;
      console.log(err);
    });

    if(!props.usersStore.isError.exist){
        debugger;
         cardsStore.fetchClearBasket();
      }
      
  


};
const onClose = () => {
  
  usersStore.isError.exist = false;
  usersStore.isError.message = "";
};

// console.log("cardsStore.basketArrayWithQuantity", cardsStore.basketArrayWithQuantity);
</script>
