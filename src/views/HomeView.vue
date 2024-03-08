<template>
  <section class="mt-0 flex flex-col items-center w-full rounded-md pt-6">
  
    <Carousel
      :autoplay="true"
      :repeat="true"
      :interval="2000"
      :images="images"
      class="relative overflow-hidden bg-transparent grid grid-cols-[320px] grid-rows-[250px] sm:grid-cols-[500px] sm:grid-rows-[390px] md:grid-cols-[700px] md:grid-rows-[547px] min-[900px]:grid-cols-[850px] min-[900px]:grid-rows-[664px] lg:grid-cols-[1000px] lg:grid-rows-[782px] auto-cols-auto justify-items-center items-center rounded-md sm:rounded-xl"
    >
      <template v-slot:routerLink>
        <RouterLink
          to="shop"
          class="h-full w-full flex items-center justify-center absolute z-30 text-white text-3xl rounded md:bg-slate-700 bg-slate-700 md:bg-opacity-0 bg-opacity-0 md:hover:text-3xl hover:bg-slate-700 hover:bg-opacity-60 transition-bg-opacity ease-in duration-300 hover:ease-out"
        >
          В магазин &rarr;
        </RouterLink>
      </template>
      <template v-slot:slide="{ currentIndex, direction }">
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

  </section>
  <section
    class="mt-14 bg-slate-100 bg-opacity-50 rounded-md box-border px-2 flex flex-col items-center"
  >
    <h3
      class="text-red-900 text-xl w-fit sm:text-3xl md:text-4xl pb-10 font-bold text-center pt-10 font-mono"
    >
      Что такое эко-лоза?
    </h3>

    <article class="grid grid-cols-1 md:grid-cols-2  gap-2 lg:gap-4 ">
      <div
        class="max-w-[fit-content] "
      >
        <img
          src="../assets/loza-2.jpg"
          class="w-[160px] h-[200px] sm:w-[250px] sm:h-[312px] object-cover object-bottom mr-6 col-span-1 row-span-1 float-left"
        />
        <p
          class="text-base lg:text-lg text-black font-mono gap-1 col-start-2 col-end-2 row-start-1 row-end-1"
        >
          Все вы знаем, а многие даже видели или имеют у себя дома корзинки, которые сплетены из
          лозы - натуральной ивовой лозы, раньше многие этим занимались и такие изделия были
          популярны. Прутики, которые с помощью незатейливого узора сплетаются в интересные вещи,
          теперь большая редкость. Да и сложно очень искать и заготавливать материал для плетения.
          Не менее красивые изделия сейчас можно сделать из подручного доступного материала -
          бумаги, а выглядеть они будут намного аккуратнее, а служить будут нисколько не меньше, а
          может даже больше.
        </p>
        <p
          class="text-base lg:text-lg text-black font-mono gap-1 col-start-1 col-end-2 row-start-2 row-end-2"
        >
          Такие изделия не будут бояться влаги, не распадутся и не рассохнутся. А причиной тому -
          процесс обработки бумаги, который из обычной тонкой рвущейся бумаги создает настоящую
          прочную лозу, изделия из которой завораживают. Так как же создаётся эта лоза из бумаги. 1
          этап - скручивание из бумаги трубочек. Для этого бумагу формата А4 нарезают на 2-3 полосы
          и с помощью спицы и клея скручивают ее в длинные плотные рулончики по спирали. Бумага
          приобретает вид лозы, но остается такой же ломкой, хрупкой и неэластичной. Чтобы лоза в
          руках мастера стала податливой и легко ложилась в рисунке изделия, ее нужно обработать и
          увлажнить.
        </p>
      </div>

     
      <div
        class="max-w-[fit-content]"
      >
        <p
          class="text-base lg:text-lg text-black font-mono gap-1 col-start-2 col-end-2 row-start-1 row-end-1"
        >
          2 этап - покраска трубочек морилкой или эмалью с колерами. Тут все зависит от полета
          фантазии у каждого мастера. От нежных кремовых до ярких насыщенных цветов. 3 этап -
          обработка строительной пропиткой на водной основе или акриловым лаком и увлажнение. Это
          один из самых важных этапов. От этого зависит дальнейшее качество плетеных изделий. После
          обработки трубочки становятся эластичными и прочными и ими приятно и легко работать.
        </p>
      
        <img
          src="../assets/ZXZmkh6yzvo.jpg "
          class="w-[160px] h-[200px] sm:w-[250px] sm:h-[312px] object-cover object-bottom ml-6 col-span-1 row-span-1 float-right"
        />
        <p
          class="text-base lg:text-lg text-black font-mono gap-1 col-start-1 col-end-2 row-start-2 row-end-2"
        >
        Они напоминают на ощупь кожаный ремешок, который легко скручивается и даже завязывается в
        узелки. Для работы мастера используют все строительные материалы, которые применяются для
        обработки дерева: акриловые краски, лаки и все материалы на водной основе. А это значит, что
        они практически безвредные и в итоге изделия будут приносить только радость.
      </p>
      </div>
    </article>
  </section>
</template>

<script setup>
import UndefinedWelcome from "@/components/UndefinedWelcome.vue";
import Slide from "@/components/Slide.vue";
import Carousel from "@/components/Carousel.vue";
import picPumkin from "../assets/pumkins.jpg";
import picBasket from "../assets/basket-5.jpg";
import picBag from "../assets/bag-3.jpg";
import picBed from "../assets/dolls-bed.jpg";
import picBas from "../assets/basket-1.jpg";
import picBasketHeart from "../assets/20240308_190907.jpg"

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
  {
    src: picBasketHeart,
    alt: "Корзина с сердечками",
  },
]);
// длина массива, возможно можно было не делать эту переменную
// а передвать в Carousel пропсой сразу carouselSlides.length
// const length = carouselSlides.value.length;
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
