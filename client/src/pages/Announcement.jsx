import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Announcement() {
  const params = useParams()
  const announcement = useFetch(
    `${import.meta.env.VITE_REST_SERVER_URL}/announcements/${params.id}`,
  )

  // const announcement = useFetch(
  //   `https://codemates-server.onrender.com/announcements/${params.id}`,
  // )

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
