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

router.get('/conversation/:senderId/:userId', async (req, res) => {
  const { senderId, userId } = req.params

  try {
    const conversationMessages = await pool.query(
      `
      SELECT * 
      FROM messages 
      WHERE (sender_id = $1 OR sender_id = $2) AND (receiver_id = $1 OR receiver_id = $2) 
      ORDER BY date;
    `,
      [senderId, userId],
    )
    res.json(conversationMessages.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `An error occurred during fetching the messages.`,
      details: error.message,
    })
  }
})

router.post('/:senderId/:receiverId', async (req, res) => {
  try {
    // req.body
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `An error occurred during sending the message.`,
      details: error.message,
    })
  }
})

module.exports = router
