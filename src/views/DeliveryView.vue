<template>
  <div class="w-full shadow-md sm:rounded-lg">
    <h3
      class="text-red-900 text-xl sm:text-3xl md:text-4xl pb-10 font-bold text-center pt-10 font-mono bg-opacity-80 bg-gray-50 rounded-t-xl"
    >
      Стоимость пересылки по регионам
    </h3>
    <p  class="text-xl text-left pt-10 font-mono bg-opacity-80 bg-gray-50 px-6 py-6  indent-8">
         Для покупки товаров Вам нужно зарегестрироваться на нашем сайте.После успешного оформления
      заказа, письмо с данными заказа приходит к нам (и к Вам) на электронную почту, наш специалист
      уточнит данные заказа, и в дальнейшем заказ будет отправлен Вам Почтой России по адресу,
      указанному в заказе.К стоимости заказа плюсуется цена доставки по регионам. Она приведена в таблице ниже.
    </p>
    <table
      class="w-full grid grid-cols-1 grid-rows-[fit-content,_fit-content] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-[fit-content] justify-items-center"
        >
          <th scope="col" class="px-6 py-3 w-full border border-slate-300 border-r box-border">
            Вес посылки
          </th>
          <th scope="col" class="px-6 py-3 w-full border border-slate-300 box-border border-r">
            Регион
          </th>
          <th scope="col" class="px-6 py-3 border w-full border-slate-300 box-border border-r">
            Цена
          </th>
        </tr>
      </thead>
      <tbody class=" text-gray-900">
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-1 bg-white bg-opacity-80 border-b dark:bg-gray-800 dark:border-gray-700 justify-items-center"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white w-full box-border border-slate-300 border-r"
          >
            менее 1кг
          </th>
          <td
            class="px-6 py-4 justify-self-start w-full border-slate-300 border-r box-border "
            lang="ru"
          >
            Иркутская область, Бурятия
          </td>
          <td class="px-6 py-4 w-full box-border border-slate-300 border-r">400 руб</td>
        </tr>
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-1 bg-white bg-opacity-80 border-b dark:bg-gray-800 dark:border-gray-700 justify-items-center"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white w-full box-border border-slate-300 border-r"
          >
            менее 1кг
          </th>
          <td
            class="px-6 py-4 justify-self-start w-full box-border border-slate-300 border-r break-words hyphens-auto"
            lang="ru"
          >
            Красноярский край, Новосибирская область
          </td>
          <td class="px-6 py-4 w-full box-border border-slate-300 border-r">500 руб</td>
        </tr>
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-1 bg-white bg-opacity-80 dark:bg-gray-800 justify-items-center"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white w-full box-border border-slate-300 border-r"
          >
            менее 1кг
          </th>
          <td
            class="px-6 py-4 justify-self-start w-full box-border border-slate-300 border-r break-words hyphens-auto"
            lang="ru"
          >
            Республика Алтай, Кемеровская область, Томская область, Алтайский край
          </td>
          <td class="px-6 py-4 w-full box-border border-slate-300 border-r">600 руб</td>
        </tr>
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-1 bg-white bg-opacity-80 dark:bg-gray-800 justify-items-center"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white w-full box-border border-slate-300 border-r"
          >
            менее 1кг
          </th>
          <td
            class="px-6 py-4 justify-self-start w-full box-border border-slate-300 border-r break-words hyphens-auto"
            lang="ru"
          >
            Москва, Московская область, Санкт-Петербург, Ленинградская область, Владимирская
            область, Тульская область, Костромская область, Урал и т.п.
          </td>
          <td class="px-6 py-4 w-full box-border border-slate-300 border-r">600 руб</td>
        </tr>
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-1 bg-white bg-opacity-80 dark:bg-gray-800 justify-items-center"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white w-full box-border border-slate-300 border-r"
          >
            менее 1кг
          </th>
          <td
            class="px-6 py-4 justify-self-start w-full box-border border-slate-300 border-r break-words hyphens-auto"
            lang="ru"
          >
            Дальний Восток, Белгородская область, Курская область, Краснодарский край, Ростовская
            область
          </td>
          <td class="px-6 py-4 w-full box-border border-slate-300 border-r">700 руб</td>
        </tr>
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-1 bg-white bg-opacity-80 border-b dark:bg-gray-800 dark:border-gray-700 justify-items-center"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white w-full box-border border-slate-300 border-r"
          >
            > 1кг
          </th>
          <td
            class="px-6 py-4 justify-self-start w-full border-slate-300 border-r box-border"
            lang="ru"
          >
            Иркутская область, Бурятия
          </td>
          <td class="px-6 py-4 w-full box-border border-slate-300 border-r">600 руб</td>
        </tr>
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-1 bg-white bg-opacity-80 border-b dark:bg-gray-800 dark:border-gray-700 justify-items-center"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white w-full box-border border-slate-300 border-r"
          >
            > 1кг
          </th>
          <td
            class="px-6 py-4 justify-self-start w-full box-border border-slate-300 border-r break-words hyphens-auto"
            lang="ru"
          >
            Красноярский край, Новосибирская область
          </td>
          <td class="px-6 py-4 w-full box-border border-slate-300 border-r">700 руб</td>
        </tr>
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-1 bg-white bg-opacity-80 dark:bg-gray-800 justify-items-center"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white w-full box-border border-slate-300 border-r"
          >
            > 1кг
          </th>
          <td
            class="px-6 py-4 justify-self-start w-full box-border border-slate-300 border-r break-words hyphens-auto"
            lang="ru"
          >
            Республика Алтай, Кемеровская область, Томская область, Алтайский край
          </td>
          <td class="px-6 py-4 w-full box-border border-slate-300 border-r">800 руб</td>
        </tr>
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-1 bg-white bg-opacity-80 dark:bg-gray-800 justify-items-center"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white w-full box-border border-slate-300 border-r"
          >
            > 1кг
          </th>
          <td
            class="px-6 py-4 justify-self-start w-full box-border border-slate-300 border-r break-words hyphens-auto"
            lang="ru"
          >
            Москва, Московская область, Санкт-Петербург, Ленинградская область, Владимирская
            область, Тульская область, Костромская область, Урал и т.п.
          </td>
          <td class="px-6 py-4 w-full box-border border-slate-300 border-r">800 руб</td>
        </tr>
        <tr
          class="w-full grid grid-cols-[100px,_minmax(100px,_1fr),_100px] grid-rows-1 bg-white bg-opacity-80 dark:bg-gray-800 justify-items-center rounded-b-xl"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white w-full box-border border-slate-300 border-r"
          >
            > 1кг
          </th>
          <td
            class="px-6 py-4 justify-self-start w-full box-border border-slate-300 border-r break-words hyphens-auto"
            lang="ru"
          >
            Дальний Восток, Белгородская область, Курская область, Краснодарский край, Ростовская
            область
          </td>
          <td class="px-6 py-4 w-full box-border border-slate-300 border-r">800 руб</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
