import PropTypes from 'prop-types';
import '../../pages/HomePage/HomePage.scss';
import forwardArrow from '../../assets/images/forward-arrow.png';
import landingImageSmall from '../../assets/images/landing-image-small.png';
import landingImage from '../../assets/images/landing-image.png';
import { Link } from 'react-router-dom';

export const LandingSection = () => {
  return (
    <div className="section landing-section">
      <div className="landing-text">
        <p className="landing-">Welcome to SmartCart</p>
        <h1 className="landing-heading">
          Discover the
          <br />
          <span className="primary-color-text">Smart</span> Shopping
        </h1>
        <p className="text-description text-margin">
          Explore the future of online shopping with SmartCart.
          <br />
          Whether it is fashion, tech, or home essentials, we have it all.
        </p>
        <Link to="/shop" className="link">
          <button className="button button-primary">
            Shop now
            <img src={forwardArrow} alt="Forward arrow" className="button-icon" />
          </button>
        </Link>

        <div className="landing-stats">
          <StatElement statNumber="1k+" statText="Brands" />
          <StatElement statNumber="500+" statText="Shops" />
          <StatElement statNumber="250k+" statText="Customers" />
        </div>
      </div>
      <div className="landing-image-container">
        <picture>
          <source media="(max-width: 799px)" srcSet={landingImageSmall} />
          <source media="(min-width: 800px)" srcSet={landingImage} />
          <img src={landingImage} alt="Landing image with " className="landing-image" />
        </picture>
      </div>
    </div>
  );
};

const StatElement = ({ statNumber, statText }) => {
  return (
    <div>
      <h1 className="stat-number">{statNumber}</h1>
      <p className="stat-text">{statText}</p>
    </div>
  );
};

StatElement.propTypes = {
  statNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  statText: PropTypes.string.isRequired,
};
