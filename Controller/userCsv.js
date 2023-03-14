const { data } = require("../services/userCsv")

async function add(req, res) {
    const user = await data.addData(req).catch((err) => { return err })
    return res.send(user)
}

module.exports = {
    data: {
        add
    }
}