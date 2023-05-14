import React from 'react';
import img1 from '../../../assets/images/gallery/gallery (20).jpg'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div>
      <div className="hero py-8 subscribe-image text-white">
  <div className="hero-content flex-col lg:flex-row">
    <img className='w-80 rounded-lg md:mr-16' src={img1} alt='subscribe'/>
    <div>
      <h1 className="text-5xl font-bold font-[Courgette]">New Discount Offer!</h1>
      <p className="py-6 text-lg">UPTO 50% Discount for Premium Wedding Photography and Cinematography. <br/>
• Wedding Photography Including Pre and Post Wedding. <br/>
• Cinemotography. <br/>
• Birthday Photography. <br/>
• Any Other Corporate Events. </p>


      <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Email" className="input input-bordered" />
    <button className="btn  btn-outline btn-warning ">Subscribe
    </button>
  </div>
</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Subscribe;