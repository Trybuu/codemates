import { WarningIcon } from './Icons'
import classes from './InfoMessage.module.scss'

export default function InfoMessage({ type, info }) {
  return (
    <div className={`${classes['info']} ${classes[`${type}`]} `}>
      <WarningIcon />
      <p>{info}</p>
    </div>
  )
}
