import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../../UI/Button/Button";

export default function Navbar() {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in from localStorage or sessionStorage
        const user =
            JSON.parse(localStorage.getItem("proptrack_user")) ||
            JSON.parse(sessionStorage.getItem("proptrack_user"));

        setIsLoggedIn(user?.isLoggedIn || false);
    }, []);

    const isLoginPage = location.pathname === "/login";
    const isSignupPage = location.pathname === "/register";

    return (
        <header className="fixed top-0 left-0 right-0 border-b bg-white/5 z-45 backdrop-blur-xl backdrop-saturate-200 border-white/20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    <Link to="/" className="text-2xl font-semibold cursor-pointer select-none text-white/90">
                        PropTrack
                    </Link>

                    <nav className="items-center hidden gap-6 text-xs font-normal md:flex">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-white/95" : "text-white/75"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "text-white/95" : "text-white/75"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/properties"
                            className={({ isActive }) =>
                                isActive ? "text-white/95" : "text-white/75"
                            }
                        >
                            Properties
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "text-white/95" : "text-white/75"
                            }
                        >
                            Contact
                        </NavLink>

                        {!isLoggedIn && !isLoginPage && !isSignupPage && (
                            <Link to="/login">
                                <Button variant="primary" size="sm" className="h-6 py-0 text-xs rounded-3xl">
                                    Login
                                </Button>
                            </Link>
                        )}

                        {isLoggedIn && (
                            <Link to="/profile" title="Profile" className="text-lg text-white/70 hover:text-white">
                                {/* SF Symbol Fallback */}
                                <span role="img" aria-label="Profile">􀓤</span>
                            </Link>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
