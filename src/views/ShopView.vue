<template>
  <section
    class="flex flex-row gap-3 w-max max-w-[320px] sm:max-w-fit pt-8 flex-wrap items-center justify-center"
  >
    <FormFilterCards
    class=""
      :minPrice="filters.minPrice"
      :maxPrice="filters.maxPrice"
      :startMinPrice="startMinPrice"
      :startMaxPrice="startMaxPrice"
      :basketCheckbox="filters.isBasket"
      :bagCheckbox="filters.isBag"
      :trayCheckbox="filters.isTray"
      :smallCheckbox="filters.isSmall"
      :bag="cardsStore.cardsArray.filter((card) => card.productName.includes('сум')).length"
      :small="cardsStore.cardsArray.filter((card) => card.price<=800).length"
      @update:max-price="onUpdateMaxPrice"
      @update:min-price="onUpdateMinPrice"
      @update:basket-checkbox="(value) => (filters.isBasket = value)"
      @update:bag-checkbox="(value) => (filters.isBag = value)"
      @update:small-checkbox="(value) => (filters.isSmall = value)"
      @update:tray-checkbox="(value) => (filters.isTray = value)"
      
    />
    <ul
      class="grid grid-cols-[320px] auto-rows-auto md:grid-cols-[320px_320px] xl:grid-cols-[320px_320px_320px] gap-3"
    >
      <li v-for="card in filteredCards">
        <Card :card="card" class="shadow hover:shadow-md" />
      </li>
    </ul>
  </section>
</template>
<script setup>
import Card from "../components/Card.vue";
import { useCardsStore } from "../stores/cardsStore.ts";
import { ref, computed,reactive, watch } from "vue";
import FormFilterCards from "../components/FormFilterCards.vue";
const cardsStore = useCardsStore();
const filters = reactive({
  isBasket: false,
  minPrice: 0,
  maxPrice: 0,
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

const filteredCards =ref([]);

const filterCards = 
() => {
  const filterkeys = Object.keys(filters);
   const filteredArray =  cardsStore.cardsArray.filter((item) => {
   
    
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
    
      if(!filters.isBag && !filters.isBasket && !filters.isTray && !filters.isSmall) return (pass.minPrice && pass.maxPrice ) ;
    return (pass.isBasket || pass.isTray || pass.isBag || pass.isSmall) && (pass.minPrice && pass.maxPrice ); 
    
  });

  
   return filteredArray;
 
};
 const onUpdateMaxPrice =(value)=> {
//  debugger;
  return filters.maxPrice = parseInt(value)
 };
 const onUpdateMinPrice =(value)=> (filters.minPrice = parseInt(value)
 );
console.log("minPrice", filters.minPrice);
console.log("maxPrice", filters.maxPrice);
const startMinPrice = ref(4000);
const startMaxPrice = ref(6300);
watch(()=>cardsStore.cardsArray,() => {
  // debugger;
  
    filters.minPrice = Math.min(...cardsStore.cardsArray.map(card => card.price));
    filters.maxPrice = Math.max(...cardsStore.cardsArray.map(card => card.price));
    startMinPrice.value = filters.minPrice;
  
    startMaxPrice.value= filters.maxPrice;
    filteredCards.value = filterCards();
});
watch([ ()=>filters.minPrice, ()=>filters.maxPrice, ()=>filters.isBasket, ()=>filters.isTray  ], ()=>{
  // debugger;
  filteredCards.value = filterCards();
});
onMounted(()=>{
  filters.minPrice = Math.min(...cardsStore.cardsArray.map(card => card.price));
    filters.maxPrice = Math.max(...cardsStore.cardsArray.map(card => card.price));
    filteredCards.value = filterCards();
})
</script>
