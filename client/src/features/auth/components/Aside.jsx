import classes from './Aside.module.scss'

export default function Aside() {
  return (
    <aside className={classes['aside']}>
      <p className={classes['title']}>
        <span className={classes['title__first']}>C</span>
        <span className={classes['title__rest']}>odemates 2024</span>
        <p>Join Codemates and spread your wings in the world of programming!</p>
      </p>
    </aside>
  )
}
