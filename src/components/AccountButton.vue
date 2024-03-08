<template>
  <button
    type="button"
    class="bg-transparent block py-2 px-5 text-gray-900 rounded md:hover:text-xl hover:ease-out ease-in duration-300 hover:text-red-900"
    @click="onToogle"
  >
    Аккаунт

    <SvgIcon
      type="mdi"
      h="h-full"
      w="w-full"
      size="30"
      :path="mdiAccount"
      class="inline-block"
    />
    <slot></slot>
  </button>
</template>
<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";
const emit = defineEmits(["toggle"]);
const onToogle = () => {
  emit("toggle");
};
const props = defineProps({
  loggedin: Boolean,
});
</script>
