const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/', async (req, res) => {
  try {
    const technologies = await pool.query(`
    SELECT 
        *
    FROM 
        technologies;
    `)
    res.json(technologies.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

module.exports = router
