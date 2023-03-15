
async function abc(param) {
    if (!param.status) {
        return 403
    }

    else if (param.status === true) {
        return 200
    }
    else {
        return 400
    }
}


module.exports = abc