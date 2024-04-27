import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import formatDate from '../../../utils/formatDate'

import LoadingCircles from '../../../components/ui/loadings/LoadingCircles'
import InfoMessage from '../../../components/ui/messages/InfoMessage'
import AnnouncementStack from './AnnouncementStack'
import { CalendarIcon, UserIcon, HandshakeIcon } from './Icons'
import { BiMessageCheck } from 'react-icons/bi'

import classes from './AnnouncementDetails.module.scss'
import ButtonFullWidth from '../../../components/ui/buttons/ButtonFullWidth'
import Modal from '../../../components/ui/modal/Modal'
import { useRef, useState } from 'react'
import { useCookies } from 'react-cookie'

export default function AnnouncementDetails() {
  const [cookies] = useCookies()
  const [isOpen, setIsOpen] = useState(false)
  const [isMessageSend, setIsMessageSend] = useState(false)

  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_REST_SERVER_URL}/messages/conversation/${
            announcement.user_id
          }/${cookies.UserId}`,
        )
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await res.json()

        data.filter((message) => {
          if (
            message.sender_id === cookies.UserId ||
            message.sender_id === announcement.user_id
          ) {
            return message
          }
        })

        if (data.length > 0 || announcement.user_id === cookies.UserId) {
          setIsMessageSend(true)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  })

  const {
    data: announcement,
    isPending,
    error,
  } = useFetch(
    `${import.meta.env.VITE_REST_SERVER_URL}/announcements/${params.id}`,
  )

  const textAreaRef = useRef()

  function handleModalToggle() {
    setIsOpen(!isOpen)
  }

  async function submitMessage(e) {
    e.preventDefault()
    const message = {
      senderId: cookies.UserId,
      receiverId: announcement.user_id,
      text: textAreaRef.current.value,
    }

    setIsMessageSend(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REST_SERVER_URL}/messages/${cookies.UserId}/${
          announcement.user_id
        }`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(message),
        },
      )
      const data = await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  if (isPending) return <LoadingCircles />
  if (error) return <InfoMessage type="error" info={error} />
  if (announcement) {
    const formattedDate = formatDate(announcement.date_posted)

    return (
      <>
        {!isMessageSend ? (
          <Modal open={isOpen} onClose={handleModalToggle}>
            <div>
              <h2>Send message to {announcement.username} to cooperate!</h2>
              <form
                onSubmit={(e) => submitMessage(e)}
                className={classes['form']}
              >
                <textarea
                  name=""
                  id=""
                  className={classes['form__textarea']}
                  cols="30"
                  rows="10"
                  ref={textAreaRef}
                ></textarea>
                <ButtonFullWidth
                  text={'Send the message'}
                  className={classes['form__submit']}
                />
              </form>
            </div>
          </Modal>
        ) : (
          <Modal open={isOpen} onClose={handleModalToggle}>
            <div className={classes['message']}>
              <p>
                <BiMessageCheck className={classes['message__icon']} />
              </p>
              <h2>Your message has been sent!</h2>
              <p>Please wait for a response</p>
            </div>
          </Modal>
        )}

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
            disabled={!cookies.UserId || isMessageSend}
          />
        </div>
      </>
    )
  }
}
