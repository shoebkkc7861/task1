let { Car } = require("../Model/Car")
const { Lang } = require("../Model/lang")

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
    let img = await Car.addimg(param).catch((err) => { return err })
    return { data: img }
}

async function getCar(param) {
    let message = await Lang.getMessage(param).catch((err) => { return err })
    let car = await Car.getCar(param).catch((err) => { return err })
    if (car.length == 0) {
        return message[0].fail
    }
    let data = {
        message: message[0].success,
        car: car
    }

    return JSON.stringify(data)

}


module.exports = {
    Car: {
        getCar,
        AddCar,
        getCars,
        CarImg
    }
}