const express = require('express')
const router = express.Router()
const pool = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
  const { userName, email, password } = req.body
  try {
    if (!password) {
      return res.status(400).json({ error: 'Password is required.' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const signUp = await pool.query(
      `
          INSERT INTO users (username, email, password_hash, nationality)
          VALUES ($1, $2, $3, 'PL');
        `,
      [userName, email, hashedPassword],
    )

    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
    res.json({ email, token })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'An error occurred during signup.',
      details: error.message,
    })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const users = await pool.query('SELECT * FROM users where email = $1', [
      email,
    ])

    if (!users.rows.length) return res.json({ detail: 'User does not exist!' })

    const success = await bcrypt.compare(password, users.rows[0].password_hash)
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })

    if (success) {
      res.json({
        email: users.rows[0].email,
        username: users.rows[0].username,
        token,
      })
    } else {
      res.json({ detail: 'Login failed' })
    }
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
