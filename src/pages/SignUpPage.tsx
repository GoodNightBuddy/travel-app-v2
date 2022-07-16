const SignUpPage: React.FC<any> = props => {
  return (
    <>
       <header className="header">
      <div className="header__inner">
        <a href="./index.html" className="header__logo">Travel App</a>
      </div>
    </header>
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off">
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
          <input name="password" type="password" autoComplete="new-password" required />
        </label>
        <button className="button" type="submit">Sign Up</button>
      </form>
      <span>
        Already have an account?
        <a href="./sign-in.html" className="sign-up-form__link">Sign In</a>
      </span>
    </main>
    <footer className="footer">
      <span className="footer__text">
        from <a className="footer__link" href="https://binary-studio.com">binary studio</a> with
        <img className="footer__icon" src="./assets/images/heart.svg" alt="heart icon" />
      </span>
    </footer>
    </>
  )
};

export default SignUpPage