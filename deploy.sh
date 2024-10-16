#!/bin/bash

# Переходим в директорию с проектом
cd /var/next-portfolio-developer

# Получаем последние изменения из репозитория
git pull origin main

# Устанавливаем зависимости
/root/.nvm/versions/node/v20.18.0/bin/yarn install 

# Собираем проект
/root/.nvm/versions/node/v20.18.0/bin/yarn build

# Перезапускаем приложение с помощью PM2
/root/.nvm/versions/node/v20.18.0/bin/pm2 restart client || /root/.nvm/versions/node/v20.18.0/bin/pm2start yarn --name "client" -- start