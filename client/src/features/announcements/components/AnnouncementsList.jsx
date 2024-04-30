import useFetch from '../../../hooks/useFetch'
import AnnouncementsFilter from './AnnouncementsFilter'
import Announcement from './Announcement'
import InfoMessage from '../../../components/ui/messages/InfoMessage'

import classes from './AnnouncementsList.module.scss'
import LoadingCircles from '../../../components/ui/loadings/LoadingCircles'
import { useState } from 'react'

export default function AnnouncementsList() {
  const [sortBy, setSortBy] = useState('difficultyDesc') // publishedAsc, publishedDesc, difficultyAsc, difficultyDesc

  function sortByMethod(method) {
    setSortBy(method)
  }

  const {
    data: announcements,
    isPending,
    error,
  } = useFetch(
    `${import.meta.env.VITE_REST_SERVER_URL}/announcements/${sortBy}`,
  )

  if (isPending) {
    return (
      <div className={classes['list']}>
        <LoadingCircles />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classes['list']}>
        <InfoMessage
          type={'error'}
          info={'Failed to fetch announcements, please try again later.'}
        />
      </div>
    )
  }

  if (!Array.isArray(announcements)) {
    return (
      <div className={classes['list']}>
        <InfoMessage
          type={'error'}
          info={'Failed to fetch announcements, please try again later.'}
        />
      </div>
    )
  }

  const announcementsContent = announcements.map((announcement) => (
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
    <>
      <AnnouncementsFilter handleSortByMethod={sortByMethod} />
      <div className={classes['list']}>{announcementsContent}</div>
    </>
  )
}
