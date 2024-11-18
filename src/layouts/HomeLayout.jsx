import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className="max-w-6xl mx-auto bg-gradient-to-b from-blue-50 to-blue-200">
            {/* Navbar section */}
            <nav className=''>
                <Navbar></Navbar>
            </nav>

            {/* outlet */}
            <Outlet></Outlet>

            {/* Footer */}
            <footer className=''>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;