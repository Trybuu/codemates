import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { useEffect } from 'react'

export default function Root() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
