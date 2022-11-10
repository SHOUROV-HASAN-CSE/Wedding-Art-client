import React from 'react';
import about1 from '../../../assets/images/about-us/about1.jpg'
import about2 from '../../../assets/images/about-us/about2.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={about1} alt="" className="w-4/5 h-full rounded-xl shadow-2xl" />
                    <img src={about2}  alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-xl mask mask-parallelogram shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-3xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">
                       I am Experienced <br />
                         in Wedding Photography<br />
                          & Cinematography </h1>
                    <p className="py-6">greetings, I am shourov hasan. I am a Professional Photographer.  I am Experienced in Wedding Photography & Cinematography, and other event management. you can see my work please visite the site.</p>
                    <p className="py-5">I am requesting you to visit My Site, check my gallery and service to take your treasured decision of your lifetime events.</p>
                    <p className="pb-8">Address : Zigatola,Dhanmondi,Dhaka,Bangladesh.</p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;