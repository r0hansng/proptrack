import React from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center p-6 rounded-lg max-w-xl w-full">
        <p className="text-5xl text-white mb-6 font-semibold">
          The page you're looking for can't be found.
        </p>
        <Button variant="link" className="text-lg text-[#0070c9] hover:text-none font-normal hover:underline">
          <Link to="/">Go back to homepage <span className="text-xs">􀆊</span></Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;