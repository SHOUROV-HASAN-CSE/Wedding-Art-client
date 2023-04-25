import React from 'react';
import { TabTitle } from '../../../Utilitis/FunctiionTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FeaturedGalleries from '../FeaturedGalleries/FeaturedGalleries';
import SecondSection from '../SecondSection/SecondSection';
import ServiceOne from '../ServiceOne/ServiceOne';

const Home = () => {
  TabTitle('Creative Photography');
  return (
    <div>
      <Banner/>
      <SecondSection/>
      <About/>
      <ServiceOne/>
      <FeaturedGalleries/>
    </div>
  );
};

export default Home;