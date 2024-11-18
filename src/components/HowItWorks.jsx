import React from 'react';
import 'animate.css';

const HowItWorks = () => {
    return (
        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10 rounded-lg shadow-lg space-y-10">
            <h2 className="text-4xl font-extrabold text-center text-blue-600 animate__animated animate__heartBeat animate__slower animate__infinite">
                How It Works
            </h2>
            <hr className="border-t-2 border-blue-200 mx-auto w-2/3" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
                    <div className="text-5xl font-black text-blue-600 mb-4">1</div>
                    <h3 className="text-2xl font-bold mb-3">Choose a Campaign</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Browse our <span className="font-semibold">active campaigns</span> and pick one that resonates with you. Each campaign supports a specific division.
                    </p>
                </div>
                <div className="text-center p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
                    <div className="text-5xl font-black text-blue-600 mb-4">2</div>
                    <h3 className="text-2xl font-bold mb-3">Make Your Donation</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Donate securely online or visit one of our <span className="font-semibold">collection points</span> near you to drop off supplies.
                    </p>
                </div>
                <div className="text-center p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
                    <div className="text-5xl font-black text-blue-600 mb-4">3</div>
                    <h3 className="text-2xl font-bold mb-3">Track Your Impact</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Stay updated on how your contributions are making a difference in the lives of those in need.
                    </p>
                </div>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Supported Divisions</h3>
                <ul className="list-disc list-inside text-gray-800 text-lg">
                    <li>Dhaka</li>
                    <li>Chattogram</li>
                    <li>Rajshahi</li>
                    <li>Sylhet</li>
                    <li>Barishal</li>
                    <li>Khulna</li>
                    <li>Rangpur</li>
                    <li>Mymensingh</li>
                </ul>
            </div>
        </div>
    );
};

export default HowItWorks;
