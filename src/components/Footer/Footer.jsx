import './Footer.scss';
import { NavLink } from 'react-router-dom';
import logoSecondary from '../../assets/icons/logo-secondary.png';
import instagramLogo from '../../assets/icons/instagram.png';
import facebookLogo from '../../assets/icons/facebook.png';
import xLogo from '../../assets/icons/x.png';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-section footer-section-wide">
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
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-heading">Products</h3>
            <NavLink to="/" className="nav-link">
              Air Force 1
            </NavLink>
            <NavLink to="/" className="nav-link">
              Air Force 1
            </NavLink>
            <NavLink to="/" className="nav-link">
              Air Force 1
            </NavLink>
            <NavLink to="/" className="nav-link">
              Air Force 1
            </NavLink>
            <NavLink to="/" className="nav-link">
              Air Force 1
            </NavLink>
            <NavLink to="/" className="nav-link">
              Air Force 1
            </NavLink>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Help</h3>
            <NavLink to="/" className="nav-link">
              About us
            </NavLink>
            <NavLink to="/" className="nav-link">
              FAQs
            </NavLink>
            <NavLink to="/" className="nav-link">
              How it works
            </NavLink>
            <NavLink to="/" className="nav-link">
              Privacy policy
            </NavLink>
            <NavLink to="/" className="nav-link">
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
