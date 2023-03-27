const router = require("express").Router()

const routerTrack = require("./track.router")

router.use("/tracks", routerTrack)

module.exports = router