import classes from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={classes['footer']}>
      <div className={classes['footer__content']}>
        <p>Codemates 2024</p>
        <p>
          made with love and coffee by{' '}
          <a href="http://www.github.com/trybuu" target="__blank">
            Marek Trybuła
          </a>
        </p>
      </div>
    </footer>
  )
}
