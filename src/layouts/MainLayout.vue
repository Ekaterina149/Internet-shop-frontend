<template>
  <AccountPopup v-if="!isLoggedin" :open ="isAccountOpen" :error="isError" @closeAccount="onCloseAccount"/>
  <NavBar :isAccountOpen="isAccountOpen" :isLoggedin="isLoggedin" :onToogle="onToogle" class="grow-0"/>
  <main class="mt-0 flex flex-col justify-center items-center box-border px-2 sm:px-4 md:px-5 lg:px-24 grow">
  <RouterView />
  </main>
</template>

<script setup>
import { useDark } from "@vueuse/core";
import { ref } from 'vue'
import AccountPopup from '../components/AccountPopup.vue';
import NavBar from '../components/NavBar.vue';

const isAccountOpen = ref(false);
const isLoggedin = ref(true);
const isError = ref(true);

const onToogle = () => {
  isAccountOpen.value = !isAccountOpen.value;
  console.log('isAccountOpen', isAccountOpen);
};

const onToogleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log('isOpen', isOpen);
};
const onCloseAccount = () =>{
  isAccountOpen.value = false;
}
</script>

