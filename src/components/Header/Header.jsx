/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between container-md mx-auto px-4 py-4 bg-blue-400">
            <Link to="/">
                <div className="flex justify-center gap-2 bg-orange-300 px-2 rounded-md">
                    <p className='font-bold text-gray-700'>T-shirt</p><span className="bg-blue-600 px-1">Mela</span>
                </div>
            </Link>
            <nav className='flex gap-4'>
                <Link className='hover:border-b-2 hover:border-red-800' to="/">Home</Link>
                <Link  className='hover:border-b-2 hover:border-red-800' to="/review">Order Review</Link>
                <Link  className='hover:border-b-2 hover:border-red-800' to="/about">About</Link>
                <Link  className='hover:border-b-2 hover:border-red-800' to="/contact">Contact</Link>
            </nav>
        </div>     
    );
};

export default Header;