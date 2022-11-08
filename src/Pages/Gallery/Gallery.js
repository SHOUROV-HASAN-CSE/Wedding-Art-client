import React from 'react';
import gallery1 from '../../assets/images/gallery/gallery (1).jpg';
import gallery2 from '../../assets/images/gallery/gallery (2).jpg';
import gallery3 from '../../assets/images/gallery/gallery (3).jpg';
import gallery4 from '../../assets/images/gallery/gallery (4).jpg';
import gallery5 from '../../assets/images/gallery/gallery (5).jpg';
import gallery6 from '../../assets/images/gallery/gallery (6).jpg';
import gallery7 from '../../assets/images/gallery/gallery (7).jpg';
import gallery8 from '../../assets/images/gallery/gallery (8).jpg';
import gallery9 from '../../assets/images/gallery/gallery (9).jpg';
import gallery10 from '../../assets/images/gallery/gallery (10).jpg';
import gallery11 from '../../assets/images/gallery/gallery (11).jpg';
import gallery12 from '../../assets/images/gallery/gallery (12).jpg';
import gallery13 from '../../assets/images/gallery/gallery (13).jpg';
import gallery14 from '../../assets/images/gallery/gallery (14).jpg';
import gallery15 from '../../assets/images/gallery/gallery (15).jpg';
import gallery16 from '../../assets/images/gallery/gallery (16).jpg';
import gallery17 from '../../assets/images/gallery/gallery (17).jpg';
import gallery18 from '../../assets/images/gallery/gallery (18).jpg';
import gallery19 from '../../assets/images/gallery/gallery (19).jpg';
import gallery20 from '../../assets/images/gallery/gallery (20).jpg';

const Gallery = () => {
  return (
    <div className='my-16'>
     <h1 className='text-5xl font-semibold text-center text-orange-600 my-12'>Featured Gallery</h1>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery1} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery2} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery3} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery4} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery5} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery6} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery7} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery8} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery9} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery10} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery11} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery12} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery13} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery14} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery15} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery16} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery17} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery18} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery19} alt="" />
     <img className='rounded-2xl w-80 shadow-2xl' src={gallery20} alt="" />
    
    </div>
   </div>
  );
};

export default Gallery;