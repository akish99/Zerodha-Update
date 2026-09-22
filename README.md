# Zerodha Project

This project uses Supabase Postgres for backend persistence. The Supabase service-role key is used only by the Express backend and must never be added to the frontend.

## Supabase setup

1. Create a Supabase project and copy its Project URL and service-role key.
2. Open the Supabase SQL Editor and run [`supabase/schema.sql`](supabase/schema.sql).
3. Copy [`Backend/.env.example`](Backend/.env.example) to `Backend/.env` and fill in `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and a strong `TOKEN_KEY`.
4. For deployment, set `VITE_API_URL` in both frontend apps to the public URL of the deployed backend. Local development can use the values in [`Frontend/.env.example`](Frontend/.env.example) and [`dashboard/.env.example`](dashboard/.env.example).

## Run locally

From the repository root, install dependencies in each app once:

```powershell
cd Backend
npm install

cd ../Frontend
npm install

cd ../dashboard
npm install
```

Start the API in one terminal:

```powershell
cd Backend
npm start
```

Start the public frontend in another terminal:

```powershell
cd Frontend
npm run dev
```

Start the dashboard in a third terminal when needed:

```powershell
cd dashboard
npm run dev
```

The API runs at `http://localhost:4000`, the public frontend normally at `http://localhost:5173`, and the dashboard normally at `http://localhost:5174`.