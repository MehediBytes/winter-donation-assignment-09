import React from 'react';

const Banner = ({ donations }) => {
    return (
        <div className="carousel w-full h-96 rounded-xl">
            {donations.map((donation, index) => (
                <div
                    key={donation.id}
                    id={`slide${index}`}
                    className="carousel-item relative w-full"
                >
                    <img
                        src={donation.image}
                        alt={donation.title}
                        className="w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-lg font-bold">{donation.title}</h3>
                        <p className="text-sm">{donation.division}</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                            href={`#slide${index === 0 ? donations.length - 1 : index - 1}`}
                            className="btn btn-circle"
                        >
                            ❮
                        </a>
                        <a
                            href={`#slide${index === donations.length - 1 ? 0 : index + 1}`}
                            className="btn btn-circle"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;