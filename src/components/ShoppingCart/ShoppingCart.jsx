import { useState } from 'react';
import './ShoppingCart.scss';
import '../Sidebar/Sidebar.scss';
import shoppingBag from '../../assets/icons/shopping-bag.png';

export const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img src={shoppingBag} className="bag-icon" onClick={toggleSidebar} />
      <span className="circle">0</span>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''} sidebar-wide`}>
        <div className="sidebar-heading">
          <h3>Shopping cart</h3>
          <button className="button-no-style" onClick={toggleSidebar}>
            X
          </button>
        </div>
        <div className="cart-items">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cart-checkout">
          <hr />

          <div className="cart-subtotal">
            <div>Subtotal:</div>
            <div>0€</div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

const CartItem = () => {
  return (
    <div className="cart-item">
      <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" className="cart-item-image" />
      <div className="cart-info-container">
        <div className="cart-item-info">
          Man T-shirt Slim Fit
          <button>DEL</button>
        </div>
        <div className="cart-item-info">
          <div>22.3€</div>
          <div>
            <button>-</button> 1 <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
