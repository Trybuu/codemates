const express = require('express')
const cors = require('cors')
const app = express()
const announcementsRouter = require('./routes/announcements')
const authRouter = require('./routes/auth')
const technologiesRouter = require('./routes/technologies')

app.use(cors())
app.use(express.json())

app.use('/announcements', announcementsRouter)
app.use('/auth', authRouter)
app.use('/technologies', technologiesRouter)

module.exports = app
