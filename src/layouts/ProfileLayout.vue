<template>
    <main class="mt-0 flex flex-col justify-center items-center box-border px-2 sm:px-4 md:px-5 lg:px-24 grow">
    <RouterView />
    </main>
  </template>
  
  <script setup>
  import { useDark } from "@vueuse/core";
  import { ref } from 'vue';
 
  </script>