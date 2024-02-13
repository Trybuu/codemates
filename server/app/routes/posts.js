const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/', async (req, res) => {
  try {
    const posts = await pool.query(`select * from posts`)

    res.set('Content-type', 'application/json')
    res.json(posts.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

module.exports = router
