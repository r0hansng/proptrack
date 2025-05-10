// src/components/Chip/Chip.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';

const chipVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-gray-300 text-gray-800',
        secondary: 'bg-gray-600 text-white',
        tertiary: 'bg-gray-900 text-white', // Green
      },
      size: {
        default: 'text-sm px-3 py-1.5',
        sm: 'text-xs px-2 py-1',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-2.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

function Chip({ label, variant, size, icon: Icon, className }) {
  return (
    <span className={cn(chipVariants({ variant, size, className }))}>
      {Icon && <Icon className="mr-1" />}
      {label}
    </span>
  );
}

export default Chip;

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['default', 'sm', 'md', 'lg']),
  icon: PropTypes.elementType,
  className: PropTypes.string,
};
