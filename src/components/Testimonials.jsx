import React from 'react';

const Testimonials = () => {
    return (
        <div className='space-y-10'>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                What People Are Saying
            </h2>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-lg shadow">
                    <p className="italic text-gray-700">
                        "This initiative truly warms hearts. My family and I were able to
                        support a whole community last winter!"
                    </p>
                    <p className="text-right mt-2 font-semibold">- A Donor</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <p className="italic text-gray-700">
                        "Thanks to the generous donations, my children didn’t have to
                        endure the harsh winter without proper clothing."
                    </p>
                    <p className="text-right mt-2 font-semibold">- A Recipient</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;