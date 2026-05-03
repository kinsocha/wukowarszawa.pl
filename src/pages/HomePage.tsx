import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Locations from '../components/Locations';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  // Aktualizacja meta-tagów dla strony głównej
  useEffect(() => {
    document.title =
      'Wuko Warszawa – ciśnieniowe udrażnianie kanalizacji | tel. 888 806 921';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Udrażnianie i czyszczenie kanalizacji w Warszawie. Wuko, sprężyna elektryczna, inspekcja kamerą TV. Doświadczenie od 1979 r. Szybka pomoc – tel. 888 806 921.'
      );
    }
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Process />
      <Pricing />
      <Testimonials />
      <Locations />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
