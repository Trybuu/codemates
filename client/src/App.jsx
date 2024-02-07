import { useEffect, useState } from 'react'
// import axios from 'axios'
import './App.css'

function App() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/posts`)
        const data = await res.json()

        setPosts(data)
      } catch (err) {
        console.error(err)
      }
    }

    getPosts()
  }, [])

  if (posts) console.log(posts)

  return (
    <div>
      <h3>Hello World</h3>
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

export default App
