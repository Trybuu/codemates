import useFetch from '../../../hooks/useFetch'
import Announcement from './Announcement'

import classes from './AnnouncementsList.module.scss'

export default function AnnouncementsList() {
  const announcements = useFetch(
    `${import.meta.env.VITE_REST_SERVER_URL}/announcements`,
  )

  console.log(announcements)

  // const announcements = useFetch(
  //   `https://codemates-server.onrender.com/announcements`,
  // )

  const announcementsContent = announcements?.map((announcement) => (
    <Announcement
      key={announcement.announcement_id}
      id={announcement.announcement_id}
      title={announcement.title}
      date={announcement.date_posted}
      author={announcement.username}
      shortDescription={announcement.short_description}
      level={announcement.level}
      techStack={announcement.technology_names}
    />
  ))

  return (
    <div className={classes['list']}>
      {announcementsContent ? announcementsContent : <p>Fetching...</p>}
    </div>
  )
}
