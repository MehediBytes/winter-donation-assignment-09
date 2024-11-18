import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-100">
                <p className="text-xl font-bold text-blue-700">
                    Loading user information...
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center my-10">
            <h1 className="text-4xl font-extrabold text-blue-700 mb-8 animate__animated animate__slower animate__fadeInDown">
                Welcome, {user.displayName || "User"}!
            </h1>

            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
                <div className="flex flex-col items-center">
                    <img
                        src={user.photoURL || "https://via.placeholder.com/150"}
                        alt="User Avatar"
                        className="rounded-full w-32 h-32 border-4 border-blue-300 shadow-lg mb-6"
                    />
                    <p className="text-2xl font-semibold text-blue-700 mb-2">
                        {user.displayName || "Name not available"}
                    </p>
                    <p className="text-gray-600">{user.email}</p>
                </div>
                <button
                    onClick={() => navigate("/update-profile")}
                    className="mt-8 w-full py-3 bg-blue-600 text-white text-lg font-bold rounded-full shadow-md hover:bg-blue-700 transform transition-transform hover:scale-105"
                >
                    Update Profile
                </button>
            </div>

            <div className="w-full p-4">
                <p className="text-center text-gray-500 font-semibold mt-5">
                    ❄️ Stay warm this winter and keep your profile up to date! ❄️
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
