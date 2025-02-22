# Первый этап: сборка проекта
FROM node:16-alpine AS builder

WORKDIR /app

# Копируем только файлы зависимостей для кэширования
COPY package*.json ./

# Устанавливаем все зависимости (включая dev-зависимости) для сборки
RUN npm ci --legacy-peer-deps

# Копируем весь исходный код
COPY . .

# Выполняем сборку проекта (например, компиляция TypeScript для NestJS)
RUN npm run build

# Второй этап: финальный образ
FROM node:16-alpine

WORKDIR /app

# Копируем только package.json для установки runtime-зависимостей
COPY package*.json ./

# Устанавливаем только production-зависимости
RUN npm ci --only=production --legacy-peer-deps

# Глобально устанавливаем PM2
RUN npm install -g pm2

# Копируем собранные файлы из первого этапа (без исходников src и dev-зависимостей)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/ecosystem.config.js ./ecosystem.config.js

# Указываем порт, который будет экспонироваться (предполагаем 3000 для NestJS)
EXPOSE 3000

# Запускаем приложение с помощью pm2-runtime
CMD ["pm2-runtime", "ecosystem.config.js"]