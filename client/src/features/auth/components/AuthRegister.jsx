import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Auth.module.scss'
import Aside from './Aside'
import Overlay from '../../../components/ui/overlays/Overlay'

export default function AuthLogin() {
  const [validateMessage, setValidateMessage] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [allowSendForm, setAllowSendForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cookies] = useCookies(null)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    setIsLoading(true)

    setValidateMessage({
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })

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
    if (data.detail && allowSendForm === false) {
      console.log('ERROR')
      setIsLoading(false)
    } else {
      // setCookie('Email', data.email)
      // setCookie('AuthToken', data.token)
      setIsLoading(false)
      navigate('/login')
      window.location.reload()
    }
    console.log(data)
  }

  function validateForm(formData) {
    const { userName, email, password, confirmPassword } = formData

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/gm

    if (userName.length < 5)
      setValidateMessage((prevState) => ({
        ...prevState,
        userName: 'User name must be at least 5 characters long.',
      }))
    else if (email.indexOf('@') === -1) {
      setValidateMessage((prevState) => ({
        ...prevState,
        email: 'It must be a valid email adress.',
      }))
    } else if (!passwordRegex.test(password)) {
      setValidateMessage((prevState) => ({
        ...prevState,
        password:
          'Password should contain at least 8 characters, including one number and one capital letter.',
      }))
    } else if (password !== confirmPassword) {
      setValidateMessage((prevState) => ({
        ...prevState,
        confirmPassword: "Passwords don't match!",
      }))
    } else {
      setAllowSendForm(true)
    }
  }

  return (
    <>
      {isLoading && <Overlay />}
      <div className={classes['auth']}>
        <div className={classes['auth__form']}>
          <h3>Create an account.</h3>
          <p>
            Already have an account? <Link to={'/login'}>Sign in</Link>
          </p>
          <form onSubmit={handleSubmit} className={classes['form']} noValidate>
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
              <p className={classes['auth__error-text']}>
                {validateMessage.password}
              </p>
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
              <p className={classes['auth__error-text']}>
                {validateMessage.confirmPassword}
              </p>
            </label>

            <input type="submit" value={'Sign in'} />
          </form>
        </div>
        <Aside />
      </div>
    </>
  )
}
