import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            {/* Navbar section */}
            <nav>
                <Navbar></Navbar>
            </nav>

            {/* Banner/Slider section */}
            <header>

            </header>

            {/* About section */}
            <section>

            </section>

            {/* How it works section */}
            <section>

            </section>

            {/* Extra section */}
            <section>

            </section>
            {/* outlet */}
            <Outlet></Outlet>

            {/* Footer */}
            <footer className='mt-40'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;