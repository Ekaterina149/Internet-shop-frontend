<template>
  <RouterLink to="/basket">
    <button
     
      type="button"
      class=" relative bg-transparent block py-2 px-5 text-gray-900 rounded md:hover:text-xl hover:ease-out ease-in duration-300 hover:text-red-900"
    >
      Корзина
      <div v-show="basketLength" class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{{ basketLength }}</div>
      <SvgIcon
        type="mdi"
        h="h-full"
        w="w-full"
        size="30"
        :path="mdiCartMinus"
        class="inline-block"
      />
    </button>
  </RouterLink>
</template>
<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCartMinus } from "@mdi/js";
import { RouterLink } from "vue-router";
const props = defineProps(
  {
    basketLength : Number,
  }
)
</script>
