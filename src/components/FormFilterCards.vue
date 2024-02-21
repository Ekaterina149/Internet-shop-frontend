<template>
 <form
      class="bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:shadow-black box-border py-8 self-start"
    >
      <h5
        class="self-center pb-4 mb-6 text-md md:text-xl border-b-2 border-b-zinc-600 px-8">
        Фильтр товаров
      </h5>
      <div class="px-8">
        <input type="checkbox" id="cb1" v-model="BasketCheckbox" /> <label for="cb1">Корзины</label>
      </div>
      <div class="px-8">
        <input type="checkbox" v-model="TrayCheckbox" id="cb2" /> <label for="cb2">Подносы</label>
      </div>
      <div v-if="props.bag" class="px-8">
        <input type="checkbox" v-model="BagCheckbox" id="cb3" /> <label for="cb3">Сумки</label>
      </div>
      <div  v-if="props.small" class="px-8">
        <input type="checkbox" v-model="SmallCheckbox" id="cb4" /> <label for="cb4">Всякая мелочь</label>
      </div>
      <div class="wrapper">
      <header>
        
        <p>Диапазон цены, руб</p>
      </header>
      <div class="price-input">
        <div class="field">
          <span>Min</span>
          <input type="number" class="input-min" :min="props.startMinPrice" :max="props.startMaxPrice" v-model="MinPrice">
        </div>
        <div class="separator">-</div>
        <div class="field">
          <span>Max</span>
          <input type="number" class="input-max" :min="props.startMinPrice" :max="props.startMaxPrice" v-model="MaxPrice">
        </div>
      </div>
      <div class="slider">
        <div class="progress" :style="`left: ${minProcent}%; right: ${maxProcent}%; `"></div>
      </div>
      <div class="range-input">
        <input type="range" class="range-min" :min="props.startMinPrice" :max="props.startMaxPrice"   v-model="MinPrice">
        <input type="range" class="range-max" :min="props.startMinPrice" :max="props.startMaxPrice"  v-model="MaxPrice">
      </div>
    </div>
    </form>
</template>

<script setup>
import {ref, computed, watch } from "vue";
const props= defineProps({
    minPrice: Number,
    maxPrice: Number,
    startMinPrice: Number,
    startMaxPrice: Number, 
    basketCheckbox: Boolean,
    bagCheckbox: Boolean,
    smallCheckbox: Boolean,
    trayCheckbox: Boolean,
    updatedMaxPrice: Number,
    bag: Number,
    small: Number,
});
const emit = defineEmits(["update:max-price", "update:min-price", "update:bag-checkbox", "update:basket-checkbox", "update:tray-checkbox", "update:small-checkbox"]);

const BasketCheckbox = computed({
  get: () => props.basketCheckbox,
  set: (value) => {
    emit("update:basket-checkbox", value);
  },
});

const BagCheckbox = computed({
  get: () => props.bagCheckbox,
  set: (value) => {
    emit("update:bag-checkbox", value);
  },
});

const TrayCheckbox = computed({
  get: () => props.trayCheckbox,
  set: (value) => {
    emit("update:tray-checkbox", value);
  },
});

const SmallCheckbox = computed({
  get: () => props.smallCheckbox,
  set: (value) => {
    emit("update:small-checkbox", value);
  },
});

const MinPrice = computed({
  get: () => props.minPrice,
  set: (value) => {
    if(value  >= props.startMinPrice)
    emit("update:min-price", value);
    else emit("update:min-price", props.startMinPrice);
  },
});
const MaxPrice = computed({
  get: () => props.maxPrice,
  set: (value) => {

    if(value  <= props.startMaxPrice)
    emit("update:maxPrice", value);
  else emit("update:maxPrice", props.startMaxPrice);
  
  },
});
function convertRangeToPercent(value, min, max) {
  return ((value - min) / (max - min)) * 100;}
  const minProcent = ref(0);
  const maxProcent =ref(0);
const minProcentCount = () =>{ 
  // debugger;
  return MinPrice.value <= props.startMinPrice ? 0:convertRangeToPercent(props.minPrice, props.startMinPrice, props.startMaxPrice) }; 
const maxProcentCount = () => { return MaxPrice.value >= props.startMaxPrice ?  0: ( (props.startMaxPrice-props.maxPrice)*100/(props.startMaxPrice-props.startMinPrice)  )}; 
console.log('MaxPrice', MaxPrice);
watch([()=>props.startMaxPrice, ()=>props.minPrice, ()=>props.maxPrice, ()=>props.minPrice  ], () => {

  
  // debugger;
  // MaxPrice.value = props.startMaxPrice;
  // MinPrice.value = props.startMinPrice;
  maxProcent.value = maxProcentCount();
  minProcent.value= minProcentCount();
} );
// watchEffect( () => {
// if( props.minPrice !==  props.startMinPrice ){
//   console.log("watchMinPrice");
// debugger;
// // MaxPrice.value = props.startMaxPrice;
// // MinPrice.value = props.startMinPrice;
// maxProcent.value = maxProcentCount();
// minProcent.value= minProcentCount();
// }

// } );
</script>


<style>
input[type="checkbox"]:checked,
input[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
input[type="checkbox"]:checked + label,
input[type="checkbox"]:not(:checked) + label {
  display: inline-block;
  position: relative;
  padding-left: 50px;
  line-height: 35px;
  cursor: pointer;
  color: black;
  font-size: 18px;
}
input[type="checkbox"]:checked + label:before,
input[type="checkbox"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 2px solid grey;
  border-radius: 6px;
  z-index: 30;
}
input[type="checkbox"]:checked + label:after,
input[type="checkbox"]:not(:checked) + label:after {
  content: "";
  position: absolute;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  z-index: 30;
}
input[type="checkbox"]:checked + label:after,
input[type="checkbox"]:not(:checked) + label:after {
  left: 4px;
  top: 5px;
  width: 25px;
  height: 10px;
  border-radius: 4px;
  border-left: 4px solid rgb(127 29 29);
  border-bottom: 4px solid rgb(127 29 29);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
input[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
}

input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

.wrapper{
  width: 280px;
  background: transparent;
  border-radius: 10px;
  padding: 20px 2rem 40px;
  
}
header h2{
  font-size: 24px;
  font-weight: 600;
}
header p{
  margin-top: 5px;
  font-size: 16px;
}
.price-input{
  width: 100%;
  display: flex;
  margin: 30px 0 35px;
}
.price-input .field{
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
}
.field input{
  width: 100%;
  min-width: 60px;
  height: 100%;
  outline: none;
  font-size: 14px;
  margin-left: 12px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #999;
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.price-input .separator{
  width: 100px;
  display: flex;
  font-size: 19px;
  align-items: center;
  justify-content: center;
}
.slider{
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
}
.slider .progress{
  height: 100%;
  /* left: 50%; */
  /* right: 25%; */
  position: absolute;
  border-radius: 5px;
  background: #17A2B8;
}
.range-input{
  position: relative;
}
.range-input input{
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"]::-webkit-slider-thumb{
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #17A2B8;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
}
input[type="range"]::-moz-range-thumb{
  height: 17px;
  width: 17px;
  border: none;
  border-radius: 50%;
  background: #17A2B8;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
}
</style>