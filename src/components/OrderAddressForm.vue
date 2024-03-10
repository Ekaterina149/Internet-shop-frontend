<template>
<form
class="bg-white box-border p-4 border-spacing-2 rounded-xl flex flex-col items-start self-center  w-full max-w-[1000px] " novalidate @submit.prevent="onSubmit"
>
<h5 class="p-4 font-bold text:base sm:text-xl"> Сумма Вашего заказа {{ props.cardsStore.basketSumm }} рублей</h5>
<h5 class="p-4 font-bold text:base sm:text-xl">Доставка по адресу:</h5>
<p class="pb-8 flex flex-col gap-y-8 w-full">
  <div class="grid md:grid-cols-2 md:gap-6 ">
  <div class="relative z-0 w-full mb-6 group">
    <span
              :class="{ 'hidden': !model.index.isInvalid }"
              class="absolute right-0 -bottom-8 mt-2 text-xs text-red-600 dark:text-red-400"
            >
              <span class="font-medium"> Ой! </span>
             <template v-if="model.index.errors.required">Почтовый индекс обязателен</template>
             <template v-else-if="model.index.errors.numeric"> Введите цифры </template>
             <template v-else-if="model.index.errors.minLength"> Введите 6 символов </template>
             <template v-else-if="model.index.errors.maxLength"> Введите 6 символов </template>
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
              class="absolute right-0 -bottom-8 mt-2 text-xs text-red-600 dark:text-red-400"
            >
            <span class="font-medium"> Ой! </span>
             <template v-if="model.city.errors.required">Введите населеный пункт</template>
             <template v-else-if="model.city.errors.minLength"> Введите более 2-ух символов</template>
             <template v-else-if="model.city.errors.maxLength"> Введите менее 24-ти символов</template>
             <template v-else-if="model.city.errors.pattern"> Только не ^,:;*&?%#! </template>
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
              class="absolute right-0 -bottom-8 mt-2 text-xs text-red-600 dark:text-red-400"
            >
              <span class="font-medium"> Ой! </span>
             <template v-if="model.street.errors.required">Введите Вашу улицу</template>
             <template v-else-if="model.street.errors.maxLength"> Введите менее 50-ти символов</template>
             <template v-else-if="model.street.errors.pattern"> Только не ^*&?%#! </template>
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
      >улица</label
    >
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
  <div class="relative z-0 w-full mb-6 group">
    <span
              :class="{ 'hidden': !model.house.isInvalid }"
              class="absolute right-0 -bottom-8 mt-2 text-xs text-red-600 dark:text-red-400"
            >
              <span class="font-medium"> Ой! </span>
             <template v-if="model.house.errors.required">Номер дома обязателен</template>
            </span
            >
    <input
      type="text"
      name="house"
      id="index"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
      placeholder=" "
      required
      v-model="model.house.value"
    />
    <label
      for="floating_house"
      class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >№Дома</label
    >
  </div>
  <div class="relative z-0 w-full mb-6 group">
    <span
              :class="{ 'hidden': !model.flat.isInvalid }"
              class="absolute right-0 -bottom-8 mt-2 text-xs text-red-600 dark:text-red-400"
            >
            <span class="font-medium"> Ой! </span>
             <template v-if="model.flat.errors.required">Введите номер Вашей квартиры</template>
             <template v-else-if="model.flat.errors.numeric">Введите число - Ваш номер квартиры </template>
            </span
            >
    <input
      type="text"
      name="flat"
      id="flat"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
      placeholder=" "
      required
      v-model="model.flat.value"
    />
    <label
      for="floating_flat"
      class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >№Квартиры</label
    >
  </div>
</div>
</p>
<BasketRemoveItemButton text="Оформить заказ" class="self-center" />
<p>{{ props.usersStore.orderArray.length }}</p>
</form>
</template>
<script setup>
import BasketRemoveItemButton from "./BasketRemoveItemButton.vue";
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

} from "vue-valid";
const emit = defineEmits(["newOrder", "error"]);
const props = defineProps({
  cardsStore: Object,
  usersStore: Object,
  

});
const order=ref(null);
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
minLength: minLength(2), 
maxLength: maxLength(24), 
pattern: pattern(/^[^,:;*&?%#!]*$/),

}, 
}, 

street: { 
initialValue: "", 
validators: { 
required, 
maxLength: maxLength(50), 
pattern: pattern(/^[^*&?%#!]*$/),

}, 
}, 
house: { 
initialValue: "", 
validators: { 
required, 



}, 
}, 
flat: { 
initialValue: "", 
validators: { 
required, 
numeric,

}, 
}, 
});
let newOrder=ref(null);
const keys = Object.keys(model);
 const notNeededKeys = ['checkValid', 'reset', 'isChanged'];
 const newkeys = keys.filter(item => !notNeededKeys.includes(item));
let isValidForm = true;
const   onSubmit = async ()=> {


  newkeys.forEach(key => {
  if(model[key].value === "")
  {
    isValidForm = false;
    return;

  }
 });

 
  if(isValidForm) {
    await emit('newOrder', {postIndex:model.index.value, city:model.city.value, street:model.street.value, house:model.house.value, flat:model.flat.value, basket:props.usersStore.user.basket      });
    
      
        model.reset();

  }
   else {
    emit ('error', true, "Пожалуйста, заполните форму корректно")
    isValidForm = true;
   }
    
 
  }

 console.log("basketSumm", props.basketSumm)
 
 console.log("fields", Object.keys(model))
</script>
