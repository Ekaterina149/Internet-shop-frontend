<template>
<TransitionGroup
      :name="changeAnimationClass"
      tag="ul"
      class="swipe_list"
    >
        <slot name="image"></slot>
    </TransitionGroup>
</template>
<script setup>
 const props = defineProps({
  direction: String,
});
console.log("props", props.direction);
const changeAnimationClass = computed( ()=> {
    if(props.direction ==='forward')
    return 'list-in'
    else return 'list-out'
}) 
   
    

</script>
<style>
.swipe_list {
  width: 100%;
  height: 100%;
}

.swipe_list li {
  position: absolute;
  width: 100%;
  height: 100%;
}
.swipe_list li img {
  width: 100%;
  height: 100%;
}

.list-in-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}
.list-in-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}
.list-in-enter-from {
  transform: translateX(100%);
}
.list-in-leave-from {
  transform: translateX(0);
}

.list-out-leave-active {
  transition: all 1s ease;
  transform: translateX(100%);
}
.list-out-leave-from {
  transform: translateX(0);
}
.list-out-enter-from {
  transform: translateX(-100%);
}
.list-out-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}
</style>