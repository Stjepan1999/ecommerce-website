import './Product.scss';
import starIcon from '../../assets/icons/star.png';

export const Product = ({ title, price, rating, image }) => {
  return (
    <div className="product">
      <img className="product-image" src={image} />
      <div className="product-rating">
        <img src={starIcon} className="rating-star" />
        <div>{rating}</div>
      </div>
      <div className="product-title">{title}</div>
      <p className="product-price">{price} €</p>
    </div>
  );
};
