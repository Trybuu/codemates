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
      <div
        style={{
          backgroundColor: 'blue',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <p style={{ maxWidth: '1440px', textAlign: 'center' }}>
          W celu przetestowania aplikacji zaloguj się za pomocą danych:
          <b> testuser1@mate.com Testuser123</b> oraz{' '}
          <b>testuser2@mate.com Testuser123</b> lub załóż konto
          <br />
          Hosting Render wyłącza usługę po dłuższej nieaktywności co może
          opóźniać żądania nawet o 50 sekund.
        </p>
      </div>
      <Navbar />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
