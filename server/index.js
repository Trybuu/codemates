require('dotenv').config()
const cors = require('cors')
const express = require('express')

const app = express()
const pool = require('./db')

app.use(cors())
app.use(express.json())

const PORT = process.env.SERVER_PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/posts', async (req, res) => {
  try {
    const posts = await pool.query(`select * from posts`)

    res.set('Content-type', 'application/json')
    res.json(posts.rows)
  } catch (err) {
    console.error(err)
  }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
