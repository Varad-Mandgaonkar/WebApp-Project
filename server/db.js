const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mini_e-commerce_db',
  password: 'zenith@1',  
  port: 5432,
});

module.exports = pool;
