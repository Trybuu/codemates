import { Link } from 'react-router-dom'
import classes from './AuthLogin.module.scss'
import Aside from './Aside'

export default function AuthLogin() {
  return (
    <div className={classes['auth']}>
      <div className={classes['auth__form']}>
        <h3>Create an account.</h3>
        <p>
          Already have an account? <Link to={'/login'}>Sign in</Link>
        </p>
        <form className={classes['form']}>
          <label htmlFor="userName">
            Username<span className={classes['form__star']}>*</span>
            <br></br>
            <input
              type="text"
              placeholder="Users will see you under this name"
              id="userName"
              name="userName"
            />
          </label>

          <label htmlFor="email">
            Email address<span className={classes['form__star']}>*</span>
            <br></br>
            <input
              type="email"
              placeholder="name@domain.com"
              id="email"
              name="email"
            />
          </label>

          <label htmlFor="password">
            Password<span className={classes['form__star']}>*</span>
            <br></br>
            <input
              type="password"
              placeholder="At least 8 characters"
              id="password"
              name="password"
            />
          </label>

          <label htmlFor="confirmPassword">
            Confirm password<span className={classes['form__star']}>*</span>
            <br></br>
            <input
              type="password"
              placeholder="Passwords must match"
              id="confirmPassword"
              name="confirmPassword"
            />
          </label>

          <input type="submit" value={'Sign in'} />
        </form>
      </div>
      <Aside />
    </div>
  )
}
