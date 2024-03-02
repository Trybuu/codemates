import useFetch from '../../../hooks/useFetch'
import Announcement from './Announcement'
import InfoMessage from '../../../components/ui/messages/InfoMessage'

import classes from './AnnouncementsList.module.scss'
import LoadingCircles from '../../../components/ui/loadings/LoadingCircles'

export default function AnnouncementsList() {
  const {
    data: announcements,
    isPending,
    error,
  } = useFetch(`${import.meta.env.VITE_REST_SERVER_URL}/announcements`)

  console.log(announcements)

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
      {error && <InfoMessage type={error} info={[error]} />}
      {isPending ? <LoadingCircles /> : announcementsContent}
    </div>
  )
}
