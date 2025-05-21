import React from 'react';
import Accordion from '../components/UI/Accordion/Accordion';
import { FiChevronDown } from 'react-icons/fi';
const faqItems = [
  {
    question: 'Is this platform free to use?',
    answer: 'Yes, the platform is free to use with core features available at no cost.',
  },
  {
    question: 'Can I add multiple properties?',
    answer: 'Absolutely! You can manage and track multiple properties simultaneously.',
  },
  {
    question: 'How do I calculate ROI for my properties?',
    answer: 'The app provides built-in ROI calculators tailored for real estate metrics.',
  },
  {
    question: 'What data sources are used for property values?',
    answer: 'We pull data from verified real estate databases and market APIs.',
  },
];

const FAQ = () => {
  return (
    <section className="max-w-3xl px-4 py-16 mx-auto text-white sm:px-6 lg:px-8 bg-white/5 rounded-4xl">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-semibold">Frequently Asked Questions</h2>
        <p className="max-w-2xl mx-auto text-sm text-white/50">
          Answers to common questions about the platform.
        </p>
      </div>
      <Accordion items={faqItems} />
    </section>
  );
};

export default FAQ;
