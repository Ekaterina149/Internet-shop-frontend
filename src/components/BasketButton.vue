<template>
  <RouterLink to="basket">
    <button
      type="button"
      class="bg-transparent block py-2 px-5 text-gray-900 rounded md:hover:text-xl hover:ease-out ease-in duration-300 hover:text-red-900"
    >
      Корзина
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
</script>
