#!/bin/bash

# Загружаем nvm и активируем нужную версию Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20.18.0

# Переходим в директорию с проектом
cd /var/next-portfolio-developer

# Получаем последние изменения из репозитория
git pull origin main

# Устанавливаем зависимости
yarn install 

# Собираем проект
yarn build 

# Перезапускаем приложение с помощью PM2
pm2 restart client || pm2 start yarn --name "client" -- start