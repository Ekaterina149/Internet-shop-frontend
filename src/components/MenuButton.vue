<template>
  <button
    @click="onToogle"
    id="triggerEl"
    data-collapse-toggle="navbar-default"
    type="button"
    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="navbar-sticky"
    aria-expanded="false"
  >
    <span class="sr-only">Open main menu</span>
    <SvgIcon
      type="mdi"
      h="h-full"
      w="w-full"
      size="30"
      :path="mdiMenu"
      class="inline-block"
    />
  </button>
</template>
<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu } from "@mdi/js";
const emit = defineEmits(["toggleMenu"]);
const onToogle = () => {
  emit("toggleMenu");
};
</script>
