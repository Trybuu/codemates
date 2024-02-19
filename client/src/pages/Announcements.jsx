import Introduction from '../components/introduction/Introduction'
import { AnnouncementsList } from '../features/announcements'

export default function Announcements() {
  const intro =
    'Przejrzyj ogłoszenia użytkowników poszukujących partnerów do współpracy nad różnorodnymi projektami. Znajdź idealnego partnera do realizacji swoich pomysłów lub dołącz do innowacyjnych projektów, szukając ogłoszeń pasujących do Twoich umiejętności i zainteresowań. '

  return (
    <>
      <Introduction text={intro} />
      <AnnouncementsList />
    </>
  )
}
