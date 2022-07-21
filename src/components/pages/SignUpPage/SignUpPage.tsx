import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';

const SignUpPage: React.FC = () => {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')

  const navigate = useNavigate()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (password.length >= 3) {
      // navigate('/')
      const user = {
        fullName,
        email,
        password
      }

    }
  }

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input name="full-name" type="text" required onChange={e => setFullName(e.target.value)} />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input name="email" type="email" required onChange={e => setEmail(e.target.value)} />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input name="password" type="password" autoComplete="new-password" required onChange={e => setPassword(e.target.value)} />
        </label>
        <button className="button" type="submit">Sign Up</button>
      </form>
      <span>
        Already have an account?
        <Link to={'/sign-in'} className="sign-up-form__link">Sign In</Link>
      </span>
    </main>
  )
};

export default SignUpPage