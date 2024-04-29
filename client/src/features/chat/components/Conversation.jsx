import { useEffect, useRef } from 'react'
import formatDate from '../../../utils/formatDate'
import classes from './Conversation.module.scss'

import { IoSend } from 'react-icons/io5'

export default function Conversation({ data, userId, senderId }) {
  const messagesRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }, [data.length])

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

  async function submitMessage(e) {
    e.preventDefault()
    const message = {
      senderId: userId,
      receiverId: senderId,
      text: inputRef.current.value,
    }

    if (message.text.length === 0) return

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REST_SERVER_URL}/messages/${message.senderId}/${
          message.receiverId
        }`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(message),
        },
      )

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      console.log(data) // Możesz obsłużyć odpowiedź serwera tutaj, jeśli to konieczne
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <section>
      <div className={classes['messages']} ref={messagesRef}>
        {conversation}
      </div>
      <form
        onSubmit={(e) => {
          submitMessage(e)
          inputRef.current.value = ''
        }}
        className={classes['form']}
      >
        <input type="text" className={classes['form__input']} ref={inputRef} />
        <button className={classes['form__button']}>
          <IoSend />
        </button>
      </form>
    </section>
  )
}
