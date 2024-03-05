import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import formatDate from '../../../utils/formatDate'

import LoadingCircles from '../../../components/ui/loadings/LoadingCircles'
import InfoMessage from '../../../components/ui/messages/InfoMessage'
import AnnouncementStack from './AnnouncementStack'
import { CalendarIcon, UserIcon, HandshakeIcon } from './Icons'

import classes from './AnnouncementDetails.module.scss'
import ButtonFullWidth from '../../../components/ui/buttons/ButtonFullWidth'

export default function AnnouncementDetails() {
  const params = useParams()
  const {
    data: announcement,
    isPending,
    error,
  } = useFetch(
    `${import.meta.env.VITE_REST_SERVER_URL}/announcements/${params.id}`,
  )

  if (isPending) return <LoadingCircles />
  if (error) return <InfoMessage type="error" info={error} />
  if (announcement)
    return (
      <div className={classes['announcement']}>
        <div className={classes['announcement__posted-info']}>
          <div className={classes['announcement__author-and-date']}>
            <p>
              <UserIcon /> {announcement.username}
            </p>
            <p>
              <CalendarIcon /> {formatDate(announcement.date_posted)}
            </p>
          </div>

          <h2>{announcement.title}</h2>
        </div>

        <div className={classes['announcement__short-description']}>
          <p>{announcement.short_description}</p>
        </div>

        <div className={classes['announcement__stack']}>
          <AnnouncementStack techStack={announcement.technology_names} />
        </div>
        <div className={classes['announcement__description']}>
          {announcement.description}
        </div>
        <ButtonFullWidth
          icon={<HandshakeIcon />}
          text={`Cooperate with ${announcement.username}!`}
        />
      </div>
    )
}
