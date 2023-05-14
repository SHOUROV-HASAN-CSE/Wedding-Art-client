import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full font-[Courgette]">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-56">
                    <h1 className='md:text-6xl text-2xl font-bold text-white'>
                        Wedding Art<br />
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-96">
                <p className='text-xl text-white'>This Wedding Season Wedding Art offers Huge Discount for  Wedding Photography & Cinematography.  Make your special moments vibrant & more memorable with our artistic photography services. <br />
                Get 5% discount booked more then 2 events. <br />
                get 6% discount booked more then 3 events. <br />
                get 8% discount booked more then 4 events.</p>

                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 md:bottom-[26rem] btn-group">
                    <button className="custom-button mr-2">Get Started</button>
                    <button className="custom-button">Contact US</button>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle  btn-warning mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle  btn-warning">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;