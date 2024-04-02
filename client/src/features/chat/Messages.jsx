import useFetch from '../../hooks/useFetch'
import LoadingCircles from '../../components/ui/loadings/LoadingCircles'
import InfoMessage from '../../components/ui/messages/InfoMessage'
import { useCookies } from 'react-cookie'

export default function Messages() {
  const [cookies] = useCookies()

  const {
    data: chat,
    isPending,
    error,
  } = useFetch(
    `${import.meta.env.VITE_REST_SERVER_URL}/messages/${cookies.UserId}`,
  )

  if (isPending) return <LoadingCircles />

  if (error)
    return (
      <InfoMessage
        type={'error'}
        info={'Can not fetch data from the server. Try again later.'}
      />
    )

  if (!Array.isArray(chat)) {
    return (
      <InfoMessage
        type={'error'}
        info={'Internal server error. Try again later.'}
      />
    )
  }

  if (chat && !isPending)
    return (
      <div>
        {chat.map((val, index) => {
          return (
            <div key={index}>
              <div>
                {val.username} | {val.sender_id} | {val.date}
              </div>
              <div>{val.message}</div>
            </div>
          )
        })}
      </div>
    )
}
