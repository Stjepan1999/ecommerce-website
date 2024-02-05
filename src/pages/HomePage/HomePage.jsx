import './HomePage.scss';
import { LandingSection } from '../../components/HomePage/LandingSection';
import { PopularProducts } from '../../components/HomePage/PopularProducts';
import { AboutSection } from '../../components/HomePage/AboutSection';
import { Testimonials } from '../../components/HomePage/TestimonialsSection';

export const HomePage = () => {
  return (
    <div className="home-page">
      <LandingSection />
      <PopularProducts />
      <AboutSection />
      <Testimonials />
    </div>
  );
};
