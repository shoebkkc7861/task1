const product = require("../Controller/Product")
const express = require("express")
const router = express.Router()

router.post("/add", product.add)
router.post("/multiple", product.addMultiple)

module.exports = router
