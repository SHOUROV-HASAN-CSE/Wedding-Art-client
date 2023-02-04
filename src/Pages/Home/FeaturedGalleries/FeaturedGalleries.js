import React from 'react';
import './FeaturedGalleries.css'
import { Link } from 'react-router-dom';
import gallery1 from '../../../assets/images/gallery/gallery (1).jpg';
import gallery2 from '../../../assets/images/gallery/gallery (2).jpg';
import gallery3 from '../../../assets/images/gallery/gallery (3).jpg';
import gallery4 from '../../../assets/images/gallery/gallery (4).jpg';
import gallery5 from '../../../assets/images/gallery/gallery (5).jpg';
import gallery6 from '../../../assets/images/gallery/gallery (6).jpg';
import gallery7 from '../../../assets/images/gallery/gallery (7).jpg';
import gallery8 from '../../../assets/images/gallery/gallery (8).jpg';



const FeaturedGalleries = () => {
  return (
   <div className='md:mx-12 mx-5'>
     <h1 className='text-5xl font-semibold text-center text-orange-600 my-12 font-[Courgette]'>Featured Gallery</h1>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
     <img className='rounded-2xl ' src={gallery1} alt="" />
     <img className='rounded-2xl ' src={gallery2} alt="" />
     <img className='rounded-2xl ' src={gallery3} alt="" />
     <img className='rounded-2xl ' src={gallery4} alt="" />
     <img className='rounded-2xl ' src={gallery5} alt="" />
     <img className='rounded-2xl ' src={gallery6} alt="" />
     <img className='rounded-2xl ' src={gallery7} alt="" />
     <img className='rounded-2xl ' src={gallery8} alt="" />
    </div>
    <div className='text-center my-8'>
     <button className="custom-button"><Link to='/gallery'>See All</Link></button>
      </div>
   </div>
  );
};

export default FeaturedGalleries;