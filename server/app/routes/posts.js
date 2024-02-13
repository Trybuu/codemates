const express = require('express')
const router = express.Router()
const pool = require('../db') // Importujemy moduł połączenia z bazą danych

router.get('/', async (req, res) => {
  try {
    const posts = await pool.query('SELECT * FROM posts') // Pobieramy posty z bazy danych
    res.json(posts.rows) // Zwracamy posty w formacie JSON
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

module.exports = router
