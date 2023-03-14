let express = require("express")
let app = express();
let cors = require("cors")

app.use(cors({
    origin: function (origin, cb) {
        whitelist = ["car.abc"]
        if (whitelist.indexOf(origin) == -1) {
            return cb(new Error("Access Denied"), false);
        }
        cb(null, true)
    }
}))

module.exports = app;