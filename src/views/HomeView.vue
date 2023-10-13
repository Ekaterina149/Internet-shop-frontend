<template>
  <section class="mt-14 flex flex-col items-center">

    <!-- Компонент карусель -->
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      :carouselSlides="length"
      class="carousel"
      v-slot="{ currentSlide }"
    >
    <!-- Содержимое слота  внутри Carousel это компонент Slide -->
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <!-- Содержимое слота  внутри  Slide -->
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="slide" alt="" />
        </div>
      </Slide>
    </Carousel>
  </section>
  <!-- <UndefinedWelcome /> -->
</template>

<script setup>
import UndefinedWelcome from "@/components/UndefinedWelcome.vue";
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";
import picPumkin from "../assets/pumkins.jpg";
import picBasket from "../assets/basket-5.jpg";
import picBag from "../assets/bag-3.jpg";
import picBed from "../assets/dolls-bed.jpg";
import picBas from "../assets/basket-1.jpg";
// массив картинок, которые будем отображать
const carouselSlides = ref([picPumkin, picBasket, picBag, picBas]);
// длина массива, возможно можно было не делать эту переменную
// а передвать в Carousel пропсой сразу carouselSlides.length
const length = carouselSlides.value.length;

</script>
<style lang="scss" scoped>
$widthsize: 80vw;
$heightsize: 50vh;
.carousel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  // max-height: $heightsize;
  height: $heightsize;
  width:$widthsize;
  overflow: hidden;

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;

    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
