import './ProductPage.scss';
import starIcon from '../../assets/icons/star.png';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../App';

export const ProductPage = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const selectedProduct = products.find((item) => item.id === parseInt(productId));

  return (
    <div className="page product-page">
      <img src={selectedProduct.image} className="product-page-image" />
      <div className="product-info">
        <div className="flex-container">
          <p>
            <span className="secondary-color-text">ID:</span> {selectedProduct.id}
          </p>
          <p>
            <span className="secondary-color-text">Category:</span> {selectedProduct.category}
          </p>
        </div>
        <h1>{selectedProduct.title}</h1>
        <div className="product-rating">
          <img src={starIcon} className="rating-star" />
          <span className="secondary-color-text">{selectedProduct.rating.rate}</span> ({selectedProduct.rating.count})
        </div>
        <h2>{selectedProduct.price} €</h2>
        <hr />
        <p className="text-description text-justify">{selectedProduct.description}</p>
        <div className="buttons-container">
          <Link to="/shop" className="link">
            <button className="button button-secondary">Go Back</button>
          </Link>
          <button className="button button-primary" onClick={() => addToCart(selectedProduct)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
