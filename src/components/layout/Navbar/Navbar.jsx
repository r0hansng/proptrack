/* eslint-disable no-unused-vars */
// ! This is not being used in the app yet. It is a work in progress.

import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

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
                        {/* <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "text-white/95" : "text-white/75"
                            }
                        >
                            About
                        </NavLink> */}
                        <NavLink
                            to="/properties"
                            className={({ isActive }) =>
                                isActive ? "text-white/95" : "text-white/75"
                            }
                        >
                            Properties
                        </NavLink>
                        {/* <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "text-white/95" : "text-white/75"
                            }
                        >
                            Dashboard
                        </NavLink> */}
                        {/* Show dashboard only if user is logged in */}
                        {isLoggedIn && (
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "text-white/95" : "text-white/75"
                                }
                            >
                                Dashboard
                            </NavLink>
                        )}
                        {/* {isLoggedIn && (
                            <NavLink
                                to="/properties"
                                className={({ isActive }) =>
                                    isActive ? "text-white/95" : "text-white/75"
                                }
                            >
                                Properties
                            </NavLink>
                        )} */}
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


                    {/* Hamburger Button */}
                    <button
                        className="block text-white md:hidden focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <motion.span
                            key={mobileMenuOpen ? "close" : "open"}
                            initial={{ rotate: 0, opacity: 0 }}
                            animate={{ rotate: mobileMenuOpen ? 180 : 0, opacity: 1 }}
                            exit={{ rotate: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-xl"
                        >
                            {mobileMenuOpen ? "×" : "☰"}
                        </motion.span>
                    </button>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="mt-2 mb-4 space-y-2 md:hidden h-fit"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <NavLink
                                to="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-sm text-white/80 hover:text-white"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/properties"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-sm text-white/80 hover:text-white"
                            >
                                Properties
                            </NavLink>
                            <NavLink
                                to="/dashboard"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-sm text-white/80 hover:text-white"
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                to="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-sm text-white/80 hover:text-white"
                            >
                                Contact
                            </NavLink>

                            {!isLoggedIn && !isLoginPage && !isSignupPage && (
                                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                                    <Button variant="primary" size="sm" className="h-6 py-0 text-xs rounded-3xl">
                                        Login
                                    </Button>
                                </Link>
                            )}

                            {isLoggedIn && (
                                <Link to="/profile" onClick={() => setMobileMenuOpen(false)} title="Profile" className="text-lg text-white/70 hover:text-white">
                                    {/* SF Symbol Fallback */}
                                    <span role="img" aria-label="Profile">􀓤</span>
                                </Link>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Menu */}
                {/* {mobileMenuOpen && (
                    <div className="mt-2 mb-4 space-y-2 md:hidden h-fit">
                        <NavLink
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-white/80 hover:text-white"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/properties"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-white/80 hover:text-white"
                        >
                            Properties
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-white/80 hover:text-white"
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-white/80 hover:text-white"
                        >
                            Contact
                        </NavLink>

                        {!isLoggedIn && !isLoginPage && !isSignupPage && (
                            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="primary" size="sm" className="h-6 py-0 text-xs rounded-3xl">
                                    Login
                                </Button>
                            </Link>
                        )}

                        {isLoggedIn && (
                            <Link to="/profile" onClick={() => setMobileMenuOpen(false)} title="Profile" className="text-lg text-white/70 hover:text-white">
                                {/* SF Symbol Fallback */}
                        {/* <span role="img" aria-label="Profile">􀓤</span>
                    </Link>
                )}

            </div>
                )} /*/}
        </div>
        </header >
    );
}
