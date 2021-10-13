const { Pool, Client } = require('pg')

const isProduction = process.env.NODE_ENV === "production"



const pool = new Pool({
//  user: 'postgres',
//  host: 'localhost',
//  database: 'crown_13',
//  password: '0000',
//  port: 5432,
  connectionString: isProduction ? process.env.DATABASE_URL : `postgresql://postgres:0000@localhost:5432/crown_13`
})

//pool.query('SELECT * from category_13', (err, res) => {
//    console.log(JSON.stringify(res.rows))
//    pool.end()
// })

module.exports = pool;