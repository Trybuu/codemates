const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/:sortBy', async (req, res) => {
  const { sortBy } = req.params

  try {
    if (sortBy === 'publishedAsc') {
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
        users.email
    ORDER BY
        announcements.date_posted ASC;
  `)
      res.json(announcements.rows)
    } else if (sortBy === 'publishedDesc') {
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
          users.email
      ORDER BY
          announcements.date_posted DESC;
    `)
      res.json(announcements.rows)
    } else if (sortBy === 'difficultyAsc') {
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
      users.email
  ORDER BY
      CASE announcements.level
          WHEN 'Beginner' THEN 1
          WHEN 'Intermediate' THEN 2
          WHEN 'Advanced' THEN 3
          WHEN 'Master' THEN 4
          ELSE 5
      END;
  
      `)
      res.json(announcements.rows)
    } else if (sortBy === 'difficultyDesc') {
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
      users.email
  ORDER BY
      CASE announcements.level
          WHEN 'Beginner' THEN 4
          WHEN 'Intermediate' THEN 3
          WHEN 'Advanced' THEN 2
          WHEN 'Master' THEN 1
          ELSE 5
      END;
  
      `)
      res.json(announcements.rows)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.get('/announcement/:announcementId', async (req, res) => {
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
        users.user_id,
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
        users.user_id,
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

router.post('/post', async (req, res) => {
  const {
    userId,
    title,
    shortDescription,
    longDescription,
    level,
    technologies,
  } = req.body

  try {
    if (
      !userId ||
      title.length < 10 ||
      shortDescription.length < 10 ||
      longDescription.length < 50 ||
      technologies.length < 1
    ) {
      return
    }

    const newAnnouncement = await pool.query(
      `
      INSERT INTO announcements (user_id, title, short_description, description, level)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING announcement_id;`,
      [userId, title, shortDescription, longDescription, level],
    )

    const newAnnouncementId = newAnnouncement.rows[0].announcement_id

    const addTechnologies = await pool.query(`
      INSERT INTO announcement_technologies(announcement_id, technology_id) VALUES ${technologies.map(
        (technology) => '(' + newAnnouncementId + ',' + technology + ')',
      )};
      `)
    res.json({
      userId,
      title,
      shortDescription,
      longDescription,
      level,
      technologies,
      newAnnouncementId,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `An error occurred during creating announcement.`,
      details: error.message,
    })
  }
})

module.exports = router
