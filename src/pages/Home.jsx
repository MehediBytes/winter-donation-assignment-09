import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Volunteer from '../components/Volunteer ';

const Home = () => {
    const donations = useLoaderData();
    return (
        <div>
            {/* Banner/Slider section */}
            <header className='max-w-5xl mx-auto my-10'>
                <Banner donations={donations}></Banner>
            </header>

            {/* About section */}
            <section className='max-w-5xl mx-auto mb-10 bg-[#b183ea] p-8 rounded-lg shadow-xl'>
                <AboutSection></AboutSection>
            </section>

            {/* How it works section */}
            <section className="bg-[#b183ea] p-8 rounded-xl shadow-lg max-w-5xl mx-auto mb-10">
                <HowItWorks></HowItWorks>
            </section>

            {/* Extra section-1 */}
            <section className="bg-[#b183ea] p-8 rounded-xl shadow-lg max-w-5xl mx-auto mb-10">
                <Testimonials></Testimonials>
            </section>

            {/* Extra section-2 */}
            <section className="bg-[#b183ea] p-8 rounded-xl shadow-lg max-w-5xl mx-auto mb-10">
                <Volunteer></Volunteer>
            </section>
        </div>
    );
};

export default Home;