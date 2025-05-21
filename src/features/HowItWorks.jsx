import React from 'react';
import { MdAddBox, MdAttachMoney, MdTrendingUp, MdBarChart } from 'react-icons/md';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MdAddBox className="absolute w-10 h-10 text-white top-6 left-6" />,
      title: 'Add Your Properties',
      description: 'Easily add your properties and start tracking them from day one.',
    },
    {
      icon: <MdAttachMoney className="absolute w-10 h-10 text-white top-6 left-6" />,
      title: 'Track Rental Income and Expenses',
      description: 'Keep track of all your rental income and expenses in one place.',
    },
    {
      icon: <MdTrendingUp className="absolute w-10 h-10 text-white top-6 left-6" />,
      title: 'Monitor ROI and Portfolio Performance',
      description: 'Track the performance of your properties and monitor ROI.',
    },
    {
      icon: <MdBarChart className="absolute w-10 h-10 text-white top-6 left-6" />,
      title: 'Make Data-Driven Decisions',
      description: 'Use the insights to make informed decisions and grow your real estate portfolio.',
    },
  ];

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
        {steps.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="relative p-6 text-left transition-all duration-500 cursor-pointer hover:scale-[1.02] bg-white/5 rounded-2xl"
          >
            {icon}
            <div className="mt-16">
              <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
              <p className="text-lg text-white/70">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;