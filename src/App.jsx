import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import './styles.scss';
import { Footer } from './components/Footer/Footer';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

function App() {
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

  const addToCart = (selectedProduct) => {
    setCartItems((prevCartItems) => [...prevCartItems, selectedProduct]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart }}>
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
}

export default App;
