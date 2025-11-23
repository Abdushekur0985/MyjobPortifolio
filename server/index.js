const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

let pool;

async function initDb() {
    const dbHost = process.env.DB_HOST || 'localhost';
    const dbUser = process.env.DB_USER || 'root';
    const dbPass = process.env.DB_PASS || '';
    const dbName = process.env.DB_NAME || 'portfolio_db';

    // Ensure database exists. Connect without specifying database first.
    const tmpConn = await mysql.createConnection({ host: dbHost, user: dbUser, password: dbPass });
    try {
        await tmpConn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    } finally {
        await tmpConn.end();
    }

    // create pool using the database
    pool = await mysql.createPool({
        host: dbHost,
        user: dbUser,
        password: dbPass,
        database: dbName,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    // create table if not exists
    await pool.query(`
        CREATE TABLE IF NOT EXISTS contacts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(150) NOT NULL,
            email VARCHAR(200) NOT NULL,
            password_hash VARCHAR(200) NOT NULL,
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
}

app.get('/api/contacts', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, name, email, message, created_at FROM contacts ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, password, message } = req.body;
        if (!name || !email || !password) return res.status(400).json({ error: 'Missing required fields' });

        const password_hash = await bcrypt.hash(password, 10);

        const [result] = await pool.query('INSERT INTO contacts (name, email, password_hash, message) VALUES (?, ?, ?, ?)', [name, email, password_hash, message || null]);

        res.json({ success: true, id: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

initDb()
    .then(() => {
        const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

        // Graceful shutdown for nodemon or SIGINT
        const shutdown = async () => {
            console.log('Shutting down server...');
            try {
                await pool.end();
                server.close(() => {
                    console.log('HTTP server closed.');
                    process.exit(0);
                });
            } catch (err) {
                console.error('Error during shutdown', err);
                process.exit(1);
            }
        };

        process.on('SIGINT', shutdown);
        process.on('SIGTERM', shutdown);
    })
    .catch(err => {
        console.error('Failed to initialize DB pool', err);
        process.exit(1);
    });
