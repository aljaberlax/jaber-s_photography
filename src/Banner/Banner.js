import React from 'react';
import bannerimage from '../Banner/Banner_images/slider2.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={bannerimage} alt="" />
        </div>
    );
};

export default Banner;