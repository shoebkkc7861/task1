let { msg, knex } = require("../db/conection")

async function getCars() {
    let car = await knex('Car').select("*").catch(() => { return false })
    return car
}

async function addCar(param) {
    let car = await knex('Car').insert(param).catch((err) => { return err })
    return car
}

async function addimg(param) {
    let img = await knex("CarImg").insert(param).catch((err) => { return err })
    return img
}


async function getCar(param) {
    let car = knex("Car").where("id", param.body.id).catch(() => { return false })
    return car
}

module.exports = {
    Car: {
        getCar,
        getCars,
        addCar,
        addimg
    }
}