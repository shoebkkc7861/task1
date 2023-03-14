let express = require("express")


async function apikey(req, res, next) {

    if (!req.headers || !req.headers.apikey) {
        return res.status(400).send({ message: "please enter apikey" })
    }
    if (req.headers.apikey != 'shoeb786') {
        return res.status(401).send({ message: "Access Denied" })
    }
    next();
}

module.exports = apikey 