const fs = require("fs")
const { csv } = require("../Model/userCsv")

const member = []


async function addData(param) {
    let data;
    fs.readFile("./csv/username.csv", "utf-8", (err, data) => {
        if (err) {
            return err
        }
        let lines = data.split("\n")
        let headers = lines[0].split(",")
        for (let i = 1; i < lines.length - 1; i++) {
            let currentLine = lines[i].split(",")
            let obj = {}
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentLine[j]
            }
            member.push(obj)
        }


        for (let k of member) {
            param.body = k
            data = csv.addData(param.body).catch((err) => { return err })
        }
    })
    return data
}

module.exports = {
    data: {
        addData
    }
}