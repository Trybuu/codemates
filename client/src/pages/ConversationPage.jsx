import { useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import Conversation from '../features/chat/components/Conversation'
import { useEffect, useState } from 'react'

export default function ConversationPage() {
  const [cookies] = useCookies()
  const { senderId } = useParams()
  const [conversationMessages, setConversationMessages] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/messages/conversation/${senderId}/${cookies.UserId}`,
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

    const intervalId = setInterval(fetchData, 5000)

    return () => clearInterval(intervalId)
  }, [senderId, cookies.UserId])

  if (!Array.isArray(conversationMessages)) {
    return <h3>Data nie jest tablicą!</h3>
  }

  if (conversationMessages)
    return (
      <div>
        <Conversation
          data={conversationMessages}
          userId={cookies.UserId}
          senderId={senderId}
        />
      </div>
    )
}
