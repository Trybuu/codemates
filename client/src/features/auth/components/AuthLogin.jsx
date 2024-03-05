import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../authSlice'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Auth.module.scss'
import Aside from './Aside'
import Overlay from '../../../components/ui/overlays/Overlay'
import ButtonOutline from '../../../components/ui/buttons/ButtonOutline'

export default function AuthLogin() {
  const [cookies, setCookie] = useCookies(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  console.log(cookies)
  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()

    setIsLoading(true)

    const fd = new FormData(e.target)
    const userData = Object.fromEntries(fd.entries())
    console.log(userData)

    const response = await fetch(
      `${import.meta.env.VITE_REST_SERVER_URL}/auth/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      },
    )

    const data = await response.json()

    if (data.detail) {
      setIsLoading(false)
      setError(data.detail)
    } else {
      setCookie('UserId', data.userId)
      setCookie('Email', data.email)
      setCookie('AuthToken', data.token)
      setCookie('Username', data.username)

      dispatch(login())
      setIsLoading(false)

      navigate('/')
      window.location.reload()
    }
    console.log(data)
  }

  return (
    <>
      {isLoading && <Overlay />}

      <div className={classes['auth']}>
        <div className={classes['auth__form']}>
          <h3>Welcome back! Please login to get started.</h3>
          <form onSubmit={handleSubmit} className={classes['form']}>
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
            <p className={classes['auth__error-text']}>
              {error && `${error}. Check your login data and try again.`}
            </p>
            <button className={classes['auth__button']}>Sign in</button>
            <Link>Forgot your password?</Link>
            <Link to={'/register'}>Dont have an account? Sign up</Link>
          </form>
        </div>

        <Aside />
      </div>
    </>
  )
}
