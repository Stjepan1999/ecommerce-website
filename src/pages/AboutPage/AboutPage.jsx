import './AboutPage.scss';

export const AboutPage = () => {
  return (
    <div className="page">
      <div className="about-us-section">
        <h1 className="section-heading heading-large">
          About <span className="primary-color-text">Us</span>
        </h1>
        <p className="text-description primary-color-text">
          Welcome to SmartCart, where innovation meets style, and shopping becomes an experience
        </p>
        <hr />
        <p className="text-description">
          At SmartCart, our mission is to curate a collection that inspires and enhances your daily life. We believe
          that everyone deserves access to the latest technology, the trendiest fashion, and the most captivating home
          essentials. Our goal is to make premium, high-quality products accessible to you, ensuring that your journey
          with us is nothing short of extraordinary.
        </p>
        <p className="text-description">
          Every product in our store is handpicked to meet the highest standards of quality, innovation, and style. We
          believe in offering you a curated selection that goes beyond the ordinary, helping you discover products that
          align with your unique preferences.
        </p>
        <p className="text-description">
          When you choose SmartCart, you are choosing more than just a store - you are choosing a partner in your
          journey to a more stylish, tech-savvy, and comfortable life. We invite you to explore our collections,
          discover the latest trends, and make SmartCart your destination for all things innovative and chic.
        </p>
        <p className="text-description">
          So why wait? Start exploring our collection today and discover the perfect fit for your lifestyle. Happy
          shopping!
        </p>
      </div>
    </div>
  );
};
