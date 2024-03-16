import { FaBars, FaTimes, FaRegBell } from 'react-icons/fa'
import { useRef } from 'react'
import { useCookies } from 'react-cookie'
import { Link, NavLink } from 'react-router-dom'
import classes from './Navbar.module.scss'

const Navbar = () => {
  const [cookies, , removeCookie] = useCookies(null)

  const token = cookies.AuthToken
  const username = cookies.Username

  const links = [
    { path: '/announcements', linkName: 'Announcements' },
    { path: '/chat', linkName: 'Chat' },
    { path: '/createannouncement', linkName: 'Create Announcement' },
  ]

  const handleLogOut = () => {
    removeCookie('AuthToken')
    removeCookie('Email')
    removeCookie('Username')
    window.location.reload()
  }

  const navRef = useRef()

  const toggleNavbar = () => {
    navRef.current.classList.toggle(classes['responsive-nav'])
  }

  return (
    <header>
      <NavLink to={'/'}>
        <h2 className={classes.logo}>Codemates</h2>
      </NavLink>

      <nav ref={navRef} className={classes['nav']}>
        <div className={classes['nav__links']}>
          {links.map((link, index) => (
            <NavLink
              to={link.path}
              key={index}
              className={classes['nav__link']}
            >
              {link.linkName}
            </NavLink>
          ))}
        </div>

        <div className={classes['user-panel']}>
          <div className={classes['user-panel__user-info']}>
            {username && <FaRegBell />}
            <p className={classes['user-panel__username']}>
              {username && username}
            </p>
          </div>

          {token ? (
            <button
              className={classes['nav__login-btn']}
              onClick={handleLogOut}
            >
              Sign out
            </button>
          ) : (
            <Link className={classes['nav__login-link']} to={'/login'}>
              Sign in
            </Link>
          )}
        </div>

        <button
          onClick={toggleNavbar}
          className={`${classes['nav-button']} ${classes['nav-button--close']}`}
        >
          <FaTimes />
        </button>
      </nav>

      <button
        onClick={toggleNavbar}
        className={`${classes['nav-button']} ${classes['nav-button--open']}`}
      >
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar
