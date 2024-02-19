import Introduction from '../components/introduction/Introduction'

export default function Chat() {
  const intro =
    'Rozmawiaj na czacie ogólnym z innymi użytkownikami, dziel się pomysłami, zadawaj pytania, oraz nawiąż nowe kontakty. Czat ogólny to miejsce, gdzie możesz dyskutować na różnorodne tematy i poznać społeczność platformy.'

  return (
    <div>
      <Introduction text={intro} />
      <h3>Chat Subpage</h3>
    </div>
  )
}
