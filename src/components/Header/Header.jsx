import { NavLink } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import logo from '../../assets/icons/logo.png';
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
        <ShoppingCart />
        <Sidebar />
      </div>
    </header>
  );
};
