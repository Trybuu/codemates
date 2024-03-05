import { useCookies } from 'react-cookie'
import { Link, NavLink } from 'react-router-dom'

import ButtonSolid from '../ui/buttons/ButtonSolid'
import Logo from '../ui/logo/Logo'

import classes from './Navbar.module.scss'

export default function Navbar() {
  const [cookies, , removeCookie] = useCookies(null)

  const token = cookies.AuthToken
  const username = cookies.Username

  function handleLogOut() {
    removeCookie('AuthToken')
    removeCookie('Email')
    removeCookie('Username')

    window.location.reload()
  }

  const links = [
    {
      path: '/announcements',
      linkName: 'Announcements',
    },
    {
      path: '/chat',
      linkName: 'Chat',
    },
    {
      path: '/createannouncement',
      linkName: 'Create Announcement',
    },
  ]

  return (
    <nav className={classes['nav']}>
      <div className={classes['content']}>
        <ul className={classes['nav-links']}>
          <li>
            <NavLink to={'/'}>
              <Logo />
            </NavLink>
          </li>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? `${classes['nav-links__link']} ${classes['nav-links__link--active']}`
                    : classes['nav-links__link']
                }
                end
              >
                {link.linkName}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={classes['right-side']}>
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
      </div>
    </nav>
  )
}
