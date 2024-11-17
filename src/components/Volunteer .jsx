import React from 'react';
import { Link } from 'react-router-dom';

const Volunteer = () => {
    return (
        <div className="space-y-10">
            <h2 className="text-3xl font-bold text-center">
                Volunteer with Us
            </h2>
            <hr />
            <p className="text-gray-700 text-center mb-4">
                Want to make a bigger impact? Join our team of dedicated volunteers
                who work tirelessly to ensure donations reach those in need.
            </p>
            <div className="flex justify-center">
                <Link to={"/login"}><button className="btn btn-link">
                    Sign Up as a Volunteer
                </button></Link>
            </div>
        </div>
    );
};

export default Volunteer;