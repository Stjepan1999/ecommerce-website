import '../../pages/HomePage/HomePage.scss';
import { Product } from '../Product/Product';

export const PopularProducts = () => {
  return (
    <div className="section popular-products-section">
      <h1 className="section-heading">
        Our <span className="primary-color-text">Popular</span> Products
      </h1>
      <p className="section-description text-margin">
        Elevate you lifestyle with our top-rated products. Experience quality and style with our selection.
      </p>
      <div className="products-container">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};
