import React from 'react';
import { useNavigate } from 'react-router-dom';
import pakege1 from '../Packeges/packeges_Images/slider1.jpg'
import pakege2 from '../Packeges/packeges_Images/slider2.jpg'
import pakege3 from '../Packeges/packeges_Images/slider3.jpg'
import './packeges.css'

const Packeges = () => {
    const navigate = useNavigate()
    const navigateBookNow = () => {
        navigate('/booking')
    }
    return (
        <div className=''>
            <h1 style={{textAlign:'center'}}>Packeges!!</h1>
            <div className='packegs'>
                <div className='packege1'>
                    <img src={pakege1} alt="" />
                    <h3>Packege Name: Outdoor Photography</h3>
                    <p>Service Includs:</p>
                    <p>
                        <small>Nature photography is a wide range of photography taken outdoors and
                            devoted to displaying natural elements such as landscapes, wildlife,Human Life Style,
                            plants, and close-ups of natural scenes and textures.

                        </small>
                    </p>
                    <h3>Price:$100</h3>
                    <button onClick={navigateBookNow} className='btn btn-primary'>Book Now</button>
                </div>

                <div className='packege1'>
                    <img src={pakege2} alt="" />
                    <h3>Packege Name: Wedding Photography</h3>
                    <p>Service Includs:</p>
                    <p>
                        <small>
                            Traditional photography captures events as they are supposed to. The beauty of candid wedding photography lies in the natural reactions of the people. It clicks people in their
                            best emotions and brings out the feelings of that moment through a picture.
                        </small>
                    </p>
                    <h3>Price:$200</h3>
                    <button onClick={navigateBookNow} className='btn btn-primary'>Book Now</button>
                </div>

                <div className='packege1'>
                    <img src={pakege3} alt="" />
                    <h3>Packege Name: Yellow Tuch Photography</h3>
                    <p>Service Includs:</p>
                    <p>
                        <small>It clicks people in their best emotions and brings out the feelings of that moment through a picture.
                             close-ups of natural scenes and textures. It clicks people in their best emotions and brings out the feelings 
                             of that moment through a picture.
                        </small>
                    </p>
                    <h3>Price:$200</h3>
                    <button onClick={navigateBookNow} className='btn btn-primary'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Packeges;