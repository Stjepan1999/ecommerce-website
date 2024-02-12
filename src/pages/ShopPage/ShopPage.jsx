import { Link } from 'react-router-dom';
import { Product } from '../../components/Product/Product';
import './ShopPage.scss';
import { useContext } from 'react';
import { ShopContext } from '../../App';

export const ShopPage = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="page">
      <div className="products-container">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="link">
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
