import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
    const donations = useLoaderData();
    return (
        <div>
            {/* Banner/Slider section */}
            <header className='w-4/6 mx-auto my-10'>
                <Banner donations={donations}></Banner>
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
        </div>
    );
};

export default Home;