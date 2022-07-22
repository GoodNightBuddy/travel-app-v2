import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import briefcase from "../../../images/briefcase.svg";
import user from "../../../images/user.svg";
import { authActionCreator } from "../../../store/action";
import { AppDispatch, useAppSelector } from "../../../store/types/types";
import './styles.scss'

const HeaderNav: React.FC = () => {
  const  dispatch = useDispatch() as AppDispatch

  const handleSignOut = () => {
    dispatch(authActionCreator.signOut())
  }

  const name = useAppSelector(state => state.auth.user?.fullName)

  return (
    <nav className="header__nav">
      <ul className="nav-header__list">
        <li className="nav-header__item" title="Bookings">
          <Link to={'bookings'} className="nav-header__inner">
            <span className="visually-hidden">Bookings</span>
            <img src={briefcase} alt=" icon" />
          </Link>
        </li>
        <li className="nav-header__item" title="Profile">
          <div className="nav-header__inner profile-nav" tabIndex={0}>
            <span className="visually-hidden">Profile</span>
            <img src={user} alt="profile icon" />
            <ul className="profile-nav__list">
              <li className="profile-nav__item profile-nav__username">{name}</li>
              <li className="profile-nav__item">
                <button className="profile-nav__sign-out button" onClick={handleSignOut}>Sign Out</button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav