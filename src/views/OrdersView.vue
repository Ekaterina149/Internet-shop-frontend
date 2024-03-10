<template>
  <OrderItems
    :user="user"
    :orderArrayWithQuantity="OrderArrayWithQuantity"
    @repeatOrd="
      (id) => {
        user.repeatOrder(id).catch((err) => {
          user.isError.exist = true;
          user.isError.message = err.message;
          console.log(err);
        });
      }
    "
  />
  <ErrorPopup :open="user.isError.exist" :message="user.isError.message" @onSub="onClose" />
</template>
<script setup>
import OrderItems from "../components/OrderItems.vue";
import { useCardsStore } from "../stores/cardsStore.ts";
import ErrorPopup from "../components/ErrorPopup.vue";
const cardsStore = useCardsStore();
const user = useUsersStore();
const newOrderArrayWithQuantity = computed(() =>
  user.newOrder.orderItems.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item._id === curr._id);
    if (existingItem) {
      // eslint-disable-next-line no-plusplus
      existingItem.quantity++;
    } else {
      acc.push({ ...curr, quantity: 1 });
    }
    return acc;
  }, [])
);

const OrderArrayWithQuantity = computed(() => {
  if (user.orderArray.length) {
        return user.orderArray.map((element) => ({
      _id: element._id,
      city: element.city,
      flat: element.flat,
      house: element.house,
      orderItems: element.orderItems.reduce((acc, curr) => {
        const existingItem = acc.find((item) => item._id === curr._id);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          acc.push({ ...curr, quantity: 1 });
        }
        return acc;
      }, []),
      paid: element.paid,
      postIndex: element.postIndex,
      status: element.status,
      street: element.street,
      orderSum: element.orderItems.reduce((sum, item) => sum + item.price, 0),
    }));
  }
});

  

const onClose = () => {
  user.isError.exist = false;
  user.isError.message = "";
};
</script>
