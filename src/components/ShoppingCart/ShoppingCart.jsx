import { useContext, useEffect, useState } from 'react';
import './ShoppingCart.scss';
import '../Sidebar/Sidebar.scss';
import shoppingBag from '../../assets/icons/shopping-bag.png';
import { ShopContext } from '../../App';

export const ShoppingCart = () => {
  const { cartItems } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img src={shoppingBag} className="bag-icon" onClick={toggleSidebar} />
      <span className="circle">{cartItems.length}</span>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''} sidebar-wide`}>
        <div className="sidebar-heading">
          <h3>Shopping cart</h3>
          <button className="button-no-style" onClick={toggleSidebar}>
            X
          </button>
        </div>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} title={item.title} image={item.image} price={item.price} />
          ))}
        </div>
        <div className="cart-checkout">
          <hr />

          <div className="cart-subtotal">
            <div>Subtotal:</div>
            <div>{totalPrice} €</div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

const CartItem = ({ title, image, price }) => {
  return (
    <div className="cart-item">
      <img src={image} className="cart-item-image" />
      <div className="cart-info-container">
        <div className="cart-item-info">
          {title}
          <button>DEL</button>
        </div>
        <div className="cart-item-info">
          <div>{price} €</div>
          <div>
            <button>-</button> 1 <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
