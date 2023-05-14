import React from 'react';
import { TabTitle } from '../../../Utilitis/FunctiionTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FeaturedGalleries from '../FeaturedGalleries/FeaturedGalleries';
import SecondSection from '../SecondSection/SecondSection';
import ServiceOne from '../ServiceOne/ServiceOne';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
  TabTitle('Creative Photography');
  return (
    <div>
      <Banner/>
      <SecondSection/>
      <About/>
      <ServiceOne/>
      <Subscribe/>
      <FeaturedGalleries/>
    </div>
  );
};

export default Home;