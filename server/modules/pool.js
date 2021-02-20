// Add Postgres to the file
const pg = require('pg');

// Import Pool from pg
const Pool = pg.Pool;

// Creat new Pool object
const pool = new Pool({
  database: 'react_gallery',
  host: 'localhost',
  port: 5432,
});

// Database Checks
pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (error) => {
  console.log('ERROR with database pool', error);
});

module.exports = pool;
