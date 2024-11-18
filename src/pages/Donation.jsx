import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Donation = () => {
    const donations = useLoaderData();
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1 className="text-3xl font-bold text-center mb-8">Donation Campaigns</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {donations.map((donation) => (
                    <div
                        key={donation.id}
                        className="card bg-base-100 shadow-xl border border-gray-200 p-2"
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
                                <span className="badge badge-outline">{donation.division}</span>
                                <Link to={`/donation/${donation.id}`}>
                                    <button className="btn bg-[#b183ea]">Donate Now</button>
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