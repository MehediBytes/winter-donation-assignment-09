import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";


const ForgotPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState(location.state?.email || "");

    const handleResetPassword = async () => {
        if (!email) {
            toast.error("Please enter a valid email.");
            return;
        }
        try {
            await resetPassword(email);
            toast.success("Password reset email sent. Check your inbox!");
            window.open("https://mail.google.com", "_blank");
            navigate("/auth/login");
        } catch (error) {
            toast.error("Failed to send password reset email!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
                <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button
                    onClick={handleResetPassword}
                    className="btn btn-primary w-full mt-4"
                >
                    Reset Password
                </button>
            </div>
        </div>
    );
};

export default ForgotPassword;
