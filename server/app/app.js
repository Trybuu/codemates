const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const announcementsRouter = require('./routes/announcements')
const authRouter = require('./routes/auth')
const technologiesRouter = require('./routes/technologies')

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'client')))

app.use('/announcements', announcementsRouter)
app.use('/auth', authRouter)
app.use('/technologies', technologiesRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

module.exports = app
