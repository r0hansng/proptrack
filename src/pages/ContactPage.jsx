import React, { useState } from 'react';
import Button from '../components/UI/Button/Button';
import Toast from '../components/UI/Toast/Toast';
import styles from "../styles/contact.module.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToastMessage('Your message has been sent!');
    setShowToast(true);

    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <Toast title="Message Sent" description={toastMessage} show={showToast} />

      <div className="relative flex items-center justify-center min-h-screen px-4 py-12 overflow-hidden bg-black">
        <div
          className={`${styles['animate-random-move-1']} bg-blue-100 rounded-full w-96 h-96 blur-3xl opacity-20`}
          style={{ top: '10%', left: '5%' }}
        ></div>
        <div
          className={`${styles['animate-random-move-2']} bg-blue-100 rounded-full animate-random-move-2 w-80 h-80 blur-2xl opacity-30`}
          style={{ bottom: '15%', right: '10%' }}
        ></div>
        <div
          className={`w-64 h-64 bg-blue-100 rounded-full ${styles['animate-random-move-3']} blur-xl opacity-10`}
          style={{ top: '5%', right: '20%' }}
        ></div>
        <div
          className={`bg-blue-100 rounded-full ${styles['animate-random-move-1']} w-72 h-72 blur-2xl opacity-15`}
          style={{ bottom: '10%', left: '15%' }}
        ></div>
        <div
          className={`bg-blue-100 rounded-full opacity-25 ${styles['animate-random-move-2']} w-60 h-60 blur-xl`}
          style={{ top: '20%', left: '60%' }}
        ></div>

        <div className="relative flex flex-col w-full max-w-6xl gap-4 p-8 border border-b md:gap-12 bg-white/10 backdrop-blur-3xl rounded-3xl md:p-12 md:flex-row backdrop-saturate-300 border-white/20">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col justify-between h-full px-4 py-6 md:px-6 md:py-8 bg-white/10 border-white/10 rounded-4xl">
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-white">Contact Information</h2>
                <p className="mb-6 text-white/80">
                  We&apos;d love to hear from you! Please fill out the form or reach us via:
                </p>
                <ul className="space-y-2 text-white/90">
                  <li>
                    Email:{' '}
                    <a href="mailto:support@proptrack.com" className="text-blue-400">
                      support@proptrack.com
                    </a>
                  </li>
                  <li>
                    Phone:{' '}
                    <a href="tel:+1234567890" className="text-blue-400">
                      +1 234 567 890
                    </a>
                  </li>
                  <li>Address: 123 PropTrack St, Suite 100, City, State</li>
                </ul>
                <div className="flex justify-center mt-8 space-x-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="text-2xl fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="text-2xl fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="text-2xl fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="text-2xl fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              <div className="mt-8 text-xs text-center text-white/60">
                <img
                  src="https://www.apple.com/legal/images/icon_dataprivacy_2x.png"
                  alt="Privacy Icon"
                  className="w-8 h-8 mx-auto mb-4"
                />
                <p>
                  Your PropTrack Account information is used to allow you to sign in securely and
                  access your data. PropTrack records certain data for security, support, and
                  reporting purposes. If you agree, PropTrack may also use your account information
                  to send you marketing emails and communications, including those based on your use
                  of PropTrack services.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-2xl font-semibold text-center text-white">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled hidden>
                  Subject Options
                </option>
                <option value="general-inquiry">General Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="technical-support">Technical Support</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#252527] border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <div className="w-full text-right">
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-full h-10 mt-4 rounded-lg"
                >
                  Deliver
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  );
};

export default ContactPage;