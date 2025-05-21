import React from 'react';

const HowItWorks = () => {
  return (
    <section className="px-4 py-16 mx-auto mt-16 text-white sm:px-6 lg:px-8 bg-white/5">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">How It Works</h2>
        <p className="max-w-2xl mx-auto text-lg text-white/50">
          Follow these simple steps to get started with the platform and make the most of its
          features.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative p-6 text-left transition-all duration-500 cursor-pointer hover:scale-102 bg-white/5 rounded-2xl">
          <div className="absolute mb-4 text-4xl font-light text-white top-6 left-6">􀎞</div>
          <div className="mt-16">
            <h3 className="mb-2 text-2xl font-semibold">Add Your Properties</h3>
            <p className="text-lg text-white/70">
              Easily add your properties and start tracking them from day one.
            </p>
          </div>
        </div>

        <div className="relative p-6 text-left transition-all duration-500 cursor-pointer hover:scale-102 bg-white/5 rounded-2xl">
          <div className="absolute mb-4 text-4xl font-light text-white top-6 left-6">􀖗</div>
          <div className="mt-16">
            <h3 className="mb-2 text-2xl font-semibold">Track Rental Income and Expenses</h3>
            <p className="text-lg text-white/70">
              Keep track of all your rental income and expenses in one place.
            </p>
          </div>
        </div>

        <div className="relative p-6 text-left transition-all duration-500 cursor-pointer hover:scale-102 bg-white/5 rounded-2xl">
          <div className="absolute mb-4 text-4xl font-light text-white top-6 left-6">􀑁</div>
          <div className="mt-16">
            <h3 className="mb-2 text-2xl font-semibold">Monitor ROI and Portfolio Performance</h3>
            <p className="text-lg text-white/70">
              Track the performance of your properties and monitor ROI.
            </p>
          </div>
        </div>

        <div className="relative p-6 text-left transition-all duration-500 cursor-pointer hover:scale-102 bg-white/5 rounded-2xl">
          <div className="absolute mb-4 text-4xl font-light text-white top-6 left-6">􀐾</div>
          <div className="mt-16">
            <h3 className="mb-2 text-2xl font-semibold">Make Data-Driven Decisions</h3>
            <p className="text-lg text-white/70">
              Use the insights to make informed decisions and grow your real estate portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
