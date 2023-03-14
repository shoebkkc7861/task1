const { Lang } = require("../services/lang")
const { validation } = require("../validator/global")

const addLang = async (req, res) => {

    validation(req.body, res, {
        "lang": "required|string",
        "success": "required|string",
        "fail": "required|string",
    })

    const { error, data } = await Lang.addLang(req.body).catch((err) => { return { error: err } })
    if (error) {
        return res.send(`${error}`)
    }
    return res.send(data)
}



module.exports = {
    Lang: {
        addLang
    }
}