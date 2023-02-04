import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TabTitle } from '../../Utilitis/FunctiionTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    TabTitle('Services');

    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://creative-photography-server-two.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='my-16 md:mx-20 mx-5'>
            <div className='text-center mb-12'>
                <p className="text-5xl font-semibold text-orange-600 font-[Courgette]">My Service Area</p>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;