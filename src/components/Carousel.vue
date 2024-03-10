<template>
  <div
    
    @mouseenter.stop="handleStop"
    @mouseleave.stop="handleGo"
  >
    <slot name="slide" :currentIndex="currentIndex" :direction="direction" ></slot>
    <slot name="routerLink"></slot>
    <div class="swipe_dian">
      <span
        v-for="(_, index) in images"
        :class="{ active: index === currentIndex }"
        :key="index + 1"
        @click="
          handleChange(index, index + 1 > currentIndex ? 'forward' : 'backward')
        "
      ></span>
    </div>
    <div class="swipe_control" v-show="control">
      <SvgIcon
        type="mdi"
        h="h-full"
        w="w-full"
        size="50"
        :path="mdiChevronLeft"
        class="text-white hover:text-red-900"
        @click="handleChange(prevIndex, 'back')"
      />
      <SvgIcon
        type="mdi"
        h="h-full"
        w="w-full"
        size="50"
        :path="mdiChevronRight"
        class="text-white hover:text-red-900"
        @click="handleChange(nextIndex)"
      />
    </div>
  
  </div>
</template>
<script setup>
import { defineProps, defineEmits, computed, ref, onMounted } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";
import Slide from './Slide.vue';
const props = defineProps({
  autoplay: Boolean,
  repeat: Boolean,
  interval: Number,
  images: {
    type: Array,
    default: () => [],
  },
});


const currentIndex = ref(0);
const direction = ref("forward");
let timer = null;

const prevIndex = computed(() => {
  if (currentIndex.value === 0) return props.images.length - 1;
  return currentIndex.value - 1;
});

const nextIndex = computed(() => {
  if (currentIndex.value === props.images.length - 1) return 0;
  return currentIndex.value + 1;
});

const control = ref(false);

/**
 * Запустить карусель
 */
function handleGo() {
  control.value = false;
  if (!props.repeat) return;

 
  timer = setTimeout(() => {
    currentIndex.value++;
    if (currentIndex.value > props.images.length - 1) currentIndex.value = 0;
    handleGo();
  }, props.interval);
}

/**
 * Остановить карусель
 */
function handleStop() {
  control.value = true;
  clearInterval(timer);
  timer = null;
}

/**
 * Управление переключением влево и вправо
 * @param index
 */
function handleChange(index, dir = "forward") {
  direction.value = dir;
  currentIndex.value = index;
  console.log('направление',direction.value);
}

onMounted(() => {
  if (props.autoplay) handleGo();
});
</script>
<style>


.swipe_list {
  width: 100%;
  height: 100%;
}

.swipe_list li {
  position: absolute;
  width: 100%;
  height: 100%;
}
.swipe_list li img {
  width: 100%;
  height: 100%;
}

.swipe_dian {
  position: absolute;
  z-index: 30;
  bottom: 0;
  height: 60px;
  text-align: center;
  font-size: 0;
  /* right: 10px; */
}

.swipe_dian span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 26px 5px;
  background-color: #5f5853;
  cursor: pointer;
}

.swipe_dian .active {
  background-color: #ffffff;
}

.swipe_title {
  position: absolute;
  line-height: 60px;
  height: 60px;
  width: 76%;
  z-index: 20;
  text-align: left;
  color: white;
  font-size: 18px;
  margin-left: 10px;
  bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  justify-self: flex-start;
}

.swipe_bottom {
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 0;
  background-color: #3a2113;
  opacity: 0.5;
  z-index: 10;
}

.swipe_control {
  position: absolute;
  z-index: 40;
  top: 50%;
  width: 100%;
  height: 30px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.swipe_control .prev,
.swipe_control .next {
  text-align: center;
  line-height: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #190f0b;
  color: white;
}

.swipe_control .prev:hover {
  color: #cccccc;
  font-weight: bold;
  opacity: 0.7;
}

.swipe_control .next:hover {
  color: #cccccc;
  font-weight: bold;
  opacity: 0.7;
}

.list-in-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}
.list-in-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}
.list-in-enter-from {
  transform: translateX(100%);
}
.list-in-leave-from {
  transform: translateX(0);
}

.list-out-leave-active {
  transition: all 1s ease;
  transform: translateX(100%);
}
.list-out-leave-from {
  transform: translateX(0);
}
.list-out-enter-from {
  transform: translateX(-100%);
}
.list-out-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}
</style>
