const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
  database: 'react_gallery',
  host: 'localhost',
  port: 5432,
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (error) => {
  console.log('ERROR with database pool', error);
});

module.exports = pool;
