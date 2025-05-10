import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/UI/Button/Button';
import Toast from '../components/UI/Toast/Toast';
import { Link } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';

const LoginPage = () => {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({ title: '', description: '' });

  const [storedUser, setStoredUser] = useState(null);

  useEffect(() => {
    const sessionUser =
      JSON.parse(localStorage.getItem('proptrack_user')) ||
      JSON.parse(sessionStorage.getItem('proptrack_user'));

    if (sessionUser?.isLoggedIn) {
      window.location.href = '/';
    }
  }, []);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleEmailSubmit = () => {
    if (!isValidEmail(email)) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
      return;
    }

    // Retrieve the registered user from localStorage
    const user = JSON.parse(localStorage.getItem('userData'));

    // Check if the user exists and the email matches
    if (!user || user.email !== email) {
      setToastContent({
        title: 'User Not Found',
        description: 'Please register before logging in.',
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      return;
    }

    // If the user is found, set the storedUser and move to password step
    setStoredUser(user);
    setStep('password');
    setShowTooltip(false);
  };

  const [isLoading, setIsLoading] = useState(false); // Add state for loader

  const handleFormSubmit = () => {
    if (!storedUser || storedUser.password !== password) {
      setToastContent({
        title: 'Incorrect Password',
        description: 'The password you entered is incorrect.',
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      return;
    }

    const loginSession = {
      ...storedUser,
      isLoggedIn: true,
      keepLoggedIn,
    };

    if (keepLoggedIn) {
      localStorage.setItem('proptrack_user', JSON.stringify(loginSession));
    } else {
      sessionStorage.setItem('proptrack_user', JSON.stringify(loginSession));
    }

    setToastContent({
      title: 'Logged In',
      description: 'Welcome back!',
    });
    setShowToast(true);

    // Show loader and redirect after a delay
    setIsLoading(true);
    setTimeout(() => {
      setShowToast(false);
      window.location.href = '/';
    }, 1500);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Toast title={toastContent.title} description={toastContent.description} show={showToast} />

      <div className="min-h-screen flex items-center justify-center bg-[#1C1C1E] px-4">
        <div className="w-full max-w-md bg-[#1C1C1E] p-10 rounded-3xl shadow-[0_6px_20px_6px_rgba(0,0,0,0.4)]">
          <h2 className="mb-6 text-2xl font-semibold text-center text-white">
            Login to your PropTrack Account
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className={`w-full px-4 py-2 pr-12 border ${
                  showTooltip ? 'border-red-500' : 'border-white/30'
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#252527] text-white placeholder:text-white/40
                                    mt-4 /mb-[0.5rem] w-full appearance-none px-4 py-3 border border-white/20`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleEmailSubmit();
                  }
                }}
              />
              {step === 'email' && (
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="absolute inset-y-0 flex items-center text-2xl font-light right-3 text-white/20"
                  title="Next"
                >
                  􁾤
                </button>
              )}
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute left-0 z-10 py-1 text-sm text-red-600 top-full"
                  >
                    Please enter a valid email address.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {step === 'password' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Password"
                      className="pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white
                                            /mt-2 mb-[0.5rem] placeholder:text-white/40 w-full appearance-none px-4 py-3 bg-[#252527] border border-white/20 rounded-xl"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleFormSubmit();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleFormSubmit}
                      className="absolute inset-y-0 flex items-center text-2xl font-light right-3 text-white/20"
                      title="Submit"
                    >
                      􁾤
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center mt-12">
              <div
                className="flex items-center space-x-2 cursor-pointer select-none"
                onClick={() => setKeepLoggedIn(!keepLoggedIn)}
              >
                <div
                  className={`h-4 w-4 rounded-xs border border-white/30 flex items-center justify-center ${
                    keepLoggedIn ? 'bg-blue-500' : 'bg-[#1C1C1E]'
                  }`}
                >
                  {keepLoggedIn && <span className="text-xs text-white">􀆅</span>}
                </div>
                <span className="text-white text-md">Keep me logged in</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Button variant="link" className="text-[#2797FE] hover:text-none font-normal p-0 m-0">
                <Link to="/register">
                  Create an Account <span className="text-xs">􀆊</span>
                </Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;