import React from 'react';
import myself from './myself.jpg'
import './Myself.css'

const Myself = () => {
    return (
        <div className='container myself'>
            <div>
                <h1>This is Jaber</h1>
                <img src={myself} alt="" />
            </div>
            <div>
                <h3>Myself</h3>
                <hr style={{ height: '5px', color: 'black' }} className='bg-primary w-100' />
                <p>
                    <span style={{ color: 'blue' }}>Career Objective:</span> To be involved in work where I can utilize skill and creatively
                    involved with system that effectively contributes to the growth
                    of organization.
                </p>
                <p>
                    <span style={{ color: 'blue' }}>MY Hobby :</span> I like Playing game. I like cricket most.
                    But now I like Coading. I try to make website . I also like paly mobile game like pubg,COD.
                </p>
                <p>
                    <span style={{ color: 'blue' }} > MY Missin: </span> I want to be a MERN Full Stack Developer.
                </p>
            </div>
        </div>
    );
};

export default Myself;