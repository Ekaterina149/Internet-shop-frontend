
<template>
<footer class="bg-white shadow mt-4 w-full">
    <div class=" w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="../assets/korzina_pbzcrxl7vk40_512.png" class="h-10  mr-2 object-center" alt="Flowbite Logo" />
                <span class="inline-block self-center text-2xl    font-leo whitespace-nowrap dark:text-white pt-0">Изделия из лозы</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li class=" h-10">
                    <a href="https://vk.com/id472391303"  target="_blank" class=""><img src="../assets/vk-svgrepo-com.svg" class="h-10  me-4 md:me-6" alt="Vk Logo" /></a>
                </li>
                <li class="">
                    <div class="flex flex-row flex-wrap ">
                        <div>
                            <SvgIcon
              type="mdi"
              h="h-full"
              w="w-full"
              size="30"
              :path="mdiCellphoneBasic"
              class="inline-block" />
              <span class=" me-4 md:me-6 shrink-0">+7(960)769 33 22</span>
                        </div>
                        
                    
                    <div>
                        <SvgIcon
              type="mdi"
              h="h-full"
              w="w-full"
              size="30"
              :path="mdiEmailOutline"
              class="inline-block" />
              <span class=" me-4 md:me-6">yrkova_ea@inbox.ru</span>
                    </div>
                        
                    </div>
               
                </li>
                <!-- <li>
                    <SvgIcon
              type="mdi"
              h="h-full"
              w="w-full"
              size="30"
              :path="mdiEmailOutline"
              class="inline-block" />
              <span class=" me-4 md:me-6">yrkova_ea@inbox.ru</span>
                </li> -->
               
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Изделия из лозы™</a>. Все права защищепны.</span>
    </div>
</footer>
</template>
<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCellphoneBasic, mdiEmailOutline } from "@mdi/js";
</script>


