#!/bin/bash

# Установка PATH (путь может отличаться в зависимости от системы)
export PATH=$PATH:/usr/local/bin:/usr/bin

# Переходим в каталог с вашим проектом
cd /path/to/your/project

# Получаем последние изменения из репозитория
git pull origin main

# Устанавливаем зависимости
yarn install

# Собираем проект
yarn build

# Перезапускаем приложение с помощью PM2
pm2 restart client || pm2 start yarn --name "client" -- start