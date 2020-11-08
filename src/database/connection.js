require('dotenv').config()


const PASSWORD = process.env.PASSWORD
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: PASSWORD,
        database: 'register'
    }
});
module.exports = knex