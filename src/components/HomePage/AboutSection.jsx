import '../../pages/HomePage/HomePage.scss';
import shippingIcon from '../../assets/icons/shipping.png';
import warrantyIcon from '../../assets/icons/warranty.png';
import supportIcon from '../../assets/icons/support.png';

export const AboutSection = () => {
  return (
    <div className="about-section">
      <h1 className="section-heading">
        Why Choose <span className="primary-color-text">SmartCart</span>?
      </h1>
      <div className="info-blocks-container">
        <InfoBlock
          title="Free Shipping"
          icon={shippingIcon}
          description="Enjoy free quick and secure delivery to your doorstep."
        />
        <InfoBlock
          title="Quality Assurance"
          icon={warrantyIcon}
          description="We source products from reputable brands to ensure you receive top-notch quality."
        />
        <InfoBlock
          title="24/7 Customer Support"
          icon={supportIcon}
          description="Have a question? Our customer support team is always ready to assist you."
        />
      </div>
    </div>
  );
};

const InfoBlock = ({ title, icon, description }) => {
  return (
    <div className="info-block">
      <div className="info-block-heading">
        <img src={icon} className="info-icon" /> <h3 className="">{title}</h3>
      </div>
      <div className="text-description">{description}</div>
    </div>
  );
};
