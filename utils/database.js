const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crown_13',
  password: '0000',
  port: 5432,
})

pool.query('SELECT * from category_13', (err, res) => {
    console.log(JSON.stringify(res.rows))
    pool.end()
  })

module.exports = pool;