let knex = require("../db/conection")

async function addLang(params) {
    let lang = await knex("Message").insert(params).catch((err) => { return { error: err } })
    if (lang.error) {
        return { error: lang.error }
    }
    return { data: lang }
}

async function getMessage(params) {
    let lang = await knex("Message").where("lang", params.body.lang).catch(() => { return false })
    if (lang.length == 0 || !lang) {
        lang = await knex("Message").where("lang", "english").catch(() => { return false })
    }
    return lang
}

module.exports = {
    Lang: {
        addLang,
        getMessage
    }
}