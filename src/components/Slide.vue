<!-- Слот компонента Carousel.vue -->
<!-- Анимация Vue3 <transition name="slide"> корректно отображает анимацию перехода "Вперед" -->
  <!-- Если я листаю назад, то слайд переключается корректно, но используется анимация <transition name="slide"> -->
    <!-- поэтому кажется как будто листаешь вперед -->
    <!-- Задача: нужно сделать так, чтобы анимация <transition name="slide"> использовалась только при листании вперед -->
      <!-- При листании назад продумать другую анимацию, либо сделать так, чтобы при листании назад как-то -->
      <!--по другому присваивались классы. Короче я не знаю как именно это сделать  -->
      <!-- Открой компонент Carusel.vue  это мой самый первый вариант карусели. Там есть уже написанные анимации CSS  -->
      <!-- для листания Вперед и назад. Прочитай комментарий вверху файла Carusel.vue  -->
<template>
    <div class="slide">
      <transition name="slide">
        <!-- Сюда вставляется контент слота, расположенного между тегами <Slide></Slide> компонент Slide находится в HomeView.vue -->
        <slot></slot>
      </transition>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss">
  .slide-enter-active,
  .slide-leave-active {
    transition: translate 0.5s ease-in-out;
  }
  
  .slide-enter-from {
    transform: translate(0%, 0);
  }
  .slide-leave-to {
    transform: translate(-50%, 0);
  }
  
  .slide-enter-to {
    transform: translate(50%, 0);
  }
  .slide-leave-from {
    transform: translate( 80%, 0);
  }
  </style>
