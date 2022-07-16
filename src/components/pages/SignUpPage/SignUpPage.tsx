import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const SignUpPage: React.FC<any> = () => {

  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit: React.FormEventHandler<HTMLFormElement>  = e => {
    e.preventDefault()
    if(password.length >= 3) {
      navigate('/')
    }
  }

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input name="full-name" type="text" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input name="password" type="password" autoComplete="new-password" required onChange={e => setPassword(e.target.value)} />
        </label>
        <button className="button" type="submit">Sign Up</button>
      </form>
      <span>
        Already have an account?
        <a href="./sign-in.html" className="sign-up-form__link">Sign In</a>
      </span>
    </main>
  )
};

export default SignUpPage