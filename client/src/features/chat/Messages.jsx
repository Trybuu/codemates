import useFetch from '../../hooks/useFetch'
import LoadingCircles from '../../components/ui/loadings/LoadingCircles'
import InfoMessage from '../../components/ui/messages/InfoMessage'
import { useCookies } from 'react-cookie'
import MessagePreview from './components/MessagePreview'

export default function Messages() {
  const [cookies] = useCookies()

  const {
    data: chat,
    isPending,
    error,
  } = useFetch(
    `${import.meta.env.VITE_REST_SERVER_URL}/messages/${cookies.UserId}`,
  )

  console.log(chat)

  if (isPending) return <LoadingCircles />

  if (error)
    return (
      <InfoMessage
        type={'error'}
        info={'Can not fetch data from the server. Try again later.'}
      />
    )

  if (!Array.isArray(chat) && !cookies.UserId) {
    return (
      <InfoMessage
        type={'warning'}
        info={'You must be logged in to use chat!'}
      />
    )
  }

  if (chat && !isPending)
    return (
      <div>
        {chat.map((val, index) => {
          return (
            <MessagePreview
              key={index}
              username={val.username}
              date={val.date}
              message={val.message}
              receiverId={val.receiver_id}
              senderId={val.sender_id}
            />
          )
        })}
      </div>
    )
}
