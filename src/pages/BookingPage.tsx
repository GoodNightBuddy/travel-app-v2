const BookingPage: React.FC<any> = props => {
  return (
    <>
       <header className="header">
      <div className="header__inner">
        <a href="./index.html" className="header__logo">Travel App</a>
        <nav className="header__nav">
          <ul className="nav-header__list">
            <li className="nav-header__item" title="Bookings">
              <a href="./bookings.html" className="nav-header__inner">
                <span className="visually-hidden">Bookings</span>
                <img src="./assets/images/briefcase.svg" alt=" icon" />
              </a>
            </li>
            <li className="nav-header__item" title="Profile">
              <div className="nav-header__inner profile-nav" tabIndex={0}>
                <span className="visually-hidden">Profile</span>
                <img src="./assets/images/user.svg" alt="profile icon" />
                <ul className="profile-nav__list">
                  <li className="profile-nav__item profile-nav__username">John Doe</li>
                  <li className="profile-nav__item">
                    <button className="profile-nav__sign-out button">Sign Out</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        <li className="booking">
          <h3 className="booking__title">Iceland</h3>
          <span className="booking__guests">2 guests</span>
          <span className="booking__date">13.07.2022</span>
          <span className="booking__total">14000 $</span>
          <button className="booking__cancel" title="Cancel booking">
            <span className="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
        <li className="booking">
          <h3 className="booking__title">Iceland</h3>
          <span className="booking__guests">2 guests</span>
          <span className="booking__date">30.09.2022</span>
          <span className="booking__total">14000 $</span>
          <button className="booking__cancel" title="Cancel booking">
            <span className="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
        <li className="booking">
          <h3 className="booking__title">Iceland</h3>
          <span className="booking__guests">2 guests</span>
          <span className="booking__date">10.11.2022</span>
          <span className="booking__total">14000 $</span>
          <button className="booking__cancel" title="Cancel booking">
            <span className="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
      </ul>
    </main>
    <footer className="footer">
      <span className="footer__text">
        from <a className="footer__link" href="https://binary-studio.com">binary studio</a> with
        <img className="footer__icon" src="../images/heart.svg" alt="heart icon" />
      </span>
    </footer>
    </>
  )
};

export default BookingPage