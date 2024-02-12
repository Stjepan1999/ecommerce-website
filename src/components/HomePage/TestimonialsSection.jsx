import '../../pages/HomePage/HomePage.scss';
import personOnePhoto from '../../assets/images/person-one.jpg';
import personTwoPhoto from '../../assets/images/person-two.jpg';
import starIcon from '../../assets/icons/star.png';

export const Testimonials = () => {
  return (
    <div className="section testimonials-section">
      <h1 className="section-heading">
        Hear What Our <span className="primary-color-text">Customers</span> Say
      </h1>
      <p className="text-description text-margin">
        Discover why our customers love shopping at SmartCart <br />
        and join the satisfied community!
      </p>
      <div className="testimonials-block-container">
        <TestimonialBlock
          fullName="Emily Johnson"
          text="Shopping at SmartCart was a game-changer for me! The diverse range of products impressed me."
          photo={personOnePhoto}
        />
        <TestimonialBlock
          fullName="John Smith"
          text="The quality of products at SmartCart is unmatched, and the seamless shopping experience keeps me coming back. "
          photo={personTwoPhoto}
        />
      </div>
    </div>
  );
};

const TestimonialBlock = ({ fullName, text, photo }) => {
  return (
    <div className="testimonial-block">
      <img src={photo} className="person-photo" />
      <h3>{fullName}</h3>
      <p className="text-description">{text}</p>
      <FiveStars />
    </div>
  );
};

const FiveStars = () => {
  return (
    <div className="star-icons-container">
      <img src={starIcon} className="medium-icon" />
      <img src={starIcon} className="medium-icon" />
      <img src={starIcon} className="medium-icon" />
      <img src={starIcon} className="medium-icon" />
      <img src={starIcon} className="medium-icon" />
    </div>
  );
};
