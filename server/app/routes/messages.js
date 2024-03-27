const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/', async (req, res) => {
  try {
    const messages = await pool.query(`
            SELECT * FROM messages;
        `)
    res.json(messages.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `An error occurred during fetching the messages.`,
      details: error.message,
    })
  }
})

module.exports = router
