<template>
  <ErrorPopup
    @onSub="
      isError.exist = false;
      isError.message = '';
      cards.isError.exist = false;
      cards.isError.message = '';
    "
    :message="isError.message || cards.isError.message"
    :open="isError.exist || cards.isError.exist"
  />
  <AccountPopup
    v-if="!user.isLoggedIn"
    :open="isAccountOpen"
    :error="isError"
    :handleLogIn="user.authorize"
    :handleUpdateBasket="user.updateBasket"
    :basketArray="cards.basketArray"
    :cardsArray="cards.cardsArray"
    @get-basket="
      (basket) => {
        debugger;
        console.log('get-basket', basket);
        cards.basketArray = basket;
      }
    "
    @get-user="
      (userData) => {
        debugger;
        user.user = userData;
        user.isLoggedIn = true;
      }
    "
    @del-error="
      () => {
        isError.exist = false;
        isError.message = '';
      }
    "
    @closeAccount="onCloseAccount"
    @emit-error="onError"
    :user="user.user"
  />
  <NavBar
    :isAccountOpen="isAccountOpen"
    :isLoggedin="user.isLoggedIn"
    :onToogle="onToogle"
    @accountOpen="(value) => (isAccountOpen = value)"
    class="grow-0"
  />
  <main
    class="mt-0 flex flex-col justify-center items-center box-border px-2 sm:px-4 md:px-5 lg:px-24 grow"
  >
    <RouterView v-slot="{ Component }">
      <component :is="Component" :errorMessage="isError.message" :openError="isError.exist" />
    </RouterView>
  </main>
  <Footer />
</template>

<script setup>
import { useDark } from "@vueuse/core";
import { ref, reactive } from "vue";
import AccountPopup from "../components/AccountPopup.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import ErrorPopup from "../components/ErrorPopup.vue";
import { useUsersStore } from "../stores/usersStore.ts";
import { useCardsStore } from "../stores/cardsStore.ts";

const isAccountOpen = ref(false);
const isError = reactive({
  exist: false,
  message: "",
});
const user = useUsersStore();
const cards = useCardsStore();

const onToogle = () => {
  isAccountOpen.value = !isAccountOpen.value;
};

const onToogleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log("isOpen", isOpen);
};
const onCloseAccount = () => {
  isAccountOpen.value = false;
  isError.exist = false;
};

const onError = (value) => {
  isError.exist = true;
  isError.message = value;
  console.log("error2", isError.message);
};
</script>
