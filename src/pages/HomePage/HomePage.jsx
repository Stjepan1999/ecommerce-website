import './HomePage.scss';
import { LandingSection } from '../../components/HomePage/LandingSection';
import { PopularProducts } from '../../components/HomePage/PopularProducts';

export const HomePage = () => {
  return (
    <div className="home-page">
      <LandingSection />
      <PopularProducts />
    </div>
  );
};
