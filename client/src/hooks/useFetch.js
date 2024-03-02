import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()

        setData(data)
        setIsPending(false)
      } catch (err) {
        setError(err.message)
        setIsPending(false)
      }
    }

    getData()
  }, [url, isPending])

  return { data, isPending, error }
}

export default useFetch
