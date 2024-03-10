<template>
  <section
    class="h-full w-full rounded-lg grow flex flex-col justify-start pt-10 items-start gap-x-4 gap-y-2"
    :class="{ 'md:flex-row': cardsStore.basketArray.length }"
  >
    <h5 v-if="!cardsStore.basketArray.length" class="text-2xl self-center w-full text-center">
      Ваша корзина пуста
    </h5>
    <BasketItems
      :cardsStore="cardsStore"
      :basketArrayWithQuantity="cardsStore.basketArrayWithQuantity"
    />
    <OrderAddressForm
      :cardsStore="cardsStore"
      :usersStore="usersStore"
      @newOrder="fetchOrder"
      @error="
        (exist, message) => {
          usersStore.isError.exist = exist;
          usersStore.isError.message = message;
        }
      "
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

const basketSumm = ref(cardsStore.basketSumm);
const fetchOrder = async (order) => {
  try {
    await usersStore.createNewOrder(order);
    if (!usersStore.isError.exist) {
      cardsStore.fetchClearBasket();
    }
  } catch (err) {
    usersStore.isError.exist = true;
    usersStore.isError.message = err.message;
    console.log(err);
  }
};
const onClose = () => {
  usersStore.isError.exist = false;
  usersStore.isError.message = "";
};

// console.log("cardsStore.basketArrayWithQuantity", cardsStore.basketArrayWithQuantity);
</script>
