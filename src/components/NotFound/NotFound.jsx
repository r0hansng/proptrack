import React from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xl p-6 text-center rounded-lg">
        <p className="mb-6 text-5xl font-semibold text-white">
          The page you&apos;re looking for can&apos;t be found.
        </p>
        <Button
          variant="link"
          className="text-lg text-[#0070c9] hover:text-none font-normal hover:underline"
        >
          <Link to="/">
            Go back to homepage <span className="text-xs">􀆊</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
