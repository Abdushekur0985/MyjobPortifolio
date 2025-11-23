Server setup

1. Copy `.env.example` to `.env` and set your DB credentials:

```
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASS=your_db_password
DB_NAME=portfolio_db
```

2. Create the database (MySQL):

```
CREATE DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. From project root install dependencies and start server:

```powershell
npm install
# then
npm run server
# or for dev (auto-restart)
npm run dev:server
```

The server will create the `contacts` table automatically on first run.
