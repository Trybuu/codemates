import { WarningIcon } from './Icons'
import classes from './InfoMessage.module.scss'

export default function InfoMessage({ type, info }) {
  return (
    <div className={`${classes['info']} ${classes[`${type}`]} `}>
      <WarningIcon />
      <div className={classes['info__content']}>
        <p className={classes['info__text']}>{info}</p>
      </div>
    </div>
  )
}
