import './Footer.scss';
import { Link, NavLink } from 'react-router-dom';
import logoSecondary from '../../assets/icons/logo-secondary.png';
import instagramLogo from '../../assets/icons/instagram.png';
import facebookLogo from '../../assets/icons/facebook.png';
import xLogo from '../../assets/icons/x.png';
import { useContext } from 'react';
import { ShopContext } from '../../App';

export const Footer = () => {
  const { products } = useContext(ShopContext);
  const popularProducts = products.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 6);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <NavLink to="/" className="logo logo-secondary">
            <img src={logoSecondary} className="logo-icon" />
            SmartCart
          </NavLink>
          <p>Shop trendy accessories, clothes, and electronics online.</p>
          <div className="icon-container">
            <img src={facebookLogo} className="medium-icon" />
            <img src={xLogo} className="medium-icon" />
            <img src={instagramLogo} className="medium-icon" />
          </div>
        </div>
        <div className="footer-inner">
          <div className="footer-section">
            <h3 className="footer-heading">Products</h3>
            {popularProducts.map((item) => (
              <Link to={`/product/${item.id}`} className="nav-link" key={item.id}>
                {item.title.slice(0, 20)}
              </Link>
            ))}
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Help</h3>
            <NavLink to="/about" className="nav-link">
              About us
            </NavLink>
            <NavLink to="/about" className="nav-link">
              FAQs
            </NavLink>
            <NavLink to="/about" className="nav-link">
              How it works
            </NavLink>
            <NavLink to="/about" className="nav-link">
              Privacy policy
            </NavLink>
            <NavLink to="/about" className="nav-link">
              Payment policy
            </NavLink>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Contact us</h3>
            <p>info@smartcart.com</p>
            <p>+28 3939 0023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
