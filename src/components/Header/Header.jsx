import { NavLink } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import logo from '../../assets/icons/logo.png';
import shoppingBag from '../../assets/icons/shopping-bag.png';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <img src={logo} className="logo-icon" />
        SmartCart
      </NavLink>
      <div className="nav-bar">
        <div className="nav-pages">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/shop" className="nav-link">
            Shop
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>
        </div>
        <img src={shoppingBag} className="bag-icon" />
        <span className="circle">0</span>
        <Sidebar />
      </div>
    </header>
  );
};
