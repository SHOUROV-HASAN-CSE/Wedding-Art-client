import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

  const {title, img, price, description} = useLoaderData();


  return (
    <div>
      <div className="card card-compact w-4/5 bg-base-100 shadow-2xl mx-auto my-20">
      <figure><img src={img} alt=""/></figure>
      <div className="card-body">
        <h2 className="card-title text-5xl mx-auto text-amber-600">{title}</h2>
        <p className='text-lg'>{description}</p>
        <p className='text-3xl text-orange-600 font-semibold'>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>


    </div>
  );
};

export default ServiceDetails;