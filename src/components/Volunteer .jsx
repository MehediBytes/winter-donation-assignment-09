import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import volunteer from "../assets/volunteer.jpg";

const Volunteer = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-10 rounded-lg shadow-md space-y-8">
            <div className='relative'>
                <img className='w-full h-full object-cover rounded-xl opacity-80' src={volunteer} alt="" />
                <h3 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center md:text-2xl font-bold'>One of the best profession is spreading happiness.</h3>
            </div>
            <h2 className="text-4xl font-extrabold text-center text-blue-600 animate__animated animate__heartBeat animate__slower animate__infinite">
                Volunteer with Us
            </h2>
            <hr className="border-t-2 border-blue-300 max-w-xs mx-auto" />
            <p className="text-gray-800 text-lg text-center leading-relaxed">
                Want to make a bigger impact? Be part of our dedicated volunteer team
                and help ensure that donations bring warmth and comfort to those in need.
            </p>
            <div className="flex justify-center">
                <Link to={"/auth/register"}>
                    <button className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 animate__animated animate__pulse animate__infinite">
                        Sign Up as a Volunteer
                    </button>
                </Link>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-700 text-center mb-3">
                    Why Volunteer?
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                    Volunteering with us means making a real difference in your community.
                    Together, we can bring hope and warmth to those who need it most.
                </p>
            </div>
        </div>
    );
};

export default Volunteer;
