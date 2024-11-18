import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { FaGoogle } from "react-icons/fa6";


const Register = () => {
    const { register, googleLogin, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

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
                        navigate("/")
                    })
                    .catch(err => { alert(err); })
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
                toast.success("Logged in with Google successfully!");
                navigate("/");
            })
            .catch((error) => {
                toast.error(
                    error?.message || "Google login failed! Please try again."
                );
            });
    };

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="p-8 bg-white rounded-lg shadow-xl w-96 border">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <hr />
                <form onSubmit={handleRegister}>
                    {/* Name Field */}
                    <div className="my-4">
                        <label htmlFor="name" className="block mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Photo URL Field */}
                    <div className="mb-4">
                        <label htmlFor="photo" className="block mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            id="photo"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full mb-4">
                        Register
                    </button>

                    {/* Google Login Button */}
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn text-blue-400 border-blue-400 w-full"
                    ><FaGoogle></FaGoogle>
                        Register with Google
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-sm mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/auth/login" className="text-blue-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
