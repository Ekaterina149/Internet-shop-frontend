<template>
  <UserForm :user="user.user" :profile="profile" message="Поменяйте хотя бы одно поле данных"  :handleSubmit="user.updateUserInfo"
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

const user = useUsersStore();
const profile = ref(true);
</script>
