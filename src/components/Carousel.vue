<!-- Этот компонент Carousel.vue и компонет Slide.vue работают вместе, чтобы создать карусель-->
<!-- Они оба втавлены в HomeView.vue. Там происходит самое интересное -->
<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide"></slot>

    <!-- Navigation -->
    <div
      v-if="navEnabled"
      class="absolute top-1/2 px-0 py-0 flex flex-row justify-between items-center z-40 w-full"
    >
      <button
        @click="prevSlide"
        class="bg-transparent text-gray-900 rounded md:hover:text-xl hover:ease-out ease-in duration-300 hover:text-red-900"
      >
        <SvgIcon
          type="mdi"
          h="h-full"
          w="w-full"
          size="50"
          :path="mdiChevronLeft"
          class="text-white  hover:text-red-900"
        />
      </button>
      <button
        @click="nextSlide"
        class="block text-gray-900 rounded md:hover:text-xl hover:ease-out ease-in duration-300 hover:text-red-900"
      >
        <SvgIcon
          type="mdi"
          h="h-full"
          w="w-full"
          size="50"
          :path="mdiChevronRight"
          class="text-white  hover:text-red-900"
        />
      </button>
    </div>

    <!-- Pagination -->
    <div v-if="pagintationEnabled" class="pagination">
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in props.carouselSlides"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";
const props = defineProps({
  startAutoPlay: Boolean,
  timeout: Number,
  navigation: Boolean,
  pagination: Boolean,
  carouselSlides: Number,
});
console.log(props.carouselSlides);
const currentSlide = ref(1);
const autoPlayEnabled = ref(
  props.startAutoPlay === undefined ? true : props.startAutoPlay
);
const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout);
const pagintationEnabled = ref(
  props.pagination === undefined ? true : props.pagination
);
const navEnabled = ref(
  props.navigation === undefined ? true : props.navigation
);

// next slide
const nextSlide = () => {
  if (currentSlide.value === props.carouselSlides) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};

// prev slide
const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value -= 1;
};

const goToSlide = (index) => {
  currentSlide.value = index + 1;
};

// autoplay
const autoPlay = () => {
  setInterval(() => {
    nextSlide();
  }, timeoutDuration.value);
};

if (autoPlayEnabled.value) {
  autoPlay();
}


</script>

<style lang="scss">
.navigate {
  padding: 0 16px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  outline: solid 2px red;
  width: 100%;
  position: relative;

  
}

.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  span {
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .active {
    background-color: #6347c7;
  }
}
</style>
