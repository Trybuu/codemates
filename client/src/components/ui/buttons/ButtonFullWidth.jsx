import classes from './ButtonFullWidth.module.scss'

export default function ButtonFullWidth({ icon, text, ...props }) {
  return (
    <button {...props} className={classes['button']}>
      {icon}
      {` ${text}`}
    </button>
  )
}
