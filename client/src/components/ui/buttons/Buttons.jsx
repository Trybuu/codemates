import { FaTimes, FaBars } from 'react-icons/fa'
import classes from './Buttons.module.scss'

export function ButtonOpenMenu({ visibility, ...props }) {
  return (
    <button
      {...props}
      className={`${classes['button']} ${classes['button--open']} ${
        visibility && classes[`button--${visibility}`]
      }`}
    >
      <FaBars />
    </button>
  )
}

export function ButtonClose({ visibility, ...props }) {
  return (
    <button
      {...props}
      className={`${classes['button']} ${classes['button--close']} ${
        visibility && classes[`button--${visibility}`]
      }`}
    >
      <FaTimes />
    </button>
  )
}
