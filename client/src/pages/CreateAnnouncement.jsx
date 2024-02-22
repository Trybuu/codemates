import { useCookies } from 'react-cookie'
import Introduction from '../components/introduction/Introduction'
import InfoMessage from '../components/ui/messages/InfoMessage'

export default function CreateAnnouncement() {
  const [cookies, , ,] = useCookies()

  const token = cookies.AuthToken || false

  const intro =
    'Below is an announcement creator. Remember to include as much information as possible in it to attract other users and increase your chances of collaboration. You can only place one announcement per month. Remember that your announcement will expire one month after publication.'

  return (
    <>
      <Introduction text={intro} />
      {!token && (
        <InfoMessage
          type={'warning'}
          info={'You must be logged in to post an announcement!'}
        />
      )}
    </>
  )
}
