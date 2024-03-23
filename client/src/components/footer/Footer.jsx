import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6'
import classes from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={classes['footer']}>
      <div className={classes['footer__content']}>
        <div>
          <p className={classes['footer__logo']}>Codemates 2024</p>
          <p className={classes['footer__creator']}>
            created with love and coffee by{' '}
            <a href="http://www.github.com/trybuu" target="__blank">
              Marek Trybuła
            </a>
          </p>
        </div>

        <div className={classes['footer__links']}>
          <a href="https://www.linkedin.com/user/trybulamarek" target="__blank">
            <FaLinkedin />
          </a>
          <a href="gttps://www.github.com/trybuu" target="__blank">
            <FaSquareGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}
