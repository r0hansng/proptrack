import React from 'react';
import PropTypes from 'prop-types';

export default function Marquee({ children, speed = 30 }) {
  return (
    <div className="relative w-full py-4 overflow-hidden whitespace-nowrap">
      <div
        className="flex gap-8 animate-marquee"
        style={{
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>

      <style>
        {`
                @keyframes scroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                `}
      </style>
    </div>
  );
}

Marquee.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
};
