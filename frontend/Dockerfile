# Первый этап: сборка фронтенда
FROM node:16-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем весь исходный код
COPY . .

# Выполняем сборку фронтенда (предполагается, что команда build собирает статику)
RUN npm run build

# Второй этап: финальный образ с Nginx
FROM nginx:latest

# Копируем собранные файлы фронтенда в директорию Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/

# Указываем порт, который будет экспонироваться
EXPOSE 80