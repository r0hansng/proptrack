import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import { PropTypes } from 'prop-types';

const ButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-normal transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-600 hover:bg-gray-300',
        outline: 'border border-gray-500 text-gray-800 hover:bg-gray-100',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        link: 'text-blue-500 hover:text-blue-600 focus-ring-0 focus:ring-0 focus:ring-offset-0',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

const Button = ({ className, variant, size, ...props }) => {
  return <button className={cn(ButtonVariants({ variant, size, className }))} {...props} />;
}

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger', 'link']),
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'icon']),
};

export default Button;
