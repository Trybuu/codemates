import { NavLink } from 'react-router-dom'

import classes from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={classes['nav']}>
      <ul className={classes['nav-links']}>
        <li>
          <NavLink className={classes['nav-links__link']} to={'/'}>
            Codemates
          </NavLink>
        </li>
        <li>
          <NavLink className={classes['nav-links__link']} to={'/announcements'}>
            Announcements
          </NavLink>
        </li>
        <li>
          <NavLink className={classes['nav-links__link']} to={'/chat'}>
            Chat
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
