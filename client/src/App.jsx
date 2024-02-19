import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './layouts/Root.jsx'
import Home from './pages/Home.jsx'
import Announcements from './pages/Announcements.jsx'
import Announcement from './pages/Announcement.jsx'
import Chat from './pages/Chat.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/announcements',
        element: <Announcements />,
      },
      {
        path: '/announcements/:id',
        element: <Announcement />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
