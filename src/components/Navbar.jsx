import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import 'animate.css';

const Navbar = () => {
    return (
        <div className="navbar bg-[#b183ea]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#b183ea] text-[#ffffff] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/donation"}>Donation Campaigns</NavLink></li>
                        <li><NavLink to={"/help"}>How to Help</NavLink></li>
                        <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className='animate__animated animate__tada animate__slower animate__infinite'>
                    <img className='w-28 h-28 rounded-full' src={logo} alt="logo" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#ffffff]">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/donation"}>Donation Campaigns</NavLink></li>
                    <li><NavLink to={"/help"}>How to Help</NavLink></li>
                    <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;