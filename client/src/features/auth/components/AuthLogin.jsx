import { Link } from 'react-router-dom'
import classes from './AuthLogin.module.scss'
import Aside from './Aside'

export default function AuthLogin() {
  return (
    <div className={classes['auth']}>
      <div className={classes['auth__form']}>
        <h3>Welcome back! Please login to get started.</h3>
        <form className={classes['form']}>
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

          <input type="submit" value={'Sign in'} />
          <Link>Forgot your password?</Link>
          <Link to={'/register'}>Dont have an account? Sign up</Link>
        </form>
      </div>

      <Aside />
    </div>
  )
}
