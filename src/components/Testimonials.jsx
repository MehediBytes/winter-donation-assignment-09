import React from 'react';
import 'animate.css';

const Testimonials = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-10 rounded-lg shadow-lg space-y-10">
            <h2 className="text-4xl font-extrabold text-center text-blue-600 animate__animated animate__heartBeat animate__slower animate__infinite">
                What People Are Saying
            </h2>
            <hr className="border-t-2 border-blue-300 w-2/3 mx-auto"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <p className="italic text-gray-700 text-lg">
                        "This initiative truly warms hearts. My family and I were able to
                        support a whole community last winter!"
                    </p>
                    <p className="text-right mt-4 font-bold text-blue-600">- A Donor</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <p className="italic text-gray-700 text-lg">
                        "Thanks to the generous donations, my children didn’t have to
                        endure the harsh winter without proper clothing."
                    </p>
                    <p className="text-right mt-4 font-bold text-blue-600">- A Recipient</p>
                </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg mt-10">
                <h3 className="text-2xl font-bold text-blue-600 text-center mb-4">
                    Why Testimonials Matter?
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                    Real stories highlight the impact of your contributions, inspiring others
                    to join the cause and bring warmth to even more lives.
                </p>
            </div>
        </div>
    );
};

export default Testimonials;
