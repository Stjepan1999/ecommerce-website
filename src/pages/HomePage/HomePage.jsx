import './HomePage.scss';
import { LandingSection } from '../../components/HomePage/LandingSection';
import { PopularProducts } from '../../components/HomePage/PopularProducts';
import { AboutSection } from '../../components/HomePage/AboutSection';

export const HomePage = () => {
  return (
    <div className="home-page">
      <LandingSection />
      <PopularProducts />
      <AboutSection />
    </div>
  );
};
