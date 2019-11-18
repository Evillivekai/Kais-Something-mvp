const { Pool } = require('pg');

const pool = new Pool ({
  user: 'postgres',
  database: 'coffee_collection',
  password: '123',
});

pool.connect((err) => {
  err ? console.error('Connecting error: ' + err) : console.log('Success');
})

module.exports = pool;