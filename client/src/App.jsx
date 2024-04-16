import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import Root from './layouts/Root.jsx'
import Home from './pages/Home.jsx'
import Announcements from './pages/Announcements.jsx'
import Announcement from './pages/Announcement.jsx'
import Chat from './pages/Chat.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import CreateAnnouncement from './pages/CreateAnnouncement.jsx'
import ConversationPage from './pages/ConversationPage.jsx'

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
        path: '/createannouncement',
        element: <CreateAnnouncement />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/chat/conversation/:senderId',
        element: <ConversationPage />,
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
