<template>
      <button
        @click="onClick"
        type="button"
        class="bg-gray-300  px-1  w-6 h-6  border-2 rounded-[3px] border-transparent text-white  hover:ease-out ease-in duration-300 hover:text-red-900 "
      >
     {{ itemCount }}
      </button>
  </template>
  <script setup>
  import { ref } from "vue";
  const emit = defineEmits(["clickItemButton"]);
  const props = defineProps(
    {
      itemCount : String,
    }
  );

  const onClick=()=> {
    emit("clickItemButton");
  }

  </script>