import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            {/* Navbar section */}
            <nav className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
            </nav>

            {/* outlet */}
            <Outlet></Outlet>

            {/* Footer */}
            <footer className='max-w-6xl mx-auto mt-40'>
                <Footer></Footer>
            </footer>

            {/* Toast */}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default HomeLayout;