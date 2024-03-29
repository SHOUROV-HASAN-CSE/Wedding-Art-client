import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
    const {_id, img, price, title, description} = service;



    return (
        <div className="card card-compact bg-base-100 shadow-2xl rounded-xl">
            <figure>
            <PhotoProvider>
            <PhotoView src={img}>
            <img src={img} alt="" />
            </PhotoView>
            </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.length > 100 ? description.substring(0, 100) + "..." : description}</p>
                <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/servicedetails/${_id}`}>
                    <button className="custom-button">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;