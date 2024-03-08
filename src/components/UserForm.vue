<template>
  <form
    class="bg-white box-border p-10 rounded-lg flex flex-col gap-y-10 md:gap-y-14 w-full sm:w-[600px]"
    novalidate
    @submit.prevent="onSubmit"
  >
    <div class="relative z-0 w-full mb-6 group">
      <span
        :class="{ hidden: !model.login.isInvalid }"
        class="absolute center-0 -bottom-10 md:center-0 md:-bottom-14 mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span class="font-medium"> Ой! </span>
        <template v-if="model.login.errors.required">Логин обязателен</template>
        <template v-else-if="model.login.errors.minLength">
          Длина Вашего логина должна быть более 5-ти символов, а у Вас
          {{ model.login.value.length }}</template
        >
        <template v-else-if="model.login.errors.maxLength">
          Длина Вашего логина должна быть менее 24-ти символов, а у Вас
          {{ model.login.value.length }}</template
        >
        <template v-else-if="model.login.errors.space">
          Ваш логин не должен содержать пробелы
        </template>
        <template v-else-if="model.login.errors.pattern">
          Ваш логин должен соответствовать паттерну
        </template>
      </span>

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
        :class="{ hidden: !model.email.isInvalid }"
        class="absolute center-0 -bottom-10 md:center-0 md:-bottom-14 mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span class="font-medium"> Ой! </span>
        <template v-if="model.email.errors.required">email обязателен</template>
        <template v-else-if="model.email.errors.email"> Что-то не так с email</template>
        <template v-else-if="model.email.errors.conflict"> email занят</template>
      </span>
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
            class="inline-block text-stone-700 pr-2 peer-focus:text-red-900" /></span
        >Email</label
      >
    </div>
    <div class="grid md:grid-cols-2 gap-10 md:gap-6">
      <div v-if="!props.profile" class="relative z-0 w-full mb-6 group">
        <span
          :class="[{ hidden: !model.password.isInvalid }, 'text-black']"
          class="absolute center-0 -bottom-10 md:center-0 md:-bottom-14 mt-2 text-xs text-red-600 dark:text-red-400"
          ><span class="font-medium">Ой! </span>
          <template v-if="model.password.errors.required">пароль обязателен</template>
          <template v-else-if="model.password.errors.minLength">
            Пароль должен быть не менее 4 символов, а у Вас сейчас
            {{ model.password.value.length }}</template
          >
        </span>
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
      <div v-if="!props.profile" class="relative z-0 w-full mb-6 group">
        <span
          :class="[{ hidden: !model.confirmPassword.isInvalid }, 'text-black']"
          class="absolute center-0 -bottom-10 md:center-0 md:-bottom-14 mt-2 text-xs text-red-600 dark:text-red-400"
          ><span class="font-medium">Ой! </span>
          <template v-if="model.confirmPassword.errors.required">пароль обязателен</template>
          <template v-else-if="model.confirmPassword.errors.confirm">
            Пароль не совпадает {{ model.confirmPassword.value }}</template
          >
        </span>
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

    <div class="grid md:grid-cols-3 gap-10 md:gap-6">
      <div class="relative z-0 w-full mb-6 group">
        <span
          :class="{ hidden: !model.name.isInvalid }"
          class="absolute center-0 -bottom-10 md:center-0 md:-bottom-14 mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium"> Ой! </span>
          <template v-if="model.name.errors.required">Имя обязателен</template>
          <template v-else-if="model.name.errors.minLength">
            Длина Вашего имени должна быть более 5-ти символов</template
          >
          <template v-else-if="model.name.errors.maxLength">
            Длина Вашего имени должна быть менее 24-ти символов, а у Вас
            {{ model.name.value.length }}</template
          >
          <template v-else-if="model.name.errors.space">
            Ваше имя не должно содержать пробелы
          </template>
          <template v-else-if="model.name.errors.pattern">
            Ваше имя должен соответствовать паттерну
          </template>
        </span>
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
          :class="{ hidden: !model.fathersname.isInvalid }"
          class="absolute center-0 -bottom-10 md:center-0 md:-bottom-14 mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium"> Ой! </span>
          <template v-if="model.fathersname.errors.required">Отчество обязательно</template>
          <template v-else-if="model.fathersname.errors.minLength">
            Длина Вашего отчества должна быть более 5-ти символов,
          </template>
          <template v-else-if="model.fathersname.errors.maxLength">
            Длина Вашего отчества должна быть менее 24-ти символов</template
          >
          <template v-else-if="model.fathersname.errors.space">
            Ваше отчество не должен содержать пробелы
          </template>
          <template v-else-if="model.fathersname.errors.pattern">
            Ваше отчество должен соответствовать паттерну
          </template>
        </span>
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
          :class="{ hidden: !model.lastname.isInvalid }"
          class="absolute center-0 -bottom-10 md:center-0 md:-bottom-14 mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium"> Ой! </span>
          <template v-if="model.lastname.errors.required">Фамилия обязательно</template>
          <template v-else-if="model.lastname.errors.minLength">
            Длина Вашей фамилии должна быть более 5-ти символов</template
          >
          <template v-else-if="model.lastname.errors.maxLength">
            Длина Вашей фамилии должна быть менее 24-ти символов</template
          >
          <template v-else-if="model.lastname.errors.space">
            Ваша фамилия не должен содержать пробелы
          </template>
          <template v-else-if="model.lastname.errors.pattern">
            Ваша фамилия должен соответствовать паттерну
          </template>
        </span>
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
        :class="[{ hidden: !model.phone.isInvalid }, 'text-black']"
        class="absolute center-0 -bottom-14 md:center-0 sm:-bottom-4 mt-2 text-xs text-red-600 dark:text-red-400"
        ><span class="font-medium">Ой! </span>
        <template v-if="model.phone.errors.required">Номер телефона обязателен</template>
        <!-- <template v-else-if="model.phone.errors.numeric"
          >Номер телефона должен включать только цифры, например 89607693322</template
        > -->
      </span>
      <input
        type="text"
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
            class="inline-block text-stone-700 pr-2 focus:text-red-900" /></span
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
  <ErrorPopup
    :open="userDataTheSame || fetchDataError.exist"
    :message="fetchDataError.exist ? fetchDataError.message : props.message"
    @onSub="onClose"
  />
