<template>
  <div
    class="fixed top-0 left-0 w-full h-screen flex flex-row justify-center items-stretch z-50 bg-zinc-600 bg-opacity-70"
    :class="{ hidden: !open }"
  >
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      class="w-full md:max-w-2xl flex flex-row p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      
      <div
        class="relative bg-white rounded-lg shadow flex flex-col justify-center items-stretch z-40 self-center"
      >
        <button
          @click="onSubmit"
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
          <h3 class="mb-4  py-12 text-xl text-center font-medium text-gray-900 dark:text-white">
           {{ message }}
          </h3>
          <form
            class="space-y-20 flex flex-col"
            action="#"
            @submit.prevent="onSubmit"
            noValidate
          >
            <button
              type="submit"
              class="self-center flex items-center px-2 py-1 md:text-lg text-sm font-medium text-center text-red-900 border-red-900 border-2 rounded-lg hover:bg-red-900 focus:ring-4 hover:text-white"
            >
              Ок
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  open: Boolean,
  message: String,
});
const emit = defineEmits(['onSub'])
const onSubmit = () => {
emit('onSub');
}
</script>
