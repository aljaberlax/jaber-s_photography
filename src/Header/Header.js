import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink'

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
             <h1>Welcome to Jaber's Photography World!!</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/packeges"> Packeges</Link>
                <Link to="/booking">Bookings</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;