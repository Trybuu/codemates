import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()

        setData(data)
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }

    getData()
  }, [url])

  return data
}

export default useFetch
