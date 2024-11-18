import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
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
            toast.error("Invalid credentials!");
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
        <div className="flex items-center justify-center mt-10">
            <div className="p-8 bg-white rounded-lg shadow-xl w-96 border">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <hr />
                <form onSubmit={handleLogin}>
                    <div className="my-4">
                        <label className="block mb-2">Email</label>
                        <input type="email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input type="password" className="input input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-full mb-4">Login</button>
                    <button type="button" onClick={handleGoogleLogin} className="btn text-blue-400 border-blue-400 w-full"><FaGoogle></FaGoogle> Login with Google</button>
                </form>
                <p className="text-sm mt-4 text-center">Don't have an account? <Link to="/auth/register" className="text-blue-500">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
