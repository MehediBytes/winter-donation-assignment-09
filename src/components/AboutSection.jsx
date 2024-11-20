import React from 'react';
import 'animate.css';

const AboutSection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 p-10 rounded-lg shadow-lg space-y-8">
            <h2 className="text-4xl font-extrabold text-center text-blue-600 animate__animated animate__heartBeat animate__slower animate__infinite">
                About Us
            </h2>
            <hr className="border-t-2 border-blue-200 max-w-xs mx-auto" />
            <p className="text-gray-800 text-lg text-center">
                Winter can be harsh, but together, we can make it warmer for everyone.
                Our mission is simple yet powerful: <span className="font-semibold">to bring warmth and comfort to those who need it the most. </span> 
                By bridging the gap between compassionate donors and underserved communities, we strive to ensure that no one is left in the cold.
            </p>
            <p className="text-gray-800 text-lg text-center">
                <span className="font-semibold text-blue-600">How You Can Contribute:</span>
                <ul className="list-disc list-inside text-left mx-auto max-w-2xl mt-4 space-y-2">
                    <li>Donate warm clothing, blankets, or funds.</li>
                    <li>Volunteer with us to distribute supplies.</li>
                    <li>Spread the word to inspire more people to join this cause.</li>
                </ul>
            </p>
            <p className="text-gray-800 text-lg text-center">
                Together, we can make this winter a season of kindness and care.
                <span className="block mt-4 font-bold text-blue-500 animate__animated animate__pulse animate__infinite">Join us today!</span>
            </p>
        </div>
    );
};

export default AboutSection;
