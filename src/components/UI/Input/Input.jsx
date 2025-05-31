import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import PropTypes from 'prop-types';

const inputVariants = cva(
    'w-full appearance-none px-4 py-3 rounded-xl focus:outline-none focus:ring-2 placeholder:text-white/40 focus:placeholder-transparent',
    {
        variants: {
            variant: {
                default: 'bg-[#252527] border border-white/20 text-white focus:ring-blue-500',
                primary: 'bg-blue-100 border border-blue-400 text-blue-900 focus:ring-blue-500',
                danger: 'bg-red-100 border border-red-400 text-red-900 focus:ring-red-500',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export function Input({ variant, className, required = true, ...props }) {
    return (
        <input
            {...props}
            required={required}
            className={cn(inputVariants({ variant }), className)}
        />
    );
}

Input.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'primary', 'danger']),
    required: PropTypes.bool
};

export default Input;