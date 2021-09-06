# km-test
Репозиторий сборки для тестироания, максимально приближенной к реальной (с некоторыми условностями).

## основные инструменты
Сборка использует (основное):
- [TypeScript](https://www.typescriptlang.org/docs/),
- [React](https://ru.react.js.org/docs/getting-started.html),
- React Router,
- Redux,
- [Redux Saga](https://redux-saga.js.org/docs/api/),
- SCSS,
- [Axios](https://axios-http.com/docs/intro),
- Jest,
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/),
- [Mock Service Worker](https://mswjs.io/docs/),
- [Material-UI](https://material-ui.com/ru/getting-started/usage/).

## основные скрипты (кроме первых двух: yarn или npm ...)
- yarn - установить зависимости
- npm i - то же самое, но с npm
- build - production сборка в dist
- build-n - production сборка с предварительным созданием файла .env на Netlify
- lint - eslint
- lint-e - eslint - только ошибки
- fix - eslint, исправление ошибок
- start - запуск дев-сервера, порт 3000
- start-prod - production сборка и запуск сервера express, порт 3030
- test - запуск тестов (Jest + RTL)
- test-c - запуск тестов + coverage + summary (ToDo: одновременный вывод таблички и Summary)

## основные папки
- configs - конфиги вебпак (dev и prod) и jest
- public - при сборке файлы из этой папки копируются в корень проекта
- src - исходники приложения и основная рабочая папка
- tests - настройки тестов, моки файлов, создание заглушек запросов

## переменные окружения
Сборка использует Dotenv, что позволяет работать с .env файлом в корневой папке. ToDo: сделать пример файла, когда он появится.
