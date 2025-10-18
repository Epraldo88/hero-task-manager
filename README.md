```bash
psql -U postgres -d task_manager -f backend/db/schema.sql

# Backend
cd backend

<!-- add .env file -->
PG_USER=postgres
PG_PASSWORD=admin
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=task_manager
PORT=5000

npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev

```
