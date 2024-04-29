import Introduction from '../components/introduction/Introduction'
import Messages from '../features/chat/Messages'

export default function Chat() {
  const intro = `Chat with users you want to collaborate with.`

  return (
    <div>
      <Introduction text={intro} />
      <Messages />
    </div>
  )
}
