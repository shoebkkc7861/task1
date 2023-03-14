const config = require("../Config/config")
require("mysql2")
const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: config.host,
        port: config.dbPort,
        user: config.user,
        password: config.password,
        database: config.database
    }
});

// let a = knex.raw(`use ${config.port}`)


