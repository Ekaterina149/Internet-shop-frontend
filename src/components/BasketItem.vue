<template>
    <div class="flex flex-row flex-wrap gap-2 sm:gap-8 justify-between items-center">
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
                <BasketItemButton v-if="isBasket"
                  itemCount="+"
                  @clickItemButton="()=>addOneItem(item._id)"
                />
                <p class="shrink-0 mx-2">
                  {{ item.quantity + " " + "шт." }}
                </p>

                <BasketItemButton v-if="isBasket"
                  itemCount="-"
                  @clickItemButton="()=>removeOneItem(item._id)"
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

         
        </div>
        <BasketRemoveItemButton v-if="isBasket"
          text="Удалить"
          @clickCard="()=>removeItem(item._id)"
        />
</template>
<script setup>
import { defineProps } from 'vue';
import BasketRemoveItemButton from "./BasketRemoveItemButton.vue";
import BasketItemButton from "./BasketItemButton.vue";
const props= defineProps({
    removeItem: Function,
    item: Object,
    removeOneItem: Function,
    addOneItem: Function,
    isBasket: Boolean,
});
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
</script>