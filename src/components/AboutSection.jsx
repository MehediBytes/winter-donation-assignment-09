import React from 'react';
import 'animate.css';

const AboutSection = () => {
    return (
        <div className="space-y-10">
            <h2 className="text-3xl font-bold text-center animate__animated animate__heartBeat animate__slower animate__infinite">
                About Us
            </h2>
            <hr />
            <p className="text-gray-700 text-center">
                Our mission is to bring warmth and comfort to those in need during
                winter. By connecting generous donors with local communities, we aim
                to ensure no one has to face the cold alone. Join us in making a
                difference!
            </p>
        </div>
    );
};

export default AboutSection;