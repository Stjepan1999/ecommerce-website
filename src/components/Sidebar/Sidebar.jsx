import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="line-container" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="button-no-style" onClick={toggleSidebar}>
          ✕
        </button>
        <div className="sidebar-pages">
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
      </div>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
};
