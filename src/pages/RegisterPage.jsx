import React from 'react';
import Button from '../components/UI/Button/Button';
import { Link } from 'react-router-dom';
import Toast from '../components/UI/Toast/Toast';
import Input from '../components/UI/Input/Input';
import { useRegistrationForm } from '../hooks/useRegistrationForm';

const RegisterPage = () => {
  const {
    formData,
    password,
    confirmPassword,
    passwordError,
    showToast,
    years,
    handleChange,
    handleSubmit,
    setPassword,
    setConfirmPassword,
  } = useRegistrationForm();

  return (
    <>
      <Toast title="Success" description="Account created successfully!" show={showToast} />
      <div className="min-h-screen flex items-center justify-center bg-[#1C1C1E] px-4">
        <div className="w-full max-w-xl max-h-[80vh] bg-[#1C1C1E] p-6 sm:p-12 rounded-3xl shadow-[0_6px_20px_6px_rgba(0,0,0,0.4)] relative flex flex-col overflow-hidden">
          <div className="flex-grow overflow-y-scroll scrollbar-hidden">
            <h2 className="mb-4 text-3xl font-semibold text-center text-black dark:text-white">
              Create your PropTrack Account
            </h2>
            <p className="mb-6 text-sm text-center text-white/70">
              Already have a PropTrack Account?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Sign In <span className="text-xs">􀄯</span>
              </Link>
            </p>
            <form className="flex flex-col flex-grow space-y-4" onSubmit={handleSubmit}>
              <div className="flex sm:gap-4">
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
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
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December',
                    ].map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-2 text-white/50">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
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
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-2 text-white/50">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
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
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-2 text-white/50">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <Input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                placeholder="Address Line 1"
              />
              <Input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                placeholder="Address Line 2 (Optional)"
                required={false}
              />
              <hr className="mt-2 text-white/15" />

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />

              <label className="text-xs text-white/70">
                This will be your new PropTrack Account.
              </label>

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}

              <hr className="text-white/15" />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
              />
              <div className="mt-8 text-xs text-center text-white/60">
                <img
                  src="https://www.apple.com/legal/images/icon_dataprivacy_2x.png"
                  alt="Privacy Icon"
                  className="w-8 h-8 mx-auto mb-4"
                />
                <p>
                  Your PropTrack Account information is used to allow you to sign in securely and access your data PropTrack records certain data for security, support, and reporting purposes. If you agree PropTrack may also use your account information to send you marketing emails and communications including those based on your use of PropTrack services.
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
        </div>
      </div>
    </>
  );
};

export default RegisterPage;