import { Link } from 'react-router-dom';
import '../../pages/HomePage/HomePage.scss';
import { Product } from '../Product/Product';
import { useContext } from 'react';
import { ShopContext } from '../../App';

export const PopularProducts = () => {
  const { products } = useContext(ShopContext);

  const popularProducts = products.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 4);

  return (
    <div className="section popular-products-section">
      <h1 className="section-heading">
        Our <span className="primary-color-text">Popular</span> Products
      </h1>
      <p className="text-description text-margin">
        Elevate you lifestyle with our top-rated products. Experience quality and style with our selection.
      </p>
      <div className="products-container">
        {popularProducts.map((product) => (
          <Link to={`/product/${product.id}`} className="link" key={product.id}>
            <Product
              id={product.id}
              category={product.category}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating.rate}
              image={product.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
