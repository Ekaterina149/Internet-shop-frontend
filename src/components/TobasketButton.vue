<template>
   
        <button  class="self-center flex items-center px-3 py-2 text-lg font-medium text-center text-red-900 border-red-900 border-2 rounded-lg hover:bg-red-900 focus:ring-4 hover:text-white  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            В Корзину
            <SvgIcon
        type="mdi"
        h="h-full"
        w="w-full"
        size="20"
        :path="mdiCartMinus"
        class=" ml-2 inline-block " 
      />
        </button>
   
  </template>
  <script setup>
  import { ref } from "vue";
  import SvgIcon from "@jamescoyle/vue-icon";
  import { mdiCartMinus } from "@mdi/js";
 
  </script>
  