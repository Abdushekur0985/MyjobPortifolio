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
This folder previously contained an Express + MySQL backend.

The backend has been disabled/removed per project request. The `server/index.js` file
is intentionally replaced by a small placeholder so running `npm install` and
`npm run dev` for the frontend works without starting a server.

If you want to restore a backend later, add your server files back into this folder.
