<template>
    <ChangePasswordForm :user="user.user" :profile="profile"   :handleSubmit="user.updateUserInfo"
   
         />
  </template>
  <script setup>
  import { ref } from "vue";
  import ChangePasswordForm from "../components/ChangePasswordForm.vue";
  
  const user = useUsersStore();
  const profile = ref(true);
  </script>