const { Lang } = require("../Model/lang")

async function addLang(params) {
    const { error, data } = await Lang.addLang(params).catch((err) => { return { error: err } })
    if (error) {
        return { error: error }
    }
    return { data: data }
}

module.exports = {
    Lang: {
        addLang
    }
}