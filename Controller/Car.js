let { Car } = require("../services/Car")

const carObj = {}

carObj.getCars = async (req, res) => {
    let { data, error } = await Car.getCars().catch((err) => { return { error: err } })
    if (error) {
        return res.send(error)
    }

    return res.send(data)
}

carObj.addCar = async (req, res) => {
    let data = await Car.AddCar(req.body).catch((err) => { return err })
    if (data.err) {
        res.send(err)
    }

    return res.send("Data inserted successfully")

}

carObj.carImg = async (req, res) => {
    let data = await Car.CarImg(req.body).catch((err) => { return { error: err } })
    if (data.error) {
        return res.send("error")
    }
    return res.send(data.data)
}


carObj.getCar = async (req, res) => {
    let data = await Car.getCar(req).catch((err) => { return err })
    return res.send(`${data}`)
}
module.exports = carObj