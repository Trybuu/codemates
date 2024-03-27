import useFetch from '../../hooks/useFetch'
import LoadingCircles from '../../components/ui/loadings/LoadingCircles'
import InfoMessage from '../../components/ui/messages/InfoMessage'

export default function Messages() {
  const {
    data: chat,
    isPending,
    error,
  } = useFetch('http://localhost:8000/messages')

  if (isPending) return <LoadingCircles />

  if (error)
    return (
      <InfoMessage
        type={'error'}
        info={'Can not fetch data from the server. Try again later.'}
      />
    )

  if (chat && !isPending)
    return (
      <div>
        <p>Messages</p>
        {chat.map((val) => val.message)}
      </div>
    )
}
