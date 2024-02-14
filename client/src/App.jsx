import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './layouts/Root.jsx'
import Home from './pages/Home.jsx'
import Announcements from './pages/Announcements.jsx'
import Chat from './pages/Chat.jsx'

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
        path: '/chat',
        element: <Chat />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
