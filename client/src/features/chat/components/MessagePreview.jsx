import { useNavigate } from 'react-router-dom'
import classes from './MessagePreview.module.scss'
import formatDate from '../../../utils/formatDate'

export default function MessagePreview({
  username,
  date,
  message,
  receiverId,
  senderId,
}) {
  const formattedDate = formatDate(date)
  const messageShortened = message.slice(0, 50)

  const navigate = useNavigate()

  function openChat() {
    console.log('CHAT OPEN')
    navigate(`conversation/${senderId}`)
  }

  return (
    <div className={classes['message-preview']} onClick={openChat}>
      <div className={classes['user-icon']}>{username[0]}</div>
      <div>
        <div>
          {username} | {formattedDate.date} | receiver {receiverId} | sender{' '}
          {senderId}
        </div>
        <div>
          {messageShortened} {message.length > 50 ? '...' : null}
        </div>
      </div>
    </div>
  )
}
