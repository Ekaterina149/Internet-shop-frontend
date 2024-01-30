<template>
  <UserForm
    :user="user.user"
    :profile="profile"
    message="Нельзя отправлять пустую форму"
    :handleSubmit="user.createUser"
    @user-data-change="
      (value) => {
        user.user = value;
       
      }
    "
  />
</template>
<script setup>
import { ref } from "vue";
import UserForm from "../components/UserForm.vue";
import { useUsersStore } from "../stores/usersStore.ts";
import router from "../router/index.ts";
const user = useUsersStore();
const profile = ref(false);
const props = defineProps({
  errorMessage: String,
  openError: Boolean,
})
// const  user = { user: {

//   name: "",
//   email: "",
//   customerName: "",
//   customerSurName: "",
//   customerFathersName: "",
//   phone: "",

// }};
</script>
