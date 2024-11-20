import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const Donation = () => {
    const donations = useLoaderData();
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <Helmet>
                <title>Campaigns | Warm-Hearts</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-5 animate__animated animate__slower animate__fadeInDown">Donation Campaigns</h1>
            <hr className='mb-10 border-blue-500 max-w-xs mx-auto' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {donations.map((donation) => (
                    <div
                        key={donation.id}
                        className="card bg-base-100 shadow-xl border border-gray-200 p-2 transition-transform transform hover:scale-105"
                    >
                        <div className='h-52'>
                            <img
                                src={donation.image}
                                alt={donation.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold text-gray-800">
                                {donation.title}
                            </h2>
                            <p className="text-sm text-gray-600 line-clamp-3">
                                {donation.description}
                            </p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="badge badge-lg badge-info">{donation.division}</span>
                                <Link to={`/donation/${donation.id}`}>
                                    <button className="btn btn-sm btn-primary text-white hover:bg-green-700">Donate Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Donation;