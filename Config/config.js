require("dotenv").config()

const config = {
    port: process.env.PORT,
    host: process.env.HOST,
    dbPort: process.env.DBPORT,
    user: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}


module.exports = config