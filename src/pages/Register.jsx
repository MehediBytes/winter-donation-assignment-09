import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { register, googleLogin, setUser, updateUserProfile, showPassword, setShowPassword } = useContext(AuthContext);
    const navigate = useNavigate();

    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");

        // Password Validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must include uppercase, lowercase, and be at least 6 characters long."
            );
            return;
        }

        register(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Registered successfully!");
                        navigate("/");
                    })
                    .catch((err) => {
                        toast.error(err.message || "Profile update failed!");
                    });
            })
            .catch((error) => {
                toast.error(
                    error?.message || "Registration failed! Please try again."
                );
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("Registered with Google successfully!");
                navigate("/");
            })
            .catch((error) => {
                toast.error(
                    error?.message || "Google Register failed! Please try again."
                );
            });
    };

    return (
        <div className="flex items-center justify-center my-10">
            <Helmet>
                <title>Register | Warm-Hearts</title>
            </Helmet>
            <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md border border-blue-300">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 animate__animated animate__slower animate__fadeInDown">
                    Register
                </h2>
                <hr className="border-blue-300" />
                <form onSubmit={handleRegister} className="space-y-6 mt-6">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-gray-700 font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input input-bordered w-full border-blue-300 focus:ring focus:ring-blue-200 rounded-lg"
                            required
                        />
                    </div>

                    {/* Photo URL Field */}
                    <div>
                        <label
                            htmlFor="photo"
                            className="block mb-2 text-gray-700 font-medium"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            id="photo"
                            className="input input-bordered w-full border-blue-300 focus:ring focus:ring-blue-200 rounded-lg"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-gray-700 font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input input-bordered w-full border-blue-300 focus:ring focus:ring-blue-200 rounded-lg"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-gray-700 font-medium"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className="input input-bordered w-full border-blue-300 focus:ring focus:ring-blue-200 rounded-lg"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3 text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="text-lg" />
                                ) : (
                                    <FaEye className="text-lg" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transform transition-transform"
                    >
                        Register
                    </button>

                    {/* Google Login Button */}
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn w-full bg-white text-blue-600 border-blue-400 hover:bg-blue-200 rounded-lg flex items-center justify-center space-x-2 shadow-sm"
                    >
                        <FaGoogle className="text-lg" />
                        <span>Register with Google</span>
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-sm mt-6 text-center">
                    Already have an account?{" "}
                    <Link
                        to="/auth/login"
                        className="text-blue-600 font-bold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
