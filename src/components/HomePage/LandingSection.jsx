import '../../pages/HomePage/HomePage.scss';
import landingImage from '../../assets/images/landing-image.jpg';

export const LandingSection = () => {
  return (
    <div className="landing-section">
      <div className="landing-text">
        <p>Welcome to SmartCart</p>
        <h1 className="landing-heading">
          Discover the Art of <br />
          <span className="primary-color-text">Smart</span> Shopping
        </h1>
        <p className="landing-description">Explore the future of online shopping with SmartCart. </p>
        <button className="button button-primary">Shop now</button>
        <div className="landing-stats">
          <div>
            <h1>1k+</h1>
            <p>Brands</p>
          </div>
          <div>
            <h1>500+</h1>
            <p>Shops</p>
          </div>
          <div>
            <h1>250k+</h1>
            <p>Customers</p>
          </div>
        </div>
      </div>
      <img src={landingImage} className="landing-image" />
    </div>
  );
};
