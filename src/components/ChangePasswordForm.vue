<template>
    <form
      class="bg-white box-border p-10 rounded-lg flex flex-col gap-y-10 md:gap-y-14 w-full sm:w-[600px]"
      novalidate
      @submit.prevent="onSubmit"
    >
      
     
      <div class="grid md:grid-cols-2 gap-10 md:gap-6">
        <div  class="relative z-0 w-full mb-6 group">
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
        <div   class="relative z-0 w-full mb-6 group">
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
  } from "../hooks/validator/index.ts";
  const userDataTheSame = ref();
  const fetchDataError = reactive({
    exist: false,
    message: "",
  });
  const emit = defineEmits(["user-data-change"]);
  const model = useForm({
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
  });
  console.log("model", model);
  
  
  
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
      props
      .handleSubmit({
        name: model.login.value,
        email: model.email.value,
        customerName: model.name.value,
        customerSurName: model.lastname.value,
        customerFathersName: model.fathersname.value,
        phone: model.phone.value,
      })
      .then((data) => {
        emit("user-data-change", data);
        if (!props.profile) debugger;
        router.push({ name: "home" });
      })
      .catch((err) => {
        fetchDataError.exist = true;
        fetchDataError.message = err.message;
      });
  
    
    
  };
  </script>
  