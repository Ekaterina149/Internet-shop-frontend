
<!-- "Это моя попытка сделать анимацию кадров переключения слайдов без использования анимаций Vue" -->
<!-- Довольно провальная. Зато тут есть анимация @keyframes, смотри данный код строки 152 -169 -->
<!-- Рабочий компонент, который я довожу до ума это Carousel.vue, там как раз я и использую анимацию Vue -->
<!-- она описана  компоненте Slide, компонет Slide  это слот компонента Carousel-->
<template>
  <div
    id="default-carousel"
    class="relative w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl py-6"
  >
    <!-- Carousel wrapper -->
    <div class="relative first-letter:rounded-lg overflow-hidden">
      <transition name="slide" mode="out-in">
        <!-- Item 1 -->
        <div
          class="duration-700 ease-in-out"
          data-carousel-item
          :key="currentSlideIndex"
        >
          <img
            :src="initialCards[currentSlideIndex].link"
            class="block w-full"
            :alt="initialCards[currentSlideIndex].name"
          />
        </div>
      </transition>
    </div>

    <button
      type="button"
      @click="prevSlide"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      @click="nextSlide"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
import picPumkin from "../assets/pumkins.jpg";
import picBasket from "../assets/basket-5.jpg";
import picBag from "../assets/bag-3.jpg";
import picBed from "../assets/dolls-bed.jpg";
const currentSlideIndex = ref(0);
const timer = ref(null);
const isForwardBtnDisabled = ref(false);
const isBackwardBtnDisabled = ref(true);
const initialCards = ref([
  {
    name: "Тыквы",
    link: picPumkin,
    visibility: false,
    id: 1,
  },
  {
    name: "Корзина с цветами",
    link: picBasket,
    visibility: false,
    id: 2,
  },
  {
    name: "Колюбель для куклы",
    link: picBed,
    visibility: false,
    id: 3,
  },
  {
    name: "Плетеная сумка",
    link: picBag,
    visibility: false,
    id: 4,
  },
]);

const nextSlide = () => {
  currentSlideIndex.value++;
  if (currentSlideIndex.value >= initialCards.value.length) {
    currentSlideIndex.value = 0;
  }
};
const prevSlide = () => {
  currentSlideIndex.value--;
  if (currentSlideIndex.value < 0) {
    currentSlideIndex.value = initialCards.value.length - 1;
  }
};

onMounted(() => {
  timer.value = setInterval(nextSlide, 4000);
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<style scoped>
.slide-enter-active {
  animation: slide-in-right 0.5s ease-in-out;
}

.slide-leave-active {
  animation: slide-out-left 1s ease-in-out;
  overflow: hidden;
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
