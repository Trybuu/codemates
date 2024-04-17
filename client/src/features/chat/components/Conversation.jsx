import { useEffect, useRef } from 'react'
import formatDate from '../../../utils/formatDate'
import classes from './Conversation.module.scss'

import { IoSend } from 'react-icons/io5'

export default function Conversation({ data, userId, senderId }) {
  const messagesRef = useRef()

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }, [])

  const conversation = data.map((message) => {
    const formattedDate = formatDate(message.date)

    return (
      <div
        key={message.message_id}
        className={
          userId === message.sender_id
            ? `${classes['message']} ${classes['message--user']}`
            : classes['message']
        }
      >
        <div className={classes['message__text']}>{message.message}</div>
        <div className={classes['message__date']}>
          <p>
            {formattedDate.date}
            <span> </span>
            {formattedDate.time}
          </p>
        </div>
      </div>
    )
  })

  return (
    <section>
      <div className={classes['messages']} ref={messagesRef}>
        {conversation}
      </div>
      <form action="" className={classes['form']}>
        <input type="text" className={classes['form__input']} />
        <button className={classes['form__button']}>
          <IoSend />
        </button>
      </form>
    </section>
  )
}
