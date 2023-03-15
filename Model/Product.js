const { knex, msg } = require("../db/conection")


async function addProduct(param) {
    console.log(param, "dfghj")
    let userData = await knex("product").insert(param).catch((err) => { return err })
    return userData

}

async function multipleFiles(param) {
    let userData = await knex("multiple").insert(param).catch((err) => { return err })
    return userData
}


module.exports = {
    products: {
        addProduct,
        multipleFiles,
    }
}