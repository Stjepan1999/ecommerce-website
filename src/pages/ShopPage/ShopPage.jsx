import { Link } from 'react-router-dom';
import { Product } from '../../components/Product/Product';
import './ShopPage.scss';

export const ShopPage = () => {
  const items = Array.from({ length: 20 });
  return (
    <div className="page">
      <div className="products-container">
        {items.map((item, index) => (
          <Link to="/product" key={index} className="link">
            <Product />
          </Link>
        ))}
      </div>
    </div>
  );
};
