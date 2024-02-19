import classes from './Introduction.module.scss'

export default function Introduction({ text }) {
  return <p className={classes['text']}>{text}</p>
}
