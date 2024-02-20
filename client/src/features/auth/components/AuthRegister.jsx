import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Auth.module.scss'
import Aside from './Aside'

export default function AuthLogin() {
  const [cookies] = useCookies(null)
  const navigate = useNavigate()
  console.log(cookies)

  async function handleSubmit(e) {
    e.preventDefault()

    const fd = new FormData(e.target)
    const userData = Object.fromEntries(fd.entries())
    console.log(userData)

    const response = await fetch(
      `${import.meta.env.VITE_REST_SERVER_URL}/auth/signup`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      },
    )

    const data = await response.json()

    if (data.detail) {
      console.log('ERROR')
    } else {
      // setCookie('Email', data.email)
      // setCookie('AuthToken', data.token)
      navigate('/login')
      window.location.reload()
    }
    console.log(data)
  }

  return (
    <div className={classes['auth']}>
      <div className={classes['auth__form']}>
        <h3>Create an account.</h3>
        <p>
          Already have an account? <Link to={'/login'}>Sign in</Link>
        </p>
        <form onSubmit={handleSubmit} className={classes['form']}>
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
