import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className='max-w-6xl mx-auto bg-gradient-to-b from-blue-50 to-blue-200'>
            {/* Navbar */}
            <nav>
                <Navbar></Navbar>
            </nav>

            {/* Outlet */}
            <Outlet></Outlet>

            {/* Footer */}
            <footer className='mt-10'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;