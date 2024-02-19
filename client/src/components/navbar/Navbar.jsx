import { Link, NavLink } from 'react-router-dom'

import classes from './Navbar.module.scss'
import ButtonSolid from '../ui/buttons/ButtonSolid'

export default function Navbar() {
  const links = [
    {
      path: '/',
      linkName: 'Codemates',
    },
    {
      path: '/announcements',
      linkName: 'Announcements',
    },
    {
      path: '/chat',
      linkName: 'Chat',
    },
  ]

  return (
    <nav className={classes['nav']}>
      <div className={classes['wrapper']}>
        <ul className={classes['nav-links']}>
          {links.map((link, index) => {
            return (
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
            )
          })}
        </ul>

        <Link className={classes['nav-links__signin']} to={'/login'}>
          <ButtonSolid>Sign in</ButtonSolid>
        </Link>
      </div>
    </nav>
  )
}
