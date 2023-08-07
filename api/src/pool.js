const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pokemon',
    password: 'admin',
    port: 5434
});


module.exports = {
    pool
}