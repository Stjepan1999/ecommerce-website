import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import './styles.scss';
import { Footer } from './components/Footer/Footer';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { createContext, useEffect, useState } from 'react';
import { Loading } from './components/Loading/Loading';

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  deleteProduct: () => {},
});

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (product) => {
    const cartItemsClone = structuredClone(cartItems);
    const productIndex = cartItems.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      cartItemsClone[productIndex].quantity += 1;
      setCartItems(cartItemsClone);
    } else {
      product.quantity = 1;
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    }
  };

  const decreaseQuantity = (product) => {
    const cartItemsClone = structuredClone(cartItems);
    const productIndex = cartItems.findIndex((item) => item.id === product.id);
    if (product.quantity <= 1) {
      deleteProduct(product);
    } else {
      cartItemsClone[productIndex].quantity -= 1;
      setCartItems(cartItemsClone);
    }
  };

  const increaseQuantity = (product) => {
    const cartItemsClone = structuredClone(cartItems);
    const productIndex = cartItems.findIndex((item) => item.id === product.id);
    cartItemsClone[productIndex].quantity += 1;
    setCartItems(cartItemsClone);
  };

  const deleteProduct = (product) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== product.id));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart, increaseQuantity, decreaseQuantity, deleteProduct }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </ShopContext.Provider>
  );
};
