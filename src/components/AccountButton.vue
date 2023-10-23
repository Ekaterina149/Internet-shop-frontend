<template>
  <button
    type="button"
    class="bg-transparent block py-2 px-5 text-gray-900 rounded md:hover:text-xl hover:ease-out ease-in duration-300 hover:text-red-900"
    @click="onToogle"
  >
    Аккаунт
    <svg
      v-if="loggedin"
      class="w-2.5 h-2.5 ml-2.5 inline-block"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
    <SvgIcon
      type="mdi"
      h="h-full"
      w="w-full"
      size="30"
      :path="mdiAccount"
      class="inline-block"
    />
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
