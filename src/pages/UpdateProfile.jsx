import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!name || !photoURL) {
            toast.info("Both fields are required.");
            return;
        }

        try {
            await updateUserProfile({ displayName: name, photoURL });
            setUser((prev) => ({ ...prev, displayName: name, photoURL }));
            toast.success("Profile updated successfully!");
            navigate("/dashboard");
        } catch (error) {
            toast.error("Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200">
            <form
                onSubmit={handleUpdate}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg border border-blue-300"
            >
                <h2 className="text-3xl font-bold text-blue-700 text-center mb-6 animate__animated animate__slower  animate__fadeInDown">
                    Update Your Profile
                </h2>
                <div className="mb-6">
                    <label className="block text-gray-800 font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered w-full border-blue-300 focus:ring focus:ring-blue-200 rounded-lg"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-800 font-medium mb-2"
                        htmlFor="photoURL"
                    >
                        Photo URL
                    </label>
                    <input
                        type="url"
                        id="photoURL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="input input-bordered w-full border-blue-300 focus:ring focus:ring-blue-200 rounded-lg"
                        placeholder="Enter photo URL"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-full bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition-transform"
                >
                    Update Information
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
