import React from 'react';
import underConstruction from '../Booking/underconstruction.gif';
import './Booking.css'
const Booking = () => {
    return (
        <div className='booking'>
            <h1 style={{ textAlign: 'center' }}>Sorry in this moment we are unbable to take any requests</h1>
            <div style={{ textAlign: 'center',marginTop:'40px' }}>
                <img src={underConstruction} alt="" />
            </div>

        </div>
    );
};

export default Booking;