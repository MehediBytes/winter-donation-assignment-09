import React from "react";
import { Link } from "react-router-dom";
import bannerBg from "../assets/help-banner.jpg"

const Help = () => {
    return (
        <div className="max-w-5xl mx-auto my-10">
            {/* <div>
                <img src={banner} alt="" />
            </div> */}
            <div className="px-6">
                {/* Header Section */}
                <div className="text-center bg-cover bg-center bg-no-repeat p-10 lg:p-24 w-full mx-auto mb-10 rounded-lg" style={{ backgroundImage: `url(${bannerBg})` }}>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-blue-900 my-6 animate__animated animate__slower animate__fadeInDown">
                        Spread Warmth with Winter Clothing Donations
                    </h1>
                    <p className="text-lg text-gray-100 my-10 animate__animated animate__slower animate__fadeInUp">
                        Join us in making this winter warmer for those in need. <br /> Your donated clothing can make all the difference.
                    </p>
                </div>

                {/* Donation Info Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-blue-200">
                    <h2 className="md:text-3xl text-2xl font-semibold text-blue-800 mb-4 text-center">
                        Why Your Help Matters
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-center mb-6">
                        Every winter, countless individuals face harsh conditions without adequate clothing. Your donation of warm clothing like jackets, sweaters, scarves, gloves, and blankets can help protect them from the cold and bring hope during difficult times.
                    </p>
                </div>

                {/* Steps to Help */}
                <div className="mt-12">
                    <h2 className="md:text-3xl text-2xl font-bold text-blue-800 text-center mb-8 animate__animated animate__heartBeat animate__slower animate__infinite">
                        How to Donate
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Step 1 */}
                        <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-200 hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
                            <h3 className="lg:text-3xl text-2xl font-semibold text-blue-800 mb-3">
                                1. Gather Warm Clothing
                            </h3>
                            <p className="text-gray-600">
                                Collect gently used or new winter clothing such as jackets, coats, sweaters, gloves, and scarves.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-200 hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
                            <h3 className="lg:text-3xl text-2xl font-semibold text-blue-800 mb-3">
                                2. Find a Drop-Off Location
                            </h3>
                            <p className="text-gray-600">
                                Locate your nearest donation center or use our site to find the closest collection points.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-200 hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
                            <h3 className="lg:text-3xl text-2xl font-semibold text-blue-800 mb-3">
                                3. Spread the Word
                            </h3>
                            <p className="text-gray-600">
                                Encourage your friends and family to donate and share our mission on social media.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="md:text-3xl text-2xl font-bold text-blue-800 mb-4">
                        Together, We Can Make a Difference
                    </h2>
                    <p className="text-lg text-blue-600 mb-6">
                        Every donation brings warmth and hope to someone's life. Start your journey of giving today.
                    </p>
                    <Link to={"/donation"}>
                        <button className="btn btn-primary text-white py-3 px-8 rounded-full animate__animated animate__pulse animate__infinite">
                            Donate Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Help;
