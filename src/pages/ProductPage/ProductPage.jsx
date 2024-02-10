import './ProductPage.scss';
import '../../styles.scss';
import '../../components/Product/Product.scss';
import starIcon from '../../assets/icons/star.png';

export const ProductPage = () => {
  return (
    <div className="page product-page">
      <img
        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        className="product-page-image"
      />
      <div className="product-info">
        <div className="flex-container">
          <p>
            <span className="secondary-color-text">ID:</span> 10
          </p>
          <p>
            <span className="secondary-color-text">Category:</span> Clothing
          </p>
        </div>
        <h1>Mens Casual Premium Slim Fit T-Shirts</h1>
        <div className="product-rating">
          <img src={starIcon} className="rating-star" />
          <span className="secondary-color-text">4.7</span> (319)
        </div>
        <h2>22.3 €</h2>
        <hr />
        <p className="text-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolore minima! Corporis eum voluptatum amet
          sapiente! Adipisci, aut corporis nisi ab, a nam sed vel
        </p>
        <div className="flex-container">
          <button className="button button-secondary">Go Back</button>
          <button className="button button-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
