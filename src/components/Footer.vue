
<template>
<footer class="bg-white shadow mt-4 w-full">
    <div class=" w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between gap-6">
            <RouterLink to="/" class="flex items-center mb-4 sm:mb-0   pr-2 ">
                <img src="../assets/korzina_pbzcrxl7vk40_512.png" class="h-10  mr-2 object-center" alt="Flowbite Logo" />
                <p class="block self-center text-2xl    font-leo whitespace-nowrap dark:text-white pt-0  ">Изделия из лозы</p>
            </RouterLink>
            <ul class="flex flex-nowrap justify-center min-[426px]:justify-start min-[709px]:justify-center items-center self-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-2">
                <li class=" h-10">
                    <a href="https://vk.com/id472391303"  target="_blank" class=""><img src="../assets/vk-svgrepo-com.svg" class="h-10  me-4 md:me-6" alt="Vk Logo" /></a>
                </li>
                <li class="">
                    <div class="flex flex-row flex-wrap mr-2 gap-2 justify-start ">
                        <div class="flex flex-row flex-nowrap">
                            <SvgIcon
              type="mdi"
              h="h-full"
              w="w-full"
              size="30"
              :path="mdiCellphoneBasic"
              class="inline-block" />
              <span class=" me-4 md:me-6 shrink-0 whitespace-nowrap">+7(900)000 00 00</span>
                        </div>
                        
                    
                    <div class="flex flex-row flex-nowrap mr-2 ">
                        <SvgIcon
              type="mdi"
              h="h-full"
              w="w-full"
              size="30"
              :path="mdiEmailOutline"
              class="inline-block" />
              <span class=" me-4 md:me-6 shrink-0 whitespace-nowrap">loza-shop-order@mail.ru</span>
                    </div>
                        
                    </div>
               
                </li>
             
               
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Изделия из лозы™</a>. Все права защищены.</span>
    </div>
</footer>
</template>
<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCellphoneBasic, mdiEmailOutline } from "@mdi/js";
import { RouterLink } from "vue-router";
</script>


