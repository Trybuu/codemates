function formatDate(date) {
  const dateObject = new Date(date)

  const day = String(dateObject.getDate()).padStart(2, '0')
  const month = String(dateObject.getMonth() + 1).padStart(2, '0')
  const year = dateObject.getFullYear()

  const hours = String(dateObject.getHours()).padStart(2, '0')
  const minutes = String(dateObject.getMinutes()).padStart(2, '0')

  const formattedDate = `${day}-${month}-${year}`
  const formattedTime = `${hours}:${minutes}`

  return { date: formattedDate, time: formattedTime }
}

export default formatDate
