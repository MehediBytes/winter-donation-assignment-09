import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Navbar section */}
            <nav className=''>
                <Navbar></Navbar>
            </nav>

            {/* outlet */}
            <Outlet></Outlet>

            {/* Footer */}
            <footer className=' mt-40'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;