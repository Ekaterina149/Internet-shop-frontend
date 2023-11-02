<template>
  <section
    class="h-full w-full rounded-lg grow flex flex-col justify-start pt-10 items-start gap-x-4 gap-y-2 md:flex-row"
  >
 
    <ul
      v-if="cardsStore.basketArray.length"
      class="w-full flex flex-col items-center gap-y-3"
    >
      <li
        v-for="item in basketArrayWithQuantity"
        :key="basketArrayWithQuantity._id"
        class="flex flex-col justify-start rounded-xl px-2 pt-2 sm:px-10 sm:py-2 box-border bg-white max-w-[1000px] grow w-full"
      >
        <!-- <h5 class="w-full self-start font-bold text-left pb-4 text-xl">
          {{ ucFirst(item.productName) }}
        </h5> -->

        <div class="flex flex-row gap-2 sm:gap-8 justify-between items-center">
          <img
            :src="item.pictureSmall"
            :alt="item.productName"
            class="w-20 h-20 object-cover inline-block shrink-0"
          />
          <div class="grow flex flex-col gap-y-2">
            <div
              class="flex flex-row items-center gap-x-2 text-xs min-[400px]:text-base"
            >
              <span class="grow">{{ ucFirst(item.productName) }}</span>

              <div class="grow flex flex-row justify-end">
                <BasketItemButton
                  itemCount="+"
                  @click="cardsStore.addBasketArray(item._id)"
                />
                <p class="shrink-0 mx-2">
                  {{ item.quantity + " " + "шт." }}
                </p>

                <BasketItemButton
                  itemCount="-"
                  @click="cardsStore.removeOneItemBasketArray(item._id)"
                />
              </div>
              <span class="grow text-right font-bold md:text-xl text-base"
                >{{ item.price * item.quantity }}₽</span
              >
            </div>
            <div
              class="flex flex-row items-center gap-x- text-xs min-[400px]:text-base"
            >
              <span class="grow-0">Артикул</span>
              <p class="grow text-right">
                {{ item.articleNumber }}
              </p>
            </div>

            <div
              class="flex flex-row items-center gap-x-2 text-xs min-[400px]:text-base"
            >
              <span class="grow-0">Размеры</span>
              <p class="grow text-right">
                {{ item.size }}
              </p>
            </div>
          </div>

          <!-- <p class="inline-block">Количество{{   ' '+ item.quantity + ' ' }} шт.</p> -->
        </div>
        <BasketRemoveItemButton
          text="Удалить"
          @click="cardsStore.removeBasketArray(item._id)"
        />
      </li>
    </ul>
    <h5 class="grow" v-else>Ваша корзина пуста</h5>
    <div class="bg-white box-border p-4 border-spacing-2 rounded-xl flex flex-col items-start self-start">
      <h5 class="p-4 font-bold text:base sm:text-xl">Доставка по адресу:</h5>
      <p class="pb-8">
        <span class="pl-2">660003</span>г.Самара
        <span class="pl-2">ул. Максима Горького</span>
        <span class="pl-2">д.2</span><span class="pl-2">кв.56</span>
      </p>
      <BasketRemoveItemButton text="Оформить заказ" class="self-center" />
    </div>
  </section>

  <!-- <pre>{{basketArrayWithQuantity.map((product)=>product.pictureSmall)}}</pre> -->
</template>
<script setup>
import { useCardsStore } from "../stores/cardsStore.ts";
import BasketItemButton from "../components/BasketItemButton.vue";
import BasketRemoveItemButton from "../components/BasketRemoveItemButton.vue";
const cardsStore = useCardsStore();
const basketArrayWithQuantity = computed(() =>
  cardsStore.basketArray.reduce((acc, curr) => {
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
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
</script>
