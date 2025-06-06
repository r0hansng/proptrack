import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const user =
      JSON.parse(localStorage.getItem('proptrack_user')) ||
      JSON.parse(sessionStorage.getItem('proptrack_user'));

    setIsLoggedIn(user?.isLoggedIn || false);
  }, []);

  useEffect(() => {
    if (showLogoutModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showLogoutModal]);

  const logout = () => {
    localStorage.removeItem('proptrack_user');
    sessionStorage.removeItem('proptrack_user');
    setIsLoggedIn(false);
    navigate('/');
  };

  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/register';

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
              className={({ isActive }) => (isActive ? 'text-white/95' : 'text-white/75')}
            >
              Home
            </NavLink>
            <NavLink
              to="/properties"
              className={({ isActive }) => (isActive ? 'text-white/95' : 'text-white/75')}
            >
              Properties
            </NavLink>
            {isLoggedIn && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? 'text-white/95' : 'text-white/75')}
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'text-white/95' : 'text-white/75')}
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
              <Button
                variant="destructive"
                size="sm"
                className="flex items-center justify-center h-6 py-0 text-xs rounded-3xl"
                onClick={() => setShowLogoutModal(true)}
              >
                Logout
              </Button>
            )}
          </nav>

          <button
            className="block text-white md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <motion.span
              key={mobileMenuOpen ? 'close' : 'open'}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: mobileMenuOpen ? 180 : 0, opacity: 1 }}
              exit={{ rotate: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl"
            >
              {mobileMenuOpen ? '×' : '☰'}
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
              {isLoggedIn && (
                <NavLink
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-white/80 hover:text-white"
                >
                  Dashboard
                </NavLink>
              )}
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
                <Button
                  variant="destructive"
                  size="sm"
                  className="h-6 py-0 text-xs rounded-3xl"
                  onClick={() => {
                    setShowLogoutModal(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logout Confirmation Modal */}
        <AnimatePresence>
          {showLogoutModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Background overlay */}
              <div className="absolute inset-0 border bg-black/40 /backdrop-blur-xl" />

              {/* Modal box */}
              <motion.div
                className="z-10 bg-black/85 rounded-xl shadow-xl p-6 w-[90%] max-w-sm translate-y-[-50%] top-[15vh] absolute border-white/20 border"
                initial={{ scale: 0.9, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="mb-2 text-lg font-semibold text-white">Confirm Logout</h2>
                <p className="mb-6 text-sm text-white/70">Are you sure you want to log out?</p>
                <div className="flex justify-end gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-500 border-blue-500/60 hover:bg-blue-500/40"
                    onClick={() => setShowLogoutModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="destructive" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
