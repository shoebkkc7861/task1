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

let msg = knex.raw("use pro1")
    .then(() => {
        let data = knex.raw("select * from Message")
        return data
    })
    .then((data) => {
        let message = data[0]
        // console.log(message)
        return message
    })


module.exports = {
    msg,
    knex
}