require("dotenv").config({ path: ".env.local" }); // usaremos .env.local para evitar interceptores
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // necesario para Railway
});

module.exports = pool;
