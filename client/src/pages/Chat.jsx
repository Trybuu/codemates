import Introduction from '../components/introduction/Introduction'
import Messages from '../features/chat/Messages'

export default function Chat() {
  const intro = `Chat in general chat with other users, share ideas, ask questions, and make new contacts. General chat is a place where you can discuss a variety of topics and get to know the platform's community.`

  return (
    <div>
      <Introduction text={intro} />
      <h3>Chat Subpage</h3>
      <Messages />
    </div>
  )
}
