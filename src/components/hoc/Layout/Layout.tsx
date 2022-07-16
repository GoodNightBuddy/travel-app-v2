import heartIcon from "../../../images/heart.svg"
import briefcase from "../../../images/briefcase.svg";
import user from "../../../images/user.svg";
import { Outlet } from "react-router-dom";
import './styles.scss'

const BookingPage: React.FC<any> = props => {
  return (
    <div className="layout">
      <header className="header">
        <div className="header__inner">
          <a href="./index.html" className="header__logo">Travel App</a>
          <nav className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <a href="./bookings.html" className="nav-header__inner">
                  <span className="visually-hidden">Bookings</span>
                  <img src={briefcase} alt=" icon" />
                </a>
              </li>
              <li className="nav-header__item" title="Profile">
                <div className="nav-header__inner profile-nav" tabIndex={0}>
                  <span className="visually-hidden">Profile</span>
                  <img src={user} alt="profile icon" />
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
      <div className="layout-main">
        <Outlet />
      </div>
      <footer className="footer">
        <span className="footer__text">
          from <a className="footer__link" href="https://binary-studio.com">binary studio</a> with
          <img className="footer__icon" src={heartIcon} alt="heart icon" />
        </span>
      </footer>
    </div>
  )
};

export default BookingPage