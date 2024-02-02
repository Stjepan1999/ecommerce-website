import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import shoppingBag from '../../assets/icons/shopping-bag.png';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} className="logo-icon" />
        SmartCart
      </div>
      <div className="nav-bar">
        <NavLink to="/" className="nav-link" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/shop" className="nav-link" activeClassName="active-link">
          Shop
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active-link">
          About Us
        </NavLink>
        <img src={shoppingBag} className="bag-icon" />
        <span className="circle">0</span>
      </div>
    </header>
  );
};
