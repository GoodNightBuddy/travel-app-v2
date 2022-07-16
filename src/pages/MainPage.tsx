const MainPage: React.FC<any> = props => {
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
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autoComplete="off">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input name="search" type="search" placeholder="search by title" />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select name="duration">
              <option value="">duration</option>
              <option value="0_x_5">&lt; 5 days</option>
              <option value="5_x_10">&lt; 10 days</option>
              <option value="10_x">&ge; 10 days</option>
            </select>
          </label>
          <label className="select">
            <span className="visually-hidden">Search by level</span>
            <select name="level">
              <option value="">level</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </label>
        </form>
      </section>
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          <li className="trip-card">
            <img src="../images/iceland.jpg" alt="trip" />
            <div className="trip-card__content">
              <div className="trip-info">
                <h3 className="trip-info__title">Iceland</h3>
                <div className="trip-info__content">
                  <span className="trip-info__duration"><strong>15</strong> days</span>
                  <span className="trip-info__level">easy</span>
                </div>
              </div>
              <div className="trip-price">
                <span>Price</span>
                <strong className="trip-price__value">7000 $</strong>
              </div>
            </div>
            <a href="./trip.html" className="button">Discover a trip</a>
          </li>
          <li className="trip-card">
            <img src="../images/iceland.jpg" alt="trip" />
            <div className="trip-card__content">
              <div className="trip-info">
                <h3 className="trip-info__title">Iceland</h3>
                <div className="trip-info__content">
                  <span className="trip-info__duration"><strong>15</strong> days</span>
                  <span className="trip-info__level">easy</span>
                </div>
              </div>
              <div className="trip-price">
                <span>Price</span>
                <strong className="trip-price__value">7000 $</strong>
              </div>
            </div>
            <a href="./trip.html" className="button">Discover a trip</a>
          </li>
          <li className="trip-card">
            <img src="../images/iceland.jpg" alt="trip" />
            <div className="trip-card__content">
              <div className="trip-info">
                <h3 className="trip-info__title">Iceland</h3>
                <div className="trip-info__content">
                  <span className="trip-info__duration"><strong>15</strong> days</span>
                  <span className="trip-info__level">easy</span>
                </div>
              </div>
              <div className="trip-price">
                <span>Price</span>
                <strong className="trip-price__value">7000 $</strong>
              </div>
            </div>
            <a href="./trip.html" className="button">Discover a trip</a>
          </li>
          <li className="trip-card">
          <img src="../images/iceland.jpg" alt="trip" />
            <div className="trip-card__content">
              <div className="trip-info">
                <h3 className="trip-info__title">Iceland</h3>
                <div className="trip-info__content">
                  <span className="trip-info__duration"><strong>15</strong> days</span>
                  <span className="trip-info__level">easy</span>
                </div>
              </div>
              <div className="trip-price">
                <span>Price</span>
                <strong className="trip-price__value">7000 $</strong>
              </div>
            </div>
            <a href="./trip.html" className="button">Discover a trip</a>
          </li>
        </ul>
      </section>
    </main>
    <footer className="footer">
      <span className="footer__text">
        from <a className="footer__link" href="https://binary-studio.com">binary studio</a> with
        <img className="footer__icon" src="../images/heart.svg" alt="heart icon" />
      </span>
    </footer>S
    </>
  )
};

export default MainPage