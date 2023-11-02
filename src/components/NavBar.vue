<template>
 <nav class="bg-white dark:bg-gray-900 w-full  top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class=" flex flex-wrap items-center justify-between mx-auto pt-1 px-4">
    <RouterLink to="/" class=" flex flex-col items-center pr-4   ">
      <img src="../assets/korzina_pbzcrxl7vk40_512.png" class="h-10  mr-2" alt="Flowbite Logo">
      <span class=" inline-block self-center text-2xl    font-leo whitespace-nowrap dark:text-white pt-0">Изделия из лозы</span>
    </RouterLink>
  <div class="flex md:order-2">
    <div class="relative w-max">
      <AccountButton @toggle="onToogle" class="block md:hidden" :loggedin="isLoggedin"/>
      <AccountDropDown :loggedin="isLoggedin" :open="isAccountOpen"/>
    </div>
      
      <BasketButton :basketLength="cardsStore.basketArray.length" class="block md:hidden"/>
      <MenuButton @toggleMenu="onToogleMenu"/>
  </div>
  <div class=" items-center justify-between   w-full md:flex md:w-auto md:order-1 shrink-0" id="targetEl" :class ="{'hidden': !isOpen }"  >
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white" >
      <li>
        <RouterLink  class="block py-2  text-gray-900 rounded md:bg-transparent md:hover:text-xl  hover:ease-out ease-in duration-300 hover:text-red-900 "  to="/">Главная</RouterLink>
      </li>
      <li>
        <RouterLink class="block py-2  text-gray-900 rounded md:bg-transparent md:hover:text-xl  hover:ease-out ease-in duration-300 hover:text-red-900" to="/shop" >Магазин</RouterLink >
      </li>
      <li>
        <RouterLink  class="block py-2  text-gray-900 rounded md:bg-transparent md:hover:text-xl  hover:ease-out ease-in duration-300 hover:text-red-900" to="/about">О Нас</RouterLink>
      </li>
      <li>
        <RouterLink  class="block py-2  text-gray-900 rounded md:bg-transparent md:hover:text-xl  hover:ease-out ease-in duration-300 hover:text-red-900" to="/shop">Контакты</RouterLink>
      </li>
      <li>
        <div class="relative w-max">
          <AccountButton class ="hidden md:block" @toggle="onToogle"/>
          <AccountDropDown :loggedin="isLoggedin" :open="isAccountOpen"/>
        </div>
      </li>
      <li>
        <BasketButton :basketLength="cardsStore.basketArray.length" class ="hidden md:block"/>
      </li>
    </ul>
    </div>
  </div>
</nav>
</template>
<script setup>
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCartOutline, mdiAccount } from '@mdi/js';
import AccountButton from '../components/AccountButton.vue';
import BasketButton from '../components/BasketButton.vue';
import MenuButton from '../components/MenuButton.vue';
import {RouterLink} from 'vue-router';
import { useCardsStore } from "../stores/cardsStore.ts";
const cardsStore = useCardsStore();
const isOpen = ref(false);
const props = defineProps({
  isLoggedin: Boolean,
  isAccountOpen: Boolean,
  onToogle: Function,
});
const onToogleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log('isOpen', isOpen);
};

</script>