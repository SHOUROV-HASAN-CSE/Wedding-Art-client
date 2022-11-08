import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FeaturedGalleries from '../FeaturedGalleries/FeaturedGalleries';
import ServiceOne from '../ServiceOne/ServiceOne';

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <ServiceOne/>
      <FeaturedGalleries/>
    </div>
  );
};

export default Home;