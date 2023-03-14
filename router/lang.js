const { Lang } = require("../Controller/lang")
const express = require("express")
const router = express.Router()

router.post("/add", Lang.addLang)


module.exports = router
