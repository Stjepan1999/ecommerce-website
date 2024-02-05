import PropTypes from 'prop-types';
import '../../pages/HomePage/HomePage.scss';
import forwardArrow from '../../assets/images/forward-arrow.png';
import landingImageSmall from '../../assets/images/landing-image-small.jpg';
import landingImageMedium from '../../assets/images/landing-image-medium.jpg';
import landingImageLarge from '../../assets/images/landing-image-large.jpg';

export const LandingSection = () => {
  return (
    <div className="landing-section">
      <div className="landing-text">
        <p className="landing-">Welcome to SmartCart</p>
        <h1 className="landing-heading">
          Discover the Art of <br />
          <span className="primary-color-text">Smart</span> Shopping
        </h1>
        <p className="text-description text-margin">
          Explore the future of online shopping with SmartCart.
          <br />
          Whether it is fashion, tech, or home essentials, we have it all.
        </p>
        <button className="button button-primary">
          Shop now
          <img src={forwardArrow} alt="Forward arrow" className="button-icon" />
        </button>
        <div className="landing-stats">
          <StatElement statNumber="1k+" statText="Brands" />
          <StatElement statNumber="500+" statText="Shops" />
          <StatElement statNumber="250k+" statText="Customers" />
        </div>
      </div>
      <img
        srcSet={`${landingImageSmall} 320w, ${landingImageMedium} 480w, ${landingImageLarge} 640w`}
        sizes="(max-width: 480px) 320px, (max-width: 800px) 480w, 640w"
        src={landingImageLarge}
        className="landing-image"
      />
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
