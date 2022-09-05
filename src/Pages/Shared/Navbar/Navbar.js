import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../../../assets/icon.png'

const Navbar = () => {

    const menuItems = <>
        <li className='hover:text-secondary'><Link to="/">Home</Link></li>
        <li className='hover:text-secondary'><Link to="/product">Products</Link></li>
        <li className='hover:text-secondary'><Link to="/review">Reviews</Link></li>
        <li className='hover:text-secondary'><Link to="/contact">Contact</Link></li>
        <li className='hover:text-secondary'><Link to="/about">About</Link></li>
        <li className='hover:text-secondary'><Link to="/login">Login</Link></li>
    </>

    return (
        <div className="navbar sticky top-0 bg-primary font-bold text-white p-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-primary font-bold text-white">
                        {menuItems}
                    </ul>
                </div>
                <button className="btn btn-ghost normal-case text-xl hover:text-secondary"><img className='mr-1 w-10' src={icons} alt='' /> ST FACRORY</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;