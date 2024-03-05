import classes from './ButtonOutline.module.scss'
export default function ButtonOutline({ children, ...props }) {
  return (
    <button {...props} className={classes['button-outline']}>
      {children}
    </button>
  )
}
