<template>
  <section
    class="flex flex-row gap-3 w-max max-w-[320px] pt-8 flex-wrap items-center justify-center"
  >
    <FormFilterCards
      :minPrice="filters.minPrice"
      :maxPrice="filters.maxPrice"
      :startMinPrice="startMinPrice"
      :startMaxPrice="startMaxPrice"
      :basketCheckbox="filters.isBasket"
      :bagCheckbox="filters.isBag"
      :trayCheckbox="filters.isTray"
      :smallCheckbox="filters.isSmall"
      @update:maxPrice="(value) => (filters.maxPrice = parseInt(value))"
      @update:minPrice="(value) => (filters.minPrice = parseInt(value))"
      @update:basketCheckbox="(value) => (filters.isBasket = value)"
      @update:bagCheckbox="(value) => (filters.isBag = value)"
      @update:smallCheckbox="(value) => (filters.isSmall = value)"
      @update:trayCheckbox="(value) => (filters.isTray = value)"
    />
    <ul
      class="grid grid-cols-[320px] auto-rows-auto md:grid-cols-[320px_320px] xl:grid-cols-[320px_320px_320px] gap-3"
    >
      <li v-for="card in filteredCards">
        <Card :card="card" class="shadow hover:shadow-md" />
      </li>
    </ul>
  </section>

  <!-- <Card :images="cardsArray[0].pictureBig" :productName="cardsArray[0].productName" :description="cardsArray[0].description" :price="cardsArray[0].price"/> -->
</template>
<script setup>
import Card from "../components/Card.vue";
import { useCardsStore } from "../stores/cardsStore.ts";
import { ref, computed } from "vue";
import FormFilterCards from "../components/FormFilterCards.vue";
const cardsStore = useCardsStore();

const filters = reactive({
  isBasket: false,
  minPrice: parseInt(
    Math.min.apply(
      null,
      cardsStore.cardsArray.map((element) => element.price)
    )
  ),
  maxPrice: parseInt(
    Math.max.apply(
      null,
      cardsStore.cardsArray.map((element) => element.price)
    )
  ),
  isBag: false,
  isTray: false,
  isSmall: false,
});

const filterFunctions = {
  isBasket: (value, filter) =>
    filter ? value.productName.includes("корзин") : false,
  minPrice: (value, minPriceValue) => value.price >= minPriceValue,
  maxPrice: (value, maxPriceValue) => value.price <= maxPriceValue,
  isBag: (value, filter) =>
    filter ? value.productName.includes("сум") : false,
  isTray: (value, filter) =>
    filter ? value.productName.includes("поднос") : false,
  isSmall: (value, filter) => filter ? value.price <= 800 : false,
};



const filteredCards = computed(() => {
  const filterkeys = Object.keys(filters);
   const filteredArray =  cardsStore.cardsArray.filter((item) => {
    
    let passBasket = true;
    let passBag = true;
    let passTray = true;
    let passSmall = true;
    let pass={
      isBasket: true,
      isBag: true,
      isTray: true,
      isSmall: true,
      minPrice: true,
      maxPrice: true,
    };
    filterkeys.forEach(key => {
      if(!filterFunctions[key](item, filters[key]))
      pass[key]=false;

    });
    
      if(!filters.isBag && !filters.isBasket && !filters.isTray && !filters.isSmall) return (pass.minPrice && pass.maxPrice) ;
    return (pass.isBasket || pass.isTray || pass.isBag || pass.isSmall) && (pass.minPrice && pass.maxPrice)  ; 
  });

  
   return filteredArray;
});

console.log("minPrice", filters.minPrice);
console.log("maxPrice", filters.maxPrice);
const startMinPrice = filters.minPrice;
const startMaxPrice = filters.maxPrice;


</script>
