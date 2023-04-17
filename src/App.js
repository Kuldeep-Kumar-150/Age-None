import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Services from './components/Services';
import AboutCompany from './components/AboutCompany';
import MyNav from './components/MyNav';
import Header from './components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import MyFooter from './components/MyFooter';
import ShapeSection from './components/ShapeSection';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 100,
    });
  }, [])

  return (
    <>
      <BackToTop />
      <Preloader />
      <div className='header_bg_img pb-2 pb-lg-4 pt-xl-0 vh_100_xl d-flex flex-column'>
        <MyNav />
        <Header />
      </div>
      <Services />
      <AboutCompany />
      <Projects />
      <Reviews />
      <ShapeSection />
      <MyFooter />
    </>
  );
}

export default App;
