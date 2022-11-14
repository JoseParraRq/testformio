


const knex = require('knex')({
    client:'mysql',
    connection:{
        host : 'localhost',
        port : 3306,
        user : 'root',
        password : '1234',
        database : 'test'
    },
    pool: { min: 2, max: 20 }
});

module.exports = knex;