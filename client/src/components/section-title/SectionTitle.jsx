import classes from './SectionTitle.module.scss'

export default function SectionTitle({ title, text }) {
  return (
    <section className={classes['section-title']}>
      <h2 className={classes['section-title__title']}>{title}</h2>
      <p className={classes['section-title__text']}>{text}</p>
    </section>
  )
}
