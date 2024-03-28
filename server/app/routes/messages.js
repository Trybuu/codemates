const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/:userId', async (req, res) => {
  const { userId } = req.params

  try {
    const messages = await pool.query(
      `
      SELECT DISTINCT ON (m.sender_id) 
      m.message_id, 
      m.sender_id, 
      m.receiver_id, 
      m.message, 
      m.date, 
      u.username
      FROM messages m
      INNER JOIN users u ON m.sender_id = u.user_id
      WHERE m.receiver_id = $1 
      ORDER BY m.sender_id, m.date DESC;
        `,
      [userId],
    )
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
