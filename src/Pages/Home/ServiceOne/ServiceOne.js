import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard';

const ServiceOne = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://creative-photography-server-two.vercel.app/serviceone')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='md:mx-12 mx-5'>
            <div className='text-center mb-4'>
                <p className='text-5xl font-semibold text-orange-600 my-12 font-[Courgette]'>My Services</p>
                <p></p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-8'>
            <button className="custom-button"><Link to='/services'>See All</Link></button>
            </div>
        </div>
    );
};

export default ServiceOne;