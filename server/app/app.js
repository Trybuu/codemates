const express = require('express')
const cors = require('cors')
const app = express()
const postsRouter = require('./routes/posts')

app.use(cors())
app.use(express.json())

app.use('/posts', postsRouter)

module.exports = app
