import { WarningIcon } from './Icons'
import classes from './InfoMessage.module.scss'

export default function InfoMessage({ type, info }) {
  return (
    <div className={`${classes['info']} ${classes[`${type}`]} `}>
      <WarningIcon />
      <div className={classes['info__content']}>
        {typeof info === String ? (
          <p className={classes['info__text']}>{info}</p>
        ) : (
          info.map((i, index) => <p key={index}>{i}</p>)
        )}
      </div>
    </div>
  )
}
