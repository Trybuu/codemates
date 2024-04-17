import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import formatDate from '../../../utils/formatDate'

import LoadingCircles from '../../../components/ui/loadings/LoadingCircles'
import InfoMessage from '../../../components/ui/messages/InfoMessage'
import AnnouncementStack from './AnnouncementStack'
import { CalendarIcon, UserIcon, HandshakeIcon } from './Icons'

import classes from './AnnouncementDetails.module.scss'
import ButtonFullWidth from '../../../components/ui/buttons/ButtonFullWidth'
import Modal from '../../../components/ui/modal/Modal'
import { useState } from 'react'

export default function AnnouncementDetails() {
  const [isOpen, setIsOpen] = useState(false)

  const params = useParams()
  const {
    data: announcement,
    isPending,
    error,
  } = useFetch(
    `${import.meta.env.VITE_REST_SERVER_URL}/announcements/${params.id}`,
  )

  function handleModalToggle() {
    setIsOpen(!isOpen)
  }

  if (isPending) return <LoadingCircles />
  if (error) return <InfoMessage type="error" info={error} />
  if (announcement) {
    const formattedDate = formatDate(announcement.date_posted)

    return (
      <>
        <Modal open={isOpen} onClose={handleModalToggle}>
          <h2>Send message to {announcement.username} to cooperate!</h2>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <ButtonFullWidth text={'Send the message'} />
        </Modal>

        <div className={classes['announcement']}>
          <div className={classes['announcement__posted-info']}>
            <div className={classes['announcement__author-and-date']}>
              <p>
                <UserIcon /> {announcement.username}
              </p>
              <p>
                <CalendarIcon /> {formattedDate.date}
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
            onClick={handleModalToggle}
          />
        </div>
      </>
    )
  }
}
