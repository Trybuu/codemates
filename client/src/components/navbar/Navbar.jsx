import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import { useCookies } from 'react-cookie'
import { Link, NavLink } from 'react-router-dom'
import { BellIcon } from './Icons'
import ButtonSolid from '../ui/buttons/ButtonSolid'
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
        <h3>Codemates</h3>
      </NavLink>

      <nav ref={navRef} className={classes['nav']}>
        <div className={classes['nav__links']}>
          {links.map((link, index) => (
            <NavLink to={link.path} key={index}>
              {link.linkName}
            </NavLink>
          ))}
        </div>

        <div className={classes['nav__user-panel']}>
          <BellIcon />
          <p>{username ? username : null}</p>

          {token ? (
            <ButtonSolid
              className={classes['nav-links__signin']}
              onClick={handleLogOut}
            >
              Sign out
            </ButtonSolid>
          ) : (
            <Link className={classes['nav-links__signin']} to={'/login'}>
              <ButtonSolid>Sign in</ButtonSolid>
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
