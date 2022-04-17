import React from 'react';
import pakege1 from '../Packeges/packeges_Images/slider1.jpg'
import pakege2 from '../Packeges/packeges_Images/slider2.jpg'
import pakege3 from '../Packeges/packeges_Images/slider3.jpg'
import './packeges.css'

const Packeges = () => {
    return (
        <div className=' text-center'>
            <h1>Packeges!!</h1>
            <div className='packegs'>
                <div className='packege1'>
                    <img src={pakege1} alt="" />
                    <h3>Packege Name: Outdoor Photography</h3>
                    <p>Service Includs:</p>
                    <p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsum recusandae veniam possimus ullam.
                        </small>
                    </p>
                    <button className='btn btn-primary'>Book Now</button>
                </div>

                <div className='packege1'>
                    <img src={pakege2} alt="" />
                    <h3>Packege Name: Wedding Photography</h3>
                    <p>Service Includs:</p>
                    <p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsum recusandae veniam possimus ullam.
                        </small>
                    </p>
                    <button className='btn btn-primary'>Book Now</button>
                </div>

                <div className='packege1'>
                    <img src={pakege3} alt="" />
                    <h3>Packege Name: Yellow Tuch Photography</h3>
                    <p>Service Includs:</p>
                    <p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsum recusandae veniam possimus ullam.
                        </small>
                    </p>
                    <button className='btn btn-primary'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Packeges;