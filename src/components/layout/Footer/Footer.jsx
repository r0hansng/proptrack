import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#1d1d1f] border-t border-white/10 text-xs h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-center md:text-left text-white/35">
                    © {new Date().getFullYear()} <Link to="/" className="text-white/95 pl-1 hover:text-white/95 hover:underline cursor-pointer">PropTrack</Link>. All rights reserved.
                </p>
                <div className="flex gap-4 text-white/80">
                    <a href="/privacy" className="hover:text-white hover:underline border-r pr-4 border-white/20">Privacy Policy</a>
                    <a href="/terms" className="hover:text-white hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}