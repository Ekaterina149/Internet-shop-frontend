<template>
    <form class="bg-white box-border p-10 rounded-lg flex flex-col gap-y-6" novalidate>
      <div class="relative z-0 w-full mb-6 group">
        <span
                    :class="{ 'hidden': !model.login.isInvalid }"
                    class="absolute right-0 top-0 mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <span class="font-medium"> Ой! </span>
                   <template v-if="model.login.errors.required">Логин обязателен</template>
                   <template v-else-if="model.login.errors.minLength"> Длина Вашего логина должна быть более 5-ти символов, а у Вас {{model.login.value.length}}</template>
                   <template v-else-if="model.login.errors.maxLength"> Длина Вашего логина должна быть менее 24-ти символов, а у Вас {{model.login.value.length}}</template>
                   <template v-else-if="model.login.errors.space"> Ваш  логин не должен  содержать пробелы </template>
                   <template v-else-if="model.login.errors.pattern"> Ваш  логин должен  соответствовать  паттерну </template>
                  </span
                  >
        
        <input
          type="text"
          name="login"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
          placeholder=" "
          required
          v-model="model.login.value"
        />
        <label
          for="floating_login"
          class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Логин</label
        >
      </div>
      <div class="relative z-0 w-full mb-6 group">
          <span
                    :class="{ 'hidden': !model.email.isInvalid }"
                    class="absolute right-0 top-0 mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <span class="font-medium"> Ой! </span>
                   <template v-if="model.email.errors.required">email обязателен</template>
                   <template v-else-if="model.email.errors.email"> Что-то не так с email</template>
                   <template v-else-if="model.email.errors.conflict"> email занят</template>
                  </span
                  >
        <input
          type="email"
          name="email"
          id="email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
          placeholder=" "
          required
          v-model="model.email.value"
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          ><span
              ><SvgIcon
                type="mdi"
                h="h-full"
                w="w-full"
                size="30"
                :path="mdiEmailOutline"
                class="inline-block text-stone-700 pr-2  peer-focus:text-red-900" /></span
            >Email</label
        >
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
        <span
                    :class="[{ 'hidden': !model.password.isInvalid }, 'text-black']"
                    class="absolute  right-0 top-0 mt-2 text-xs text-red-600 dark:text-red-400"
                    ><span class="font-medium">Ой!
  
                    </span> 
                    <template v-if="model.password.errors.required">пароль обязателен</template>
                   <template v-else-if="model.password.errors.minLength"> Пароль должен быть не менее 4 символов, а у Вас сейчас {{ model.password.value.length }}</template>
  
                    </span
                  >
        <input
          type="password"
          name="password"
          id="floating_ confirmPassword"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
          placeholder=" "
          required
          v-model="model.password.value"
        />
        <label
          for="floating_confirmPassword"
          class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Пароль</label
        >
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <span
                    :class="[{ 'hidden': !model.confirmPassword.isInvalid }, 'text-black']"
                    class="absolute  right-0 top-0 mt-2 text-xs text-red-600 dark:text-red-400"
                    ><span class="font-medium">Ой!
  
                    </span> 
                    <template v-if="model.confirmPassword.errors.required">пароль обязателен</template>
                   <template v-else-if="model.confirmPassword.errors.confirm"> Пароль не совпадает {{ model.confirmPassword.value }}</template>
  
                    </span
                  >
        <input
          type="password"
          name="confirmPassword"
          id="floating_ confirmPassword"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
          placeholder=" "
          required
          v-model="model.confirmPassword.value"
        />
        <label
          for="floating_confirmPassword"
          class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Подтверждение пароля</label
        >
      </div>
      </div>
     
      <div class="grid md:grid-cols-3 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <span
                    :class="{ 'hidden': !model.name.isInvalid }"
                    class="absolute right-0 -bottom-12 mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <span class="font-medium"> Ой! </span>
                   <template v-if="model.name.errors.required">Логин обязателен</template>
                   <template v-else-if="model.name.errors.minLength"> Длина Вашего логина должна быть более 5-ти символов, а у Вас {{model.name.value.length}}</template>
                   <template v-else-if="model.name.errors.maxLength"> Длина Вашего логина должна быть менее 24-ти символов, а у Вас {{model.name.value.length}}</template>
                   <template v-else-if="model.name.errors.space"> Ваш  логин не должен  содержать пробелы </template>
                   <template v-else-if="model.name.errors.pattern"> Ваш  логин должен  соответствовать  паттерну </template>
                  </span
                  >
          <input
            type="text"
            name="name"
            id="name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
            placeholder=" "
            required
            v-model="model.name.value"
          />
          <label
            for="floating_name"
            class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Имя</label
          >
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <span
                    :class="{ 'hidden': !model.fathersname.isInvalid }"
                    class="absolute right-0 -bottom-12 mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <span class="font-medium"> Ой! </span>
                   <template v-if="model.fathersname.errors.required">Отчество обязательно</template>
                   <template v-else-if="model.fathersname.errors.minLength"> Длина Вашего отчества должна быть более 5-ти символов, а у Вас {{model.fathersname.value.length}}</template>
                   <template v-else-if="model.fathersname.errors.maxLength"> Длина Вашего отчества должна быть менее 24-ти символов, а у Вас {{model.fathersname.value.length}}</template>
                   <template v-else-if="model.fathersname.errors.space"> Ваше  отчество не должен  содержать пробелы </template>
                   <template v-else-if="model.fathersname.errors.pattern"> Ваше  отчество должен  соответствовать  паттерну </template>
                  </span
                  >
          <input
            type="text"
            name="fathersname"
            id="fathersname"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
            placeholder=" "
            required
            v-model="model.fathersname.value"
          />
          <label
            for="floating_fathersname"
            class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Отчество</label
          >
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <span
                    :class="{ 'hidden': !model.lastname.isInvalid }"
                    class="absolute right-0 -bottom-12 mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <span class="font-medium"> Ой! </span>
                   <template v-if="model.lastname.errors.required">Отчество обязательно</template>
                   <template v-else-if="model.lastname.errors.minLength"> Длина Вашего отчества должна быть более 5-ти символов, а у Вас {{model.lastname.value.length}}</template>
                   <template v-else-if="model.lastname.errors.maxLength"> Длина Вашего отчества должна быть менее 24-ти символов, а у Вас {{model.lastname.value.length}}</template>
                   <template v-else-if="model.lastname.errors.space"> Ваше  отчество не должен  содержать пробелы </template>
                   <template v-else-if="model.lastname.errors.pattern"> Ваше  отчество должен  соответствовать  паттерну </template>
                  </span
                  >
          <input
            type="text"
            name="lastname"
            id="floating_lastname"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
            placeholder=" "
            required
            v-model="model.lastname.value"
          />
          <label
            for="floating_lastname"
            class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Фамилия</label
          >
        </div>
      </div>
      
        <div class="relative z-0 w-full mb-6 group">
          <span
                    :class="[{ 'hidden': !model.phone.isInvalid }, 'text-black']"
                    class="absolute  right-0 top-0 mt-2 text-xs text-red-600 dark:text-red-400"
                    ><span class="font-medium">Ой!
  
                    </span> 
                    <template v-if="model.phone.errors.required">Номер телефона обязателен</template>
                   <template v-else-if="model.phone.errors.numeric">Номер телефона должен включать только цифры, например 89607693322</template>
  
                    </span
                  >
          <input
            type="tel"
            name="phone"
            id="phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-900 peer"
            placeholder=" "
            required
            v-model="model.phone.value"
          />
          <label
            for="floating_phone"
            class="peer-focus:font-medium absolute text-sm text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            ><span
              ><SvgIcon
                type="mdi"
                h="h-full"
                w="w-full"
                size="30"
                :path="mdiCellphoneBasic"
                class="inline-block text-stone-700 pr-2  focus:text-red-900" /></span
            >Телефон</label
          >
        </div>
       
      
  
      <button
      type="submit"
      class="self-center flex items-center px-2 py-1 md:text-lg text-sm font-medium text-center text-red-900 border-red-900 border-2 rounded-lg hover:bg-red-900 focus:ring-4 hover:text-white"
    >
      Сохранить
    </button>
    </form>
  </template>
  <script setup>
  import SvgIcon from "@jamescoyle/vue-icon";
  import { mdiCellphoneBasic } from "@mdi/js";
  import { useUsersStore } from "../stores/usersStore.ts";
  import { mdiEmailOutline } from "@mdi/js";
  import {
    email,
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
  const user = useUsersStore();
  const model = useForm({ 
  
    email: { 
      initialValue: user.user.email, 
      validators: { required, email }, 
    }, 
    password: {
      initialValue: "",
      validators: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(32),
        space,
      },
    },
    confirmPassword: { 
      initialValue: "", 
      validators: { 
        required, 
        confirm: equal("password"), 
      }, 
    },
    phone: { 
      initialValue: user.user.phone, 
      validators: { 
        required, 
        numeric, 
      }, 
    },
    login: { 
      initialValue: user.user.name, 
      validators: { 
        required, 
        minLength: minLength(5), 
        maxLength: maxLength(24), 
        space,
      }, 
    }, 
    name: { 
      initialValue: user.user.customerName, 
      validators: { 
        required, 
        minLength: minLength(5), 
        maxLength: maxLength(24), 
        space,
        pattern: pattern(/^[^,:;*&?%#!]*$/),
        
      }, 
    }, 
    fathersname: { 
      initialValue: user.user.customerFathersName, 
      validators: { 
        required, 
        minLength: minLength(5), 
        maxLength: maxLength(24), 
        space,
        pattern: pattern(/^[^,:;*&?%#!]*$/),
        
      }, 
    }, 
    lastname: { 
      initialValue: user.user.customerSurName, 
      validators: { 
        required, 
        minLength: minLength(5), 
        maxLength: maxLength(24), 
        space,
        pattern: pattern(/^[^,:;*&?%#!]*$/),
        
      }, 
    }, 
  });
  
  console.log('orders', user.user.orders)
  </script>
  