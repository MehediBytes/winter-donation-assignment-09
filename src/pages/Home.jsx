import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Volunteer from '../components/Volunteer ';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const donations = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Warm-Hearts</title>
            </Helmet>
            {/* Banner/Slider section */}
            <header className='max-w-5xl mx-auto my-10 rounded-xl'>
                <Banner donations={donations}></Banner>
            </header>

            {/* About section */}
            <section className='max-w-5xl mx-auto mb-10 rounded-xl shadow-xl'>
                <AboutSection></AboutSection>
            </section>

            {/* How it works section */}
            <section className=" rounded-xl shadow-xl max-w-5xl mx-auto mb-10">
                <HowItWorks></HowItWorks>
            </section>

            {/* Extra section-1 */}
            <section className=" rounded-xl shadow-xl max-w-5xl mx-auto mb-10">
                <Testimonials></Testimonials>
            </section>

            {/* Extra section-2 */}
            <section className=" rounded-xl shadow-xl max-w-5xl mx-auto mb-10">
                <Volunteer></Volunteer>
            </section>
        </div>
    );
};

export default Home;