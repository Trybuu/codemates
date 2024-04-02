import classes from './MessagePreview.module.scss'
import formatDate from '../../../utils/formatDate'

export default function MessagePreview({ username, date, message }) {
  const messageShortened = message.slice(0, 50)

  function openChat() {
    console.log('CHAT OPEN')
  }

  return (
    <div className={classes['message-preview']} onClick={openChat}>
      <div className={classes['user-icon']}>{username[0]}</div>
      <div>
        <div>
          {username} | {formatDate(date)}
        </div>
        <div>
          {messageShortened} {message.length > 50 ? '...' : null}
        </div>
      </div>
    </div>
  )
}
