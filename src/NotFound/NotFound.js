import React from 'react';
import notfound from './notfound.jpg';

const NotFound = () => {
    return (
        <div className='mx-auto text-center'>
            <img style={{height:'600px', width:'75%'}} src={notfound} alt="" />
        </div>
    );
};

export default NotFound;