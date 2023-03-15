let { knex } = require("../db/conection")


async function addData(params) {
    const data = await knex("user").insert(params).catch((err) => { return err })

    return data
}

module.exports = {
    csv: {
        addData
    }
}