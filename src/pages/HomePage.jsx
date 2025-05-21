import React, { useState } from 'react';
import Button from '../components/UI/Button/Button';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero_image.jpg';
import FAQ from '../features/FAQ';
import HowItWorks from '../features/HowItWorks';
import Testimonials from '../features/Testimonials';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/UI/Toast/Toast';
import { FiChevronRight } from 'react-icons/fi';

const HomePage = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleUseClick = () => {
    const user =
      JSON.parse(localStorage.getItem('proptrack_user')) ||
      JSON.parse(sessionStorage.getItem('proptrack_user'));

    if (user?.isLoggedIn) {
      navigate('/properties');
    } else {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/login');
      }, 3500);
    }
  };
  return (
    <>
      {showToast && (
        <Toast
          title="Login Required"
          description="Please log in to use the application."
          show={showToast}
        />
      )}
      <Toast
        title="Login Required"
        description="Please log in to use the application."
        show={showToast}
      />
      <style>
        {`
        .gradient-text {
            color: #ffffff;
            font-weight: 700;
            text-shadow:
                0 -4px 8px #CE7E4F,     /* warm top glow */
                0 4px 8px #1B66FA,      /* cool bottom glow */
                0 0 5px #ffffff,        /* strong white center glow */
                0 0 30px rgba(255,255,255,0.1),  /* ambient aura with a darker edge */
                0 0px 30px rgba(255,140,0,1); 
        }
    `}
      </style>

      <div className="relative overflow-hidden text-white bg-black">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute top-0 left-0 z-0 w-full h-full bg-black opacity-80"></div>
          <div className="relative z-10 px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-5xl">
              Transforming the way you invest in property <br />
              <span className="gradient-text">Simple. Elegant. Powerful.</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-6 text-lg sm:text-xl text-white/80">
              Invest with ease. Experience a new era of property management, where simplicity meets
              sophistication.
            </p>
            {/* <Link to="/properties">
                            <Button variant="primary" size="default" className="h-10 mt-10 text-lg rounded-3xl">
                                Use
                            </Button>
                        </Link> */}
            <Button
              variant="primary"
              size="default"
              className="h-10 mt-10 text-lg rounded-3xl"
              onClick={handleUseClick}
            >
              Use
            </Button>
            <p className="mt-6 font-semibold text-white">Try it now for $0.00/mo.</p>
          </div>
        </section>

        {/* Section Below Hero */}
        <div className="relative py-20">
          <div className="relative z-10">
            <HowItWorks />

            <section className="py-16 px-4 sm:px-6 lg:px-8 text-white my-[10vw]">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-semibold">Why Choose Our App?</h2>
                <p className="max-w-xl mx-auto text-md text-white/80">
                  Effortless to use. PropTrack simplifies property investment, offering both control
                  and clarity.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  [
                    'Easy to Use',
                    'Our user-friendly interface makes managing your properties easier than ever.',
                  ],
                  [
                    'Fast Transactions',
                    'Experience seamless property transactions with minimal delays.',
                  ],
                  [
                    'Secure Platform',
                    'Your data and investments are protected with state-of-the-art security features.',
                  ],
                ].map(([title, desc], i) => (
                  <div key={i} className="p-6 text-center shadow-lg bg-white/5 rounded-xl">
                    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                    <p className="text-white/80">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
            <Testimonials />
            <FAQ />
          </div>
        </div>

        {/* CTA */}
        <section className="relative z-10 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-semibold">Ready to Start Investing?</h2>
            <p className="max-w-2xl mx-auto mb-6 text-lg text-white/80">
              Take the first step towards transforming your investment strategy. Register today and
              explore new opportunities.
            </p>
            <Button
              variant="link"
              size="lg"
              className="mb-4 text-blue-500 hover:text-blue-500 hover:underline"
            >
              <Link 
              to="/register"
              className='flex items-center justify-center gap-1'
              >
                Register Now <FiChevronRight size={14} className='mt-0.5'/>
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
