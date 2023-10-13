<template>
  <div
    class="fullscreen flex justify-center items-center bg-blue-500 text-white text-center q-pa-md"
  >
    <div class="flex flex-col">
      <div style="font-size: 30vh">404</div>

      <div class="mb-16 text-xl" style="opacity: 0.4">{{ t("notFound") }}</div>

      <RouterLink class="rounded-md py-2 bg-white text-blue-500 hover:bg-gray-200" to="/">{{
        t("goHome")
      }}</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
