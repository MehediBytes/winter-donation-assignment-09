import React from 'react';

const HowItWorks = () => {
    return (
        <div className='space-y-10'>
            <h2 className="text-3xl font-bold text-center">
                How It Works
            </h2>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">1. Choose a Campaign</h3>
                    <p className="text-gray-700">
                        Browse our active campaigns and select the one you want to support.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">2. Donate</h3>
                    <p className="text-gray-700">
                        Make a donation through our secure online platform or visit a
                        collection point.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                        3. Track Your Impact
                    </h3>
                    <p className="text-gray-700">
                        Receive updates on how your contribution is making a difference.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;