const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/', async (req, res) => {
  try {
    const announcements = await pool.query(`
    SELECT 
      announcements.announcement_id,
      announcements.title,
      announcements.short_description,
      announcements.description,
      announcements.level,
      announcements.date_posted,
      users.username,
      users.email,
      ARRAY_AGG(technologies.name) AS technology_names
    FROM 
        announcements
    JOIN 
        users ON announcements.user_id = users.user_id
    JOIN 
        announcement_technologies ON announcements.announcement_id = announcement_technologies.announcement_id
    JOIN 
        technologies ON announcement_technologies.technology_id = technologies.technology_id
    GROUP BY
        announcements.announcement_id,
        announcements.title,
        announcements.short_description,
        announcements.description,
        announcements.level,
        announcements.date_posted,
        users.username,
        users.email;
  `)
    res.json(announcements.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.get('/:announcementId', async (req, res) => {
  try {
    const { announcementId } = req.params
    const announcement = await pool.query(
      `
      SELECT 
        announcements.announcement_id,
        announcements.title,
        announcements.short_description,
        announcements.description,
        announcements.level,
        announcements.date_posted,
        users.username,
        users.email,
        ARRAY_AGG(technologies.name) AS technology_names
      FROM 
        announcements
      JOIN 
        users ON announcements.user_id = users.user_id
      JOIN 
        announcement_technologies ON announcements.announcement_id = announcement_technologies.announcement_id
      JOIN 
        technologies ON announcement_technologies.technology_id = technologies.technology_id
      WHERE
        announcements.announcement_id = $1
      GROUP BY
        announcements.announcement_id,
        announcements.title,
        announcements.short_description,
        announcements.description,
        announcements.level,
        announcements.date_posted,
        users.username,
        users.email;
    `,
      [announcementId],
    )
    if (announcement.rows.length === 0) {
      return res.status(404).json({ message: 'Announcement not found' })
    }
    res.json(announcement.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

module.exports = router
