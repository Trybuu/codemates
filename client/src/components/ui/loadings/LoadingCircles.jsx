import classes from './LoadingCircles.module.scss'

export default function LoadingCircles() {
  return (
    <div className={classes['loading']}>
      <div
        className={`${classes['loading__circle']} ${classes['loading__circle--1']}`}
      ></div>
      <div
        className={`${classes['loading__circle']} ${classes['loading__circle--2']}`}
      ></div>
      <div
        className={`${classes['loading__circle']} ${classes['loading__circle--3']}`}
      ></div>
    </div>
  )
}
