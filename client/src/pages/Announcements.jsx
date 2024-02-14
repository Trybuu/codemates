import { useEffect, useState } from 'react'

export default function Announcements() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      try {
        // const res = await fetch(`http://localhost:8000/posts`)
        const res = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/posts`)
        const data = await res.json()

        setPosts(data)
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }

    getPosts()
  }, [])

  if (posts) console.log(posts)

  return (
    <div>
      <h3>Building in progress...</h3>
      <h4>Posts</h4>
      {posts &&
        posts.map((post, index) => {
          return (
            <div key={index}>
              <h5>{post.title}</h5>
              <p>{post.description}</p>
            </div>
          )
        })}
    </div>
  )
}
