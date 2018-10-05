const express = require('express')
const path    = require('path')
const serveStatic = require('serve-static')

const app = express()
app.use(serveStatic(__dirname + "/dist"))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
})