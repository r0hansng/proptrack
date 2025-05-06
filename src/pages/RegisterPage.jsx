import React, { useState } from "react";
import Button from "../components/UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../components/UI/Toast/Toast";

export default function RegisterPage() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 121 }, (_, i) => currentYear - i);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        month: "",
        day: "",
        year: "",
        address1: "",
        address2: "",
        email: "",
        phone: "",
    });

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }

        setPasswordError("");

        const existingData = JSON.parse(localStorage.getItem("userData"));

        if (existingData && existingData.email === formData.email) {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 4000);

            setTimeout(() => {
                navigate("/login");
            }, 4000);

            return;
        }

        const fullFormData = {
            ...formData,
            password,
        };

        localStorage.setItem("userData", JSON.stringify(fullFormData));
        console.log("Form submitted successfully!", fullFormData);

        navigate("/login");
    };

    return (
        <>
            <style>
                {`
                    .scrollbar-hidden::-webkit-scrollbar {
                        display: none;
                    }

                    .scrollbar-hidden {
                        -ms-overflow-style: none;
                        scrollbar-width: 0px;
                    }
                    `}
            </style>
            <Toast
                title="Success"
                description="Account created successfully!"
                show={showToast}
            />
            <div className="min-h-screen flex items-center justify-center bg-[#1C1C1E] px-4">
                <div className="w-full max-w-xl max-h-[80vh] bg-[#1C1C1E] p-6 sm:p-12 rounded-3xl shadow-[0_6px_20px_6px_rgba(0,0,0,0.4)] relative flex flex-col overflow-hidden">
                    <div className="flex-grow overflow-y-scroll scrollbar-hidden">
                        <h2 className="mb-4 text-3xl font-semibold text-center text-black dark:text-white">
                            Create your PropTrack Account
                        </h2>
                        <p className="mb-6 text-sm text-center text-white/70">
                            Already have a PropTrack Account?{" "}
                            <Link to="/login" className="text-blue-500 hover:underline">
                                Sign In <span className="text-xs">􀄯</span>
                            </Link>
                        </p>
                        <form className="flex flex-col flex-grow space-y-4" onSubmit={handleSubmit}>
                            <div className="flex sm:gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="w-full placeholder:text-white/40 focus:placeholder-transparent appearance-none px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="placeholder:text-white/40 focus:placeholder-transparent w-full appearance-none px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <label className="text-white text-md">Birthday</label>
                            <div className="flex gap-4">
                                {/* Month Dropdown */}
                                <div className="relative w-1/3">
                                    <select
                                        name="month"
                                        value={formData.month}
                                        onChange={handleChange}
                                        className="appearance-none w-full px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Month</option>
                                        {[
                                            "January", "February", "March", "April", "May", "June",
                                            "July", "August", "September", "October", "November", "December"
                                        ].map((month, index) => (
                                            <option key={index} value={month}>{month}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 flex items-center pointer-events-none right-2 text-white/50">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Day Dropdown */}
                                <div className="relative w-1/3">
                                    <select
                                        name="day"
                                        value={formData.day}
                                        onChange={handleChange}
                                        className="appearance-none w-full px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Day</option>
                                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 flex items-center pointer-events-none right-2 text-white/50">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Year Dropdown */}
                                <div className="relative w-1/3">
                                    <select
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        className="appearance-none w-full px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Year</option>
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 flex items-center pointer-events-none right-2 text-white/50">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <input
                                name="address1"
                                value={formData.address1}
                                onChange={handleChange}
                                placeholder="Address Line 1"
                                className="mt-2 mb-[0.5rem] placeholder:text-white/40 focus:placeholder-transparent w-full appearance-none px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                name="address2"
                                value={formData.address2}
                                onChange={handleChange}
                                placeholder="Address Line 2 (Optional)"
                                className="mt-2 mb-[0.5rem] placeholder:text-white/40 focus:placeholder-transparent w-full appearance-none px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <hr className="mt-2 text-white/15" />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                                className="mt-2 mb-[0.5rem] placeholder:text-white/40 focus:placeholder-transparent w-full appearance-none px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <label className="text-xs text-white/70">This will be your new PropTrack Account.</label>

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-2 mb-[0.5rem] placeholder:text-white/40 focus:placeholder-transparent w-full appearance-none px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="mt-2 mb-[1rem] placeholder:text-white/40 focus:placeholder-transparent w-full appearance-none px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}

                            <hr className="text-white/15" />

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="mt-2 mb-[0.5rem] placeholder:text-white/40 focus:placeholder-transparent w-full appearance-none px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                pattern="[0-9]{10}"
                                title="Enter a valid 10-digit phone number"
                                required
                            />
                            <div className="mt-8 text-xs text-center text-white/60">
                                <img
                                    src="https://www.apple.com/legal/images/icon_dataprivacy_2x.png"
                                    alt="Privacy Icon"
                                    className="w-8 h-8 mx-auto mb-4"
                                />
                                <p>
                                    Your PropTrack Account information is used to allow you to sign in securely and access your data. PropTrack records certain data for security, support, and reporting purposes. If you agree, PropTrack may also use your account information to send you marketing emails and communications, including those based on your use of PropTrack services.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-between w-full gap-4 mt-6 rounded-b-2xl">
                                <Link to="/login" className="flex-1 w-full sm:w-auto">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-blue-500 transition-colors duration-200 border-blue-500 hover:bg-blue-500 hover:text-white"
                                    >
                                        Cancel
                                    </Button>
                                </Link>
                                <button type="submit" className="flex-1 w-full sm:w-auto">
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="w-full transition-colors duration-200"
                                    >
                                        Continue
                                    </Button>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Move the buttons outside of the form */}
                </div>
            </div>
        </>
    );
}
