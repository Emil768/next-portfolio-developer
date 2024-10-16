#!/bin/bash
export PATH=$PATH:/usr/local/bin

# Переходим в каталог с вашим приложением
cd /var/next-portfolio-developer

# Обновляем репозиторий
git pull origin main

# Устанавливаем зависимости (на случай, если они обновились)
yarn install

# Собираем приложение
yarn build

# Перезапускаем приложение с помощью PM2
pm2 restart client || pm2 start -n "client" "yarn start"

