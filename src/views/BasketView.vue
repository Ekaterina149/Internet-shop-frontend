<template>
  <section
    class="h-full w-full rounded-lg grow flex flex-col justify-start pt-10 items-start gap-x-4 gap-y-2 md:flex-row"
  >
    <BasketItem/>
    <!-- <ul
      v-if="cardsStore.basketArray.length"
      class="w-full flex flex-col items-center gap-y-3"
    >
      <li
        v-for="item in basketArrayWithQuantity"
        :key="basketArrayWithQuantity._id"
        class="flex flex-col justify-start rounded-xl px-2 pt-2 sm:px-10 sm:py-2 box-border bg-white max-w-[1000px] grow w-full"
      >
        <div class="flex flex-row gap-2 sm:gap-8 justify-between items-center">
          <img
            :src="item.pictureSmall"
            :alt="item.productName"
            class="w-20 h-20 object-cover inline-block shrink-0"
          />
          <div class="grow flex flex-col gap-y-2">
            <div
              class="flex flex-row items-center gap-x-2 text-xs min-[400px]:text-base"
            >
              <span class="grow">{{ ucFirst(item.productName) }}</span>

              <div class="grow flex flex-row justify-end">
                <BasketItemButton
                  itemCount="+"
                  @click="cardsStore.addBasketArray(item._id)"
                />
                <p class="shrink-0 mx-2">
                  {{ item.quantity + " " + "шт." }}
                </p>

                <BasketItemButton
                  itemCount="-"
                  @click="cardsStore.removeOneItemBasketArray(item._id)"
                />
              </div>
              <span class="grow text-right font-bold md:text-xl text-base"
                >{{ item.price * item.quantity }}₽</span
              >
            </div>
            <div
              class="flex flex-row items-center gap-x- text-xs min-[400px]:text-base"
            >
              <span class="grow-0">Артикул</span>
              <p class="grow text-right">
                {{ item.articleNumber }}
              </p>
            </div>

            <div
              class="flex flex-row items-center gap-x-2 text-xs min-[400px]:text-base"
            >
              <span class="grow-0">Размеры</span>
              <p class="grow text-right">
                {{ item.size }}
              </p>
            </div>
          </div>
        </div>
        <BasketRemoveItemButton
          text="Удалить"
          @click="cardsStore.removeBasketArray(item._id)"
        />
      </li>
    </ul> -->
    
    <form
      class="bg-white box-border p-4 border-spacing-2 rounded-xl flex flex-col items-start self-start"
    >
      <h5 class="p-4 font-bold text:base sm:text-xl">Доставка по адресу:</h5>
      <p class="pb-8">
        <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <span
                    :class="{ 'hidden': !model.index.isInvalid }"
                    class="absolute right-0 -bottom-20 mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <span class="font-medium"> Ой! </span>
                   <template v-if="model.index.errors.required">Почтовый индекс обязателен</template>
                   <template v-else-if="model.index.errors.numeric"> Почтовый индекс должен  состоять из цифр </template>
                   <template v-else-if="model.index.errors.minLength"> Минимальная длина 6 символов </template>
                   <template v-else-if="model.index.errors.maxLength"> Максимальная длина 6 символов </template>
                  </span
                  >
          <input
            type="text"
            name="index"
            id="index"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
            placeholder=" "
            required
            v-model="model.index.value"
          />
          <label
            for="floating_name"
            class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Индекс</label
          >
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <span
                    :class="{ 'hidden': !model.city.isInvalid }"
                    class="absolute right-0 -bottom-12 mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                  <span class="font-medium"> Ой! </span>
                   <template v-if="model.city.errors.required">Введите Ваш город или село/деревню</template>
                   <template v-else-if="model.city.errors.minLength"> Длина Вашего отчества должна быть более 5-ти символов, а у Вас {{model.lastname.value.length}}</template>
                   <template v-else-if="model.city.errors.maxLength"> Длина Вашего отчества должна быть менее 24-ти символов, а у Вас {{model.lastname.value.length}}</template>
                   <template v-else-if="model.city.errors.pattern"> Ваше  отчество должен  соответствовать  паттерну </template>
                  </span
                  >
          <input
            type="text"
            name="city"
            id="city"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
            placeholder=" "
            required
            v-model="model.city.value"
          />
          <label
            for="floating_fathersname"
            class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Город</label
          >
        </div>
        
      </div>
      <div class="relative z-0 w-full mb-6 group">
          <span
                    :class="{ 'hidden': !model.street.isInvalid }"
                    class="absolute right-0 -bottom-12 mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <span class="font-medium"> Ой! </span>
                   <template v-if="model.street.errors.required">Введите Ваш город или село/деревню</template>
                   <template v-else-if="model.street.errors.minLength"> Длина Вашей улицы должна быть более 1-го символа</template>
                   <template v-else-if="model.street.errors.maxLength"> Длина Вашей улицы должна быть менее 24-ти символов</template>
                   <template v-else-if="model.street.errors.pattern"> Название Вашей улицы должен  соответствовать  паттерну </template>
                  </span
                  >
          <input
            type="text"
            name="street"
            id="floating_street"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
            placeholder=" "
            required
            v-model="model.street.value"
          />
          <label
            for="floating_street"
            class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >улица,№дома, №квартиры</label
          >
        </div>
        <!-- <span class="pl-2">660003</span>г.Самара
        <span class="pl-2">ул. Максима Горького</span>
        <span class="pl-2">д.2</span><span class="pl-2">кв.56</span> -->
      </p>
      <BasketRemoveItemButton text="Оформить заказ" class="self-center" />
    </form>
  </section>

  <!-- <pre>{{basketArrayWithQuantity.map((product)=>product.pictureSmall)}}</pre> -->
</template>
<script setup>
import BasketItem from "../components/BasketItem.vue";
import {
    minLength,
    maxLength,
    required,
    useForm,
    space,
    equal,
    firstLetter,
    latin,
    numeric,
    pattern,
    
  } from "../hooks/validator/index.ts";
  const model = useForm({ 
  index: { 
    initialValue: "", 
    validators: { 
      required, 
      numeric, 
      minLength: minLength(6), 
      maxLength: maxLength(6),
    }, 
  },

  city: { 
    initialValue: "", 
    validators: { 
      required, 
      minLength: minLength(5), 
      maxLength: maxLength(24), 
      pattern: pattern(/^[^,:;*&?%#!]*$/),
      
    }, 
  }, 

  street: { 
    initialValue: "", 
    validators: { 
      required, 
      minLength: minLength(5), 
      maxLength: maxLength(24), 
      pattern: pattern(/^[^*&?%#!]*$/),
      
    }, 
  }, 
  fathersname: { 
    initialValue: "", 
    validators: { 
      required, 
      minLength: minLength(5), 
      maxLength: maxLength(24), 
      space,
      pattern: pattern(/^[^,:;*&?%#!]*$/),
      
    }, 
  }, 
  lastname: { 
    initialValue: "", 
    validators: { 
      required, 
      minLength: minLength(5), 
      maxLength: maxLength(24), 
      space,
      pattern: pattern(/^[^,:;*&?%#!]*$/),
      
    }, 
  }, 
});
</script>
