import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink'
import auth from '../firebase.init';

import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header'>
            <h1>Welcome to Jaber's Photography World!!</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/packeges"> Packeges</Link>
                <Link to="/booking">Bookings</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/aboutme">About Me</Link>
                {
                    user ?
                        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log out</button>
                        :
                        <Link as={Link} to="login"> Login </Link>
                }
            </nav>
        </div>
    );
};

export default Header;