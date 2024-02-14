import { NavLink } from 'react-router-dom'

import classes from './Navbar.module.scss'

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
    </nav>
  )
}
