const { data } = require("../Controller/userCsv")
const express = require("express")
const router = express.Router()

router.post("/add", data.add)

module.exports = router
