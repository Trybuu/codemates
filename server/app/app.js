const express = require('express')
const cors = require('cors')
const app = express()
const announcementsRouter = require('./routes/announcements')

app.use(cors())
app.use(express.json())

app.use('/announcements', announcementsRouter)

module.exports = app
