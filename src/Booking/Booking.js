import React from 'react';
import underConstruction from '../Booking/underconstruction.gif';

const Booking = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Sorry in this moment we are unbable to take any requests</h1>
            <div style={{ textAlign: 'center' }}>
                <img src={underConstruction} alt="" />
            </div>

        </div>
    );
};

export default Booking;