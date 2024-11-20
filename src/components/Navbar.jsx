import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import 'animate.css';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    return (
        <div className="navbar bg-[#98b4cb] p-3">
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
                    <img className='w-24 h-24 rounded-full' src={logo} alt="logo" />
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
            <div className="navbar-end mr-5">
                <div className="login flex gap-2 items-center">
                    <div>
                        {user && user?.email ? (
                            <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="User" />) : ""
                        }
                    </div>
                    <div>
                        {
                            user && user?.email ? (<button onClick={logout} className="btn btn-neutral">Log-Out</button>) : (<Link to={"/auth/login"} className="btn btn-primary text-white">Login</Link>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;