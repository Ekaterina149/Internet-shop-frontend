<template>
  <!-- Main modal -->
  <div
    class="fixed top-0 left-0 w-full h-screen flex flex-row justify-center items-stretch z-50 bg-zinc-600 bg-opacity-70"
    :class="{ 'hidden': !open }"
  >
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      class="w-full md:max-w-2xl p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <!-- Modal content -->
      <div
        class="relative bg-white rounded-lg shadow dark:bg-gray-700 flex flex-col justify-center items-stretch z-40"
      >
        <button
          @click="onClose"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8 flex flex-col items-stretch">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Войти в Аккаунт
          </h3>
          <form
            class="space-y-20 flex flex-col"
            action="#"
            @submit.prevent="onRedirect"
          >
            <div>
              <label
                for="email"
                class="block relative mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >email
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
              <span :class="{ 'hidden': !isEmailError }"
    class="absolute bottom--1 left-0 mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Ой!</span> Email странный.</span>
              </label
              >
            </div>
            <div>
              <label
                for="password"
                class="relative block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Пароль
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              <span :class="{ 'hidden': !isPasswordError }" class="absolute bottom--1 left-0 mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Ой!</span> Пароль не подходит.</span>
              </label
              >
            </div>
            <!-- <div class="flex justify-between">
              <a
                href="#"
                class=" text-sm text-blue-700 hover:underline dark:text-blue-500"
                >Забыли пароль?</a
              >
            </div> -->
            <div class="relative">

              <p  :class="{ 'hidden': !error }" class="absolute bottom-14 m-0 left-0 w-full  text-lg border-b-2 pb-1 border-red-600 text-red-600"><span class="font-medium">Ой!</span> Зарегистрируйтесь прежде чем войти</p>
              <button
              type="submit"
              @onclick="onRedirect"
              class=" relativew-max text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-center"
            >
              Войти
            </button>
            </div>
            
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Не Зарегистрированы?
              <RouterLink
                to="orders"
                class="text-blue-700 hover:underline dark:text-blue-500 pl-3"
                >Регистрация</RouterLink
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import router from "../router/index.ts";
const props = defineProps({
  open: Boolean,
  error: Boolean
});
const isEmailError=ref(false);
const isPasswordError=ref(false);
const emit = defineEmits(["closeAccount"]);
const onClose = () => {
  emit("closeAccount");
};

const onRedirect = () => {
  router.push({ name: "shop" });
  onClose();
};
</script>
