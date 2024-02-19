import classes from './ButtonSolid.module.scss'

export default function ButtonSolid({ children }) {
  return <button className={classes['button-solid']}>{children}</button>
}
