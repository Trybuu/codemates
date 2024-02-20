import Introduction from '../components/introduction/Introduction'
import { AnnouncementsList } from '../features/announcements'

export default function Announcements() {
  const intro =
    'Browse through announcements from users looking for partners to collaborate on various projects. Find the perfect partner to implement your ideas or join innovative projects by looking for ads that match your skills and interests.'

  return (
    <>
      <Introduction text={intro} />
      <AnnouncementsList />
    </>
  )
}
