let express = require("express")
let router = express.Router();

const car = require("./router/car")
const product = require("./router/Product")
const lang = require("./router/lang")
const userCsv = require("./router/userCsv")

router.use("/car", car)
router.use("/product", product)
router.use("/lang", lang)
router.use("/csv", userCsv)


module.exports = router;
