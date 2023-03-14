const express = require("express")
const router = express.Router()
const car = require("../Controller/Car")
const { validation } = require("../validator/carvalidator")

router.post("/add", validation.addCar, car.addCar)
router.get("/get", car.getCar)
router.get("/gets", car.getCars)
router.post("/addImg", car.carImg)


module.exports = router