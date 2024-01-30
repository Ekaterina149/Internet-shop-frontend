<template>
  <div
    id="dropdownNavbar"
    v-if="loggedin"
    :class="{ hidden: !open }"
    class="z-40 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 w-max"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
      <li>
        <RouterLink
          to="/orders"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Мои заказы</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/profile"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Редактировать профиль</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/change-password"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Сменить пароль</RouterLink
        >
      </li>
    </ul>
    <div class="py-1">
      <a
        href="#"
        @click="onSignOut"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
        >Выйти</a
      >
    </div>
  </div>
</template>
<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  open: Boolean,
  loggedin: Boolean,
  onExit: Function,
});
const emit = defineEmits(["on-close"])
const onSignOut = () => {
  props.onExit().then(()=>{
    emit("on-close");
    router.push({ name: "home" });
     
  });
  
};
</script>
