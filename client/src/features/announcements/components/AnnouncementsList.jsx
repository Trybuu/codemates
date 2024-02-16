import useFetch from '../../../hooks/useFetch'
import Announcement from './Announcement'

import classes from './AnnouncementsList.module.scss'

export default function AnnouncementsList() {
  const announcements = useFetch('http://localhost:8000/announcements')

  if (announcements) console.log(announcements)

  return (
    <div className={classes['list']}>
      {announcements?.map((announcement) => (
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
      ))}
    </div>
  )
}
