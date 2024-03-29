### `Магазин изделий из лозы. Frontend`

**Мой pet проект**

## Описание проекта

Проект представляет собой сайт интернет магазина изделий из эко-лозы.
В проекте используются технологии: Node.js + Yarn(1.22.19) как пакетные менеджеры, Vite (4.3.9) как сборщик проекта,  Vue3.js (Composition API) как базовый фреймворк, Pinia (2.1.3) как глобальное хранилище, верстка - Tailwind.css (3.3.0), , базовая логика написана на TypeScript(5) (внутри Storage) и на JavaScript .    
Для роутинга используется Vue-Router.Для отображения svg иконок используется библиотеки @jamescoyle/vue-icon, @mdi/js. Для работы с LocalStorage - VueUse.

## Системные требования

Для работы проекта нужно установить версию Node.js 18.17 или более позднюю, сборку проекта можно осуществить с помощью npm или yarn  и pnpm.
Операционная система на вашем компьютере должна быть macOS, Windows (включая WSL), или Linux.

## Установка и запуск проекта

- Установите зависимости командой `npm i` или `yarn install`
- Запуск в режиме разработки `npm run dev` либо `yarn dev`  
  По умолчанию в режиме разработки приложение запустится на порту 3000 (http://localhost:3000).
- Запуск проекта в продакшен с проверкой типов `npm run build` либо `yarn build`
- Сборка проекта в продакшен с предварительной очисткой директории без проверки типизации `npm run build-only` либо `yarn build-only`
- Запуск проверки типов  `npm run type-check` `yarn type-check`
