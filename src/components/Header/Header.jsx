import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div>SmartCart</div>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
        <div>Cart</div>
      </div>
    </header>
  );
};
