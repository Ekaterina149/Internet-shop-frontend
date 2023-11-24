<template>
 
   
     <a @click="onClick">

{{DetailsTextContent }}
<span><SvgIcon v-if="clickedButton"
      type="mdi"
      h="h-full"
      w="w-full"
      size="20"
      :path="mdiChevronUp"
      class="inline-block"
    />
    <SvgIcon v-else
      type="mdi"
      h="h-full"
      w="w-full"
      size="20"
      :path="mdiChevronDown"
      class="inline-block"
    /></span>
</a>

</template>
<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiChevronUp, mdiChevronDown} from '@mdi/js';
const props = defineProps ({
  clickedButton: Boolean

});
const emit = defineEmits(['onclick']);
const onClick= () => {
emit('onclick');
console.log('props.clicked', DetailsTextContent);
}
const DetailsTextContent = computed( () => {
  return props.clickedButton ? 'Свернуть описание' : 'Подробнее'
});
console.log('props.clicked', DetailsTextContent);
</script>