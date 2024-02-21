<template>
  <section
    class="mt-0 flex flex-col items-center w-full rounded-md"
  >
    <!-- <h3
      class="text-red-900 text-xl w-fit sm:text-3xl md:text-4xl pb-10 font-bold text-center"
    >
      Разнообразие изделий из&nbsp;эко-лозы
    </h3> -->
    <Carousel
      :autoplay="true"
      :repeat="true"
      :interval="5000"
      :images="images"
      class="relative overflow-hidden bg-transparent grid grid-cols-[320px] grid-rows-[250px] sm:grid-cols-[500px] sm:grid-rows-[460px]
       md:grid-cols-[700px] md:grid-rows-[615px] min-[900px]:grid-cols-[850px] min-[900px]:grid-rows-[740px] lg:grid-cols-[1000px] lg:grid-rows-[875px] auto-cols-auto justify-items-center items-center
        rounded-md sm:rounded-xl "
    >
      <template v-slot:routerLink>
        <RouterLink
          to="shop"
          class=" h-full w-full flex items-center justify-center absolute z-30
           text-white text-3xl rounded md:bg-slate-700 bg-slate-700  md:bg-opacity-0 bg-opacity-0
            md:hover:text-3xl   hover:bg-slate-700 hover:bg-opacity-60 transition-bg-opacity ease-in duration-300 hover:ease-out  "
        >
          В магазин &rarr;
        </RouterLink>
      </template>
      <template v-slot:slide="{currentIndex, direction }">
        <Slide :direction="direction">
          <template v-slot:image>
            <li
        v-for="(item, index) in images"
        :key="index + 1"
        class="list-item"
        v-show="index === currentIndex"
      >
        <img :alt="item.alt" :src="item.src" />
      </li>
          </template>
        </Slide>
      </template>
    </Carousel>
    <!-- <Car
      :autoplay="false"
      :repeat="true"
      :interval="5000"
      :images="images"
      class="relative overflow-hidden bg-transparent grid grid-cols-[300px] grid-rows-[250px] auto-cols-auto justify-items-center items-center"
    ></Car> -->
  </section>
  <section
    class="mt-14 bg-slate-100 bg-opacity-50 rounded-md box-border px-2 flex flex-col items-center"
  >
    <h3
      class="text-red-900 text-xl w-fit sm:text-3xl md:text-4xl pb-10 font-bold text-center pt-10 font-mono "
    >
      Что такое эко-лоза?
    </h3>
  
    <article class="flex flex-row gap-1 sm:gap-2 md:gap-14 flex-wrap justify-center">
      <div class="max-w-[fit-content]  lg:max-w-[700px] sm:max-w-[280px] md:max-w-[300px] min-[900px]:max-w-[380px] xl:max-w-[1000px] 2xl:max-w-[450px] ">
        <img
      src="../assets/loza-2.jpg"
      class="w-[160px] h-[200px] sm:w-[250px] sm:h-[312px] object-cover object-bottom  mr-6 col-span-1 row-span-1 float-left"
    />
    <p class="text-base lg:text-lg text-black font-mono gap-1  col-start-2 col-end-2 row-start-1 row-end-1">
      Все мы знаем, какие прекрасные предметы интерьера, мебель, корзины можно
      сплести из обычной лозы. Однако натуральной лозе есть интересная и гораздо
      более бюджетная альтернатива — лоза бумажная или, говоря проще, бумажные
      трубочки. Несмотря на то, что исходный материал не отличается особой
      прочностью, благодаря обработке трубочки получаются гибкими и на удивление
      крепкими. Из них можно точно так же плести корзины, предметы декора, а
      также шляпы, сумки. Некоторые рукодельницы устраивают своим произведениям
      нешуточные испытания — например, держат корзины из бумажной лозы на улице.
      Если вы всё сделали правильно, прочность изделий вас не разочарует!
    </p>
    <p class="text-base lg:text-lg text-black font-mono gap-1  col-start-1  col-end-2 row-start-2 row-end-2">
      Все мы знаем, какие прекрасные предметы интерьера, мебель, корзины можно
      сплести из обычной лозы. Однако натуральной лозе есть интересная и гораздо
      более бюджетная альтернатива — лоза бумажная или, говоря проще, бумажные
      трубочки. Несмотря на то, что исходный материал не отличается особой
      прочностью, благодаря обработке трубочки получаются гибкими и на удивление
      крепкими. Из них можно точно так же плести корзины, предметы декора, а
      также шляпы, сумки. Некоторые рукодельницы устраивают своим произведениям
      нешуточные испытания — например, держат корзины из бумажной лозы на улице.
      Если вы всё сделали правильно, прочность изделий вас не разочарует!
    </p>
      </div>
   
    <!-- <p class="text-base lg:text-lg text-black font-mono max-w-[fit-content] sm:max-w-[280px]  md:max-w-[300px] min-[900px]:max-w-[380px] lg:max-w-[450px] xl:max-w-[550px] 2xl:max-w-[700px] ">
      Все мы знаем, какие прекрасные предметы интерьера, мебель, корзины можно
      сплести из обычной лозы. Однако натуральной лозе есть интересная и гораздо
      более бюджетная альтернатива — лоза бумажная или, говоря проще, бумажные
      трубочки. Несмотря на то, что исходный материал не отличается особой
      прочностью, благодаря обработке трубочки получаются гибкими и на удивление
      крепкими. Из них можно точно так же плести корзины, предметы декора, а
      также шляпы, сумки. Некоторые рукодельницы устраивают своим произведениям
      нешуточные испытания — например, держат корзины из бумажной лозы на улице.
      Если вы всё сделали правильно, прочность изделий вас не разочарует!
    </p> -->
    <div class="max-w-[fit-content]  lg:max-w-[700px] sm:max-w-[280px] md:max-w-[300px] min-[900px]:max-w-[380px] xl:max-w-[1000px] 2xl:max-w-[450px] ">
     
    <p class="text-base lg:text-lg text-black font-mono gap-1  col-start-2 col-end-2 row-start-1 row-end-1">
      Все мы знаем, какие прекрасные предметы интерьера, мебель, корзины можно
      сплести из обычной лозы. Однако натуральной лозе есть интересная и гораздо
      более бюджетная альтернатива — лоза бумажная или, говоря проще, бумажные
      трубочки. Несмотря на то, что исходный материал не отличается особой
      прочностью, благодаря обработке трубочки получаются гибкими и на удивление
      крепкими. Из них можно точно так же плести корзины, предметы декора, а
      также шляпы, сумки. Некоторые рукодельницы устраивают своим произведениям
      нешуточные испытания — например, держат корзины из бумажной лозы на улице.
      Если вы всё сделали правильно, прочность изделий вас не разочарует!
    </p>
    <img
      src="../assets/loza-2.jpg"
      class="w-[160px] h-[200px] sm:w-[250px] sm:h-[312px] object-cover object-bottom  ml-6 col-span-1 row-span-1 float-right"
    />
    <p class="text-base lg:text-lg text-black font-mono gap-1  col-start-1  col-end-2 row-start-2 row-end-2">
      Все мы знаем, какие прекрасные предметы интерьера, мебель, корзины можно
      сплести из обычной лозы. Однако натуральной лозе есть интересная и гораздо
      более бюджетная альтернатива — лоза бумажная или, говоря проще, бумажные
      трубочки. Несмотря на то, что исходный материал не отличается особой
      прочностью, благодаря обработке трубочки получаются гибкими и на удивление
      крепкими. Из них можно точно так же плести корзины, предметы декора, а
      также шляпы, сумки. Некоторые рукодельницы устраивают своим произведениям
      нешуточные испытания — например, держат корзины из бумажной лозы на улице.
      Если вы всё сделали правильно, прочность изделий вас не разочарует!
    </p>
      </div>
    </article>
   
    
 
  </section>
  <!-- <UndefinedWelcome /> -->
</template>

<script setup>
import UndefinedWelcome from "@/components/UndefinedWelcome.vue";
// import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";
import Carousel from "@/components/Carousel.vue"
import picPumkin from "../assets/pumkins.jpg";
import picBasket from "../assets/basket-5.jpg";
import picBag from "../assets/bag-3.jpg";
import picBed from "../assets/dolls-bed.jpg";
import picBas from "../assets/basket-1.jpg";
// import Slide from "./Slide.vue";
// массив картинок, которые будем отображать
const carouselSlides = ref([picPumkin, picBasket, picBag, picBas]);
const images = ref([
  {
    src: picPumkin,
    alt: "Тыква",
  },
  {
    src: picBasket,
    alt: "корзина цветов",
  },
  {
    src: picBag,
    alt: "Сумка",
  },
  {
    src: picBas,
    alt: "Корзина для пикника",
  },
]);
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
  width: $widthsize;
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
