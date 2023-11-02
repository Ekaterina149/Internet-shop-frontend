<template>
  <button
    class="self-center flex items-center px-2 py-1 md:text-lg text-sm font-medium text-center text-red-900 border-red-900 border-2 rounded-lg hover:bg-red-900 focus:ring-4 hover:text-white"
  >
    {{text}}
  </button>
</template>
<script setup>

defineProps({
    text: String
})
</script>
