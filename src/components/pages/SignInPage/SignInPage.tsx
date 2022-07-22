import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActionCreator } from '../../../store/action';
import { AppDispatch, useAppSelector } from '../../../store/types/types';
import { Loader } from '../../common/Loader/Loader';
import './styles.scss';

const SignInPage: React.FC = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const isLoading = useAppSelector(state => state.auth.loading)

  const dispatch = useDispatch() as AppDispatch
  const handeSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (password.length >= 3) {
      const user = {
        email,
        password
      }

      dispatch(authActionCreator.signIn(user))
    }
  }

  return (
    <>
      {isLoading
        ? <Loader />
        : <main className="sign-in-page">
          <h1 className="visually-hidden">Travel App</h1>
          <form className="sign-in-form" autoComplete="off" onSubmit={handeSubmit}>
            <h2 className="sign-in-form__title">Sign In</h2>
            <label className="trip-popup__input input">
              <span className="input__heading">Email</span>
              <input name="email" type="email" required onChange={e => setEmail(e.target.value)} />
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Password</span>
              <input name="password" type="password" autoComplete="new-password" required onChange={e => setPassword(e.target.value)} />
            </label>
            <button className="button" type="submit">Sign In</button>
          </form>
          <span>
            Don't have an account?
            <Link to={'/sign-up'} className="sign-in-form__link">Sign Up</Link>
          </span>
        </main>}
    </>
  )
};

export default SignInPage