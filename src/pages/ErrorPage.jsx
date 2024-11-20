import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="text-center space-y-5 py-10">
            <Helmet>
                <title>Error-Page | Warm-Hearts</title>
            </Helmet>
            <h1 className="text-5xl font-medium mb-10">Page not found.</h1>
            <p className="pb-5">404 Error Page</p>
            <Link to='/'>
                <button className="btn btn-primary">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;