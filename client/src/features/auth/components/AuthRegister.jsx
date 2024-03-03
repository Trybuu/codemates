import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Auth.module.scss'
import Aside from './Aside'

export default function AuthLogin() {
  const [validateMessage, setValidateMessage] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [allowSendForm, setAllowSendForm] = useState(false)
  const [cookies] = useCookies(null)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    const fd = new FormData(e.target)
    const userData = Object.fromEntries(fd.entries())

    console.table(userData)
    validateForm(userData)

    const response = await fetch(
      `${import.meta.env.VITE_REST_SERVER_URL}/auth/signup`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      },
    )

    const data = await response.json()
    if (data.detail || !allowSendForm) {
      console.log('ERROR')
    } else {
      // setCookie('Email', data.email)
      // setCookie('AuthToken', data.token)
      navigate('/login')
      window.location.reload()
    }
    console.log(data)
  }

  function validateForm(formData) {
    const { userName, email, password, confirmPassword } = formData

    if (userName.length < 5)
      setValidateMessage((prevState) => ({
        ...prevState,
        userName: 'User name must be at least 5 characters long',
      }))
    if (email.indexOf('@') === -1) {
      setValidateMessage((prevState) => ({
        ...prevState,
        email: 'It must be valid email',
      }))
    }
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
            <p className={classes['auth__error-text']}>
              {validateMessage.userName}
            </p>
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
            <p className={classes['auth__error-text']}>
              {validateMessage.email}
            </p>
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
