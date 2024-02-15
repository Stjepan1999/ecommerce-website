import { useContext, useEffect, useState } from 'react';
import './ShoppingCart.scss';
import '../Sidebar/Sidebar.scss';
import shoppingBag from '../../assets/icons/shopping-bag.png';
import trashIcon from '../../assets/icons/trash.png';
import forwardArrow from '../../assets/images/forward-arrow.png';
import { ShopContext } from '../../App';

export const ShoppingCart = () => {
  const { cartItems } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(totalPrice.toFixed(2));
  }, [cartItems]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="shopping-cart-icon">
        <img src={shoppingBag} className="bag-icon" onClick={toggleSidebar} />
        <span className="circle">{cartItems.length}</span>
      </div>

      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''} sidebar-wide`}>
        <div className="sidebar-heading">
          <h3 className="secondary-color-text">Shopping cart</h3>
          <button className="button-no-style secondary-color-text" onClick={toggleSidebar}>
            ✕
          </button>
        </div>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem key={item.id} product={item} />)
          ) : (
            <p>No items have been added to your bag</p>
          )}
        </div>
        <hr />

        <div className="cart-checkout">
          <div className="cart-subtotal secondary-color-text">
            <div>Subtotal:</div>
            <div>{totalPrice} €</div>
          </div>
          <button className="button button-primary">
            Checkout
            <img src={forwardArrow} alt="Forward arrow" className="button-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

const CartItem = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, deleteProduct } = useContext(ShopContext);

  return (
    <div className="cart-item">
      <img src={product.image} className="cart-item-image" />
      <div className="cart-info-container">
        <div className="cart-item-info">
          {product.title}
          <button className="button-no-style" onClick={() => deleteProduct(product)}>
            <img src={trashIcon} className="small-icon" />
          </button>
        </div>
        <div className="cart-item-info">
          <div>
            <span className="secondary-color-text">{product.price} €</span>
          </div>
          <div className="cart-item-buttons">
            <button className="button-circle" onClick={() => decreaseQuantity(product)}>
              −
            </button>
            <div>{product.quantity}</div>
            <button className="button-circle" onClick={() => increaseQuantity(product)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
