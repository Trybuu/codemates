import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import LoadingCircles from '../components/ui/loadings/LoadingCircles'
import InfoMessage from '../components/ui/messages/InfoMessage'

export default function Announcement() {
  const params = useParams()
  const {
    data: announcement,
    isPending,
    error,
  } = useFetch(
    `${import.meta.env.VITE_REST_SERVER_URL}/announcements/${params.id}`,
  )

  // const announcement = useFetch(
  //   `https://codemates-server.onrender.com/announcements/${params.id}`,
  // )
  if (isPending) return <LoadingCircles />
  if (error) return <InfoMessage type="error" info={error} />
  if (announcement)
    return (
      <div>
        <div>
          <p>{announcement?.username}</p>
          <p>{announcement?.date_posted}</p>
          <h2>{announcement?.title}</h2>
          <p>{announcement?.short_description}</p>
        </div>
        <div>
          {announcement?.technology_names.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>
        <div>{announcement?.description}</div>
        <button>{`Let's cooperate!`}</button>
      </div>
    )
}
