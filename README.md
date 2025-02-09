### Установка и запуск

- npm install установка зависимостей
- создать файл .env в корне проекта
- NEXT_PUBLIC_API_URL="http://localhost:5000/" содержимое .env
- json-server --watch mocks/db.json --port 5000 запуск json-server
- npm run dev запуск

### Стек технологий

- Next.js 15.1.6
- React 19.0.0
- TypeScript
- Tailwind CSS
- Zustand
- Axios
- Radix UI
- shadcn UI

### Функционал

- Данные загружаются с помощью json-server, который находится в репозитории.
- Семинары отображаются в виде карточек
- Редактирование семинара
- Удаление семинара
