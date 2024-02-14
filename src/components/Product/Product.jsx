import './Product.scss';
import starIcon from '../../assets/icons/star.png';

export const Product = ({ title, price, rating, image }) => {
  return (
    <div className="product">
      <div className="product-image-container">
        <img className="product-image" src={image} />
      </div>
      <div className="product-rating">
        <img src={starIcon} className="rating-star" />
        <div>{rating}</div>
      </div>
      <div className="product-title">{title.slice(0, 20)}</div>
      <p className="product-price">{price} €</p>
    </div>
  );
};
