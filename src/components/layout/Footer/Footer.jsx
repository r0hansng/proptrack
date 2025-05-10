import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1d1d1f] border-t border-white/10 text-xs h-full">
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex-row">
        <p className="text-center md:text-left text-white/35">
          © {new Date().getFullYear()}{' '}
          <Link
            to="/"
            className="pl-1 cursor-pointer text-white/95 hover:text-white/95 hover:underline"
          >
            PropTrack
          </Link>
          . All rights reserved.
        </p>
        <div className="flex gap-4 text-white/80">
          <a
            href="/privacy"
            className="pr-4 border-r hover:text-white hover:underline border-white/20"
          >
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;