import './Product.scss';
import starIcon from '../../assets/icons/star.png';

export const Product = () => {
  return (
    <div className="product">
      <img className="product-image" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
      <div className="product-rating">
        <img src={starIcon} className="rating-star" />
        <div>(4.7)</div>
      </div>
      <div className="product-title">Mens Casual Premium Slim Fit T-Shirts</div>
      <p className="product-price">22.3€</p>
    </div>
  );
};
