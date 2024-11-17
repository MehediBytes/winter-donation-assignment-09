import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            {/* Navbar section */}
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>

            {/* outlet */}
            <Outlet></Outlet>

            {/* Footer */}
            <footer className='w-11/12 mx-auto mt-40'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;