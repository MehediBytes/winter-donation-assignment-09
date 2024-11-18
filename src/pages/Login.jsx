import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
    const { login, googleLogin, showPassword, setShowPassword } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            toast.success("Logged in successfully!");
            navigate(from, { replace: true });
        } catch (error) {
            toast.error("Invalid Email or Password!");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            toast.success("Logged in with Google!");
            navigate(from, { replace: true });
        } catch (error) {
            toast.error("Google login failed!");
        }
    };

    return (
        <div className="flex items-center justify-center my-10">
            <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md border border-blue-300">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 animate__animated animate__slower animate__fadeInDown">
                    Login
                </h2>
                <hr className="border-blue-300" />
                <form onSubmit={handleLogin} className="space-y-6 mt-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full border-blue-300 focus:ring focus:ring-blue-200 rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="input input-bordered w-full border-blue-300 focus:ring focus:ring-blue-200 rounded-lg pr-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {/* Password Toggle Icon */}
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <label className="label">
                            <a href="#" className="label-text-alt text-blue-500 link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transform transition-transform"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn w-full bg-blue-100 text-blue-600 border-blue-400 hover:bg-blue-200 rounded-lg flex items-center justify-center space-x-2 shadow-sm"
                    >
                        <FaGoogle className="text-lg" />
                        <span>Login with Google</span>
                    </button>
                </form>
                <p className="text-sm mt-6 text-center">
                    Don't have an account?{" "}
                    <Link to="/auth/register" className="text-blue-600 font-bold hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
