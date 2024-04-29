import { Link, useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import Conversation from '../features/chat/components/Conversation'
import { useEffect, useState } from 'react'
import BackButton from '../components/ui/buttons/BackButton'

export default function ConversationPage() {
  const [cookies] = useCookies()
  const { senderId } = useParams()
  const [conversationMessages, setConversationMessages] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_REST_SERVER_URL
          }/messages/conversation/${senderId}/${cookies.UserId}`,
        )
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await res.json()
        setConversationMessages(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()

    const intervalId = setInterval(fetchData, 2500)

    return () => clearInterval(intervalId)
  }, [senderId, cookies.UserId])

  if (conversationMessages)
    return (
      <div>
        <div>
          <Link to="/chat" path="relative">
            <BackButton />
          </Link>
        </div>
        <Conversation
          data={conversationMessages}
          userId={cookies.UserId}
          senderId={senderId}
        />
      </div>
    )
}
