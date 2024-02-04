import './Product.scss';

export const Product = () => {
  return (
    <div className="product">
      <img className="product-image" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
      <div className="product-rating">
        <div>STAR</div>
        <div>(4.7)</div>
      </div>
      <div className="product-title">T-SHIRT</div>
      <p className="product-price">22.3€</p>
    </div>
  );
};