</template>
<script setup>
import { ref, watch } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCellphoneBasic } from "@mdi/js";
//   import { useUsersStore } from "../stores/usersStore.ts";
import { mdiEmailOutline } from "@mdi/js";
import ErrorPopup from "../components/ErrorPopup.vue";
import router from "../router/index.ts";

const props = defineProps({
  user: Object,
  profile: Boolean,
  message: String,
  handleSubmit: Function,
});
const currentUserEqualField = computed(() => {
  const currentUser = props.user;
  return {
    login: currentUser.name,
    email: currentUser.email,
    name: currentUser.customerName,
    fathersname: currentUser.customerFathersName,
    lastname: currentUser.customerSurName,
    phone: currentUser.phone,
  };
});

console.log("currentUserEqualField.value", currentUserEqualField.value);

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
} from "vue-valid";
const userDataTheSame = ref();
const fetchDataError = reactive({
  exist: false,
  message: "",
});
const emit = defineEmits(["user-data-change"]);
const model = useForm({
  email: {
    initialValue: props.user.email,
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
    initialValue: props.user.phone,
    validators: {
      required,
    },
  },
  login: {
    initialValue: props.user.name,
    validators: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(24),
      space,
    },
  },
  name: {
    initialValue: props.user.customerName,
    validators: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(24),
      space,
      pattern: pattern(/^[^,:;*&?%#!]*$/),
    },
  },
  fathersname: {
    initialValue: props.user.customerFathersName,
    validators: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(24),
      space,
      pattern: pattern(/^[^,:;*&?%#!]*$/),
    },
  },
  lastname: {
    initialValue: props.user.customerSurName,
    validators: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(24),
      space,
      pattern: pattern(/^[^,:;*&?%#!]*$/),
    },
  },
});
console.log("model", model);

const compareFields = () => {
  const keys = Object.keys(currentUserEqualField.value);
  console.log("keys", keys);
  // keys.push("password");
  let userDataTheSameValue = true;
  keys.forEach((key) => {
    if (currentUserEqualField.value[key] !== model[key].value) {
      userDataTheSameValue = false;

      return;
    }
  });
  userDataTheSame.value = userDataTheSameValue;
  console.log("userDataTheSame.value", userDataTheSame.value);
};

watch(props.user, (user) => {
  console.log("watch", user);
  const keys = Object.keys(currentUserEqualField.value);
  // currentUserEqualField.value.login = user.name;
  // currentUserEqualField.value.email = user.email;
  // currentUserEqualField.value.name = user.customerName;
  // currentUserEqualField.value.fathersname = user.customerFathersName;
  // currentUserEqualField.value.lastname = user.customerSurName;
  // currentUserEqualField.value.phone = user.phone;

  keys.forEach((key) => {
    model[key].value = currentUserEqualField.value[key].toString();
  });
});
const onClose = () => {
  userDataTheSame.value = false;
  fetchDataError.exist = false;
  fetchDataError.message = "";
};

const onSubmit = () => {
  model.checkValid();
  compareFields();
  if (!userDataTheSame.value) {
    props
      .handleSubmit({
        name: model.login.value,
        email: model.email.value,
        customerName: model.name.value,
        customerSurName: model.lastname.value,
        customerFathersName: model.fathersname.value,
        phone: model.phone.value,
        password: model.password.value && model.password.value,
      })
      .then((data) => {
        emit("user-data-change", data);
        if (!props.profile) router.push({ name: "home" });
      })
      .catch((err) => {
        fetchDataError.exist = true;
        fetchDataError.message = err.message;
      });
  }
};
</script>

{ name, email, customerName, customerSurName, customerFathersName, phone, password }
