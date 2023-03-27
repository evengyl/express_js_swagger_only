require("dotenv").config()
const port = process.env.PORT


const express = require("express")
const app = express()
app.use(express.json())


const expressJsDocSwagger = require("express-jsdoc-swagger")
const swaggerOptions = require("./swaggerOptions")
expressJsDocSwagger(app)(swaggerOptions)




const router = require("./routers/router")
app.use("/api", router)


app.use((error, req, res, next) => {
    console.log(error)
    res.status(500).json(error)
})


app.listen(port, console.log("server ok"))

