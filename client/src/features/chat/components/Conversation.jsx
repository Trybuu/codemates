import classes from './Conversation.module.scss'

export default function Conversation({ data, userId, senderId }) {
  const conversation = data.map((message) => {
    return (
      <div
        className={
          userId === message.sender_id
            ? `${classes['message']} ${classes['message--user']}`
            : classes['message']
        }
        key={message.message_id}
      >
        {message.message}
      </div>
    )
  })

  return (
    <section>
      <h1>Hej {userId}</h1>
      <h2>Konwersacja z {senderId}</h2>
      <div className={classes['messages']}>{conversation}</div>
    </section>
  )
}
