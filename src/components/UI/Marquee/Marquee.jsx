import React from "react";

export default function Marquee({ children, speed = 30 }) {
    return (
        <div className="overflow-hidden whitespace-nowrap relative w-full py-4">
            <div
                className="animate-marquee flex gap-8"
                style={{
                    animation: `scroll ${speed}s linear infinite`
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
