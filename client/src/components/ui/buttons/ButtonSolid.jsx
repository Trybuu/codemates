import classes from './ButtonSolid.module.scss'

export default function ButtonSolid({ children, ...props }) {
  return (
    <button {...props} className={classes['button-solid']}>
      {children}
    </button>
  )
}
