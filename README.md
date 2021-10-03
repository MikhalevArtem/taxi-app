# Taxi react app

## Задача
Создание приложения для заказа такси на основе сервера https://loft-taxi.glitch.me/

## Решение
Для создания компонентов использована библиотека material-ui

Хранение данных в контейнере состояний redux.
Данныe из redux store сохраняется в localStorage с помощью redux-persist.
асинхронные запросы на сервер в middleware с помошью библиотеки redux-saga

Валидация форм, используя formik + yup

Отрисовка карты и маршрута на ней, используя библиотеку mapbox-gl

Роутинг в приложении реализован с помощью react-router-dom

## Использование
Приложение заеплоено на vercel: https://taxi-app-rho.vercel.app/map
Данные для входа:
  login:test@test.com 
  password:123123
Данные профиля сохраняются в localStorage! Используйте фейковые данные!
