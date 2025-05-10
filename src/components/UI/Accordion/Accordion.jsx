import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          isOpen={index === openIndex}
          question={item.question}
          answer={item.answer}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

const AccordionItem = ({ index, isOpen, question, answer, onToggle }) => {
  return (
    <div className="py-4 transition-all duration-700 ease-in-out border-b border-white/10">
      <button
        className="flex items-center justify-between w-full text-lg font-medium text-left text-white cursor-pointer focus:outline-none"
        onClick={() => onToggle(index)}
      >
        <span>{question}</span>
        <span className="text-sm transition-transform duration-700 ease-in-out text-white/50">
          {isOpen ? '􀆇' : '􀆈'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ transition: 'max-height 0.3s ease-in-out', maxHeight: isOpen ? '400px' : '0' }}
      >
        <div className="mt-2 text-base text-white/70">{answer}</div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Accordion;