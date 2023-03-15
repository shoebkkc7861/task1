let { Car } = require("../Model/Car")
const { Lang } = require("../Model/lang")
const { msg } = require("../db/conection")



async function getCars() {
    let getCars = await Car.getCars().catch(() => { return false })
    if (!getCars) {
        return { error: "not data" }
    }
    return { data: getCars }
}


async function AddCar(param) {
    let addCar = await Car.addCar(param).catch((err) => { return err })
    return { data: addCar }
}

async function CarImg(param) {
    let img = await Car.addimg(param).catch((err) => { return { error: err } })
    if (img.error) {
        return { message: img.error }
    }
    return { data: img }
}

async function getCar(param) {

    let message = await msg
    let msgData;

    for (let i of message) {
        if (i.lang === param.body.lang) {
            msgData = i
        }
    }



    let car = await Car.getCar(param).catch((err) => { return err })
    if (car.length == 0) {
        let data = {
            message: msgData.fail,
            status: false
        }
        return data
    }
    let data = {
        message: msgData.success,
        car: car,
        status: true
    }

    return data

}



module.exports = {
    Car: {
        getCar,
        AddCar,
        getCars,
        CarImg
    }
}