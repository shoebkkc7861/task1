let express = require("express");
let app = express();
let apikey = require("./middleware/apikey")
const cors = require("./middleware/cors")
const config = require("./Config/config")
const fileupload = require("express-fileupload")

let route = require("./routes")

app.use(fileupload())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(cors)
// app.use(apikey)
app.use('/api', route)




app.listen(config.port, function () {
    console.log(`sever started at pot number ${config.port}`)
})