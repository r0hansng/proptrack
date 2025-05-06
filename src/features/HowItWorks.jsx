import React from "react";

export default function HowItWorks() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 text-white mx-auto mt-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
                <p className="text-lg text-white/50 max-w-2xl mx-auto">
                    Follow these simple steps to get started with the platform and make the most of its features.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="relative text-left p-6 hover:scale-102 cursor-pointer transition-all duration-500 bg-white/5 rounded-2xl">
                    <div className="absolute top-6 left-6 text-4xl text-white mb-4 font-light">􀎞</div>
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold mb-2">Add Your Properties</h3>
                        <p className="text-lg text-white/70">
                            Easily add your properties and start tracking them from day one.
                        </p>
                    </div>
                </div>

                <div className="relative text-left p-6 hover:scale-102 cursor-pointer transition-all duration-500 bg-white/5 rounded-2xl">
                    <div className="absolute top-6 left-6 text-4xl text-white mb-4 font-light">􀖗</div>
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold mb-2">Track Rental Income and Expenses</h3>
                        <p className="text-lg text-white/70">
                            Keep track of all your rental income and expenses in one place.
                        </p>
                    </div>
                </div>

                <div className="relative text-left p-6 hover:scale-102 cursor-pointer transition-all duration-500 bg-white/5 rounded-2xl">
                    <div className="absolute top-6 left-6 text-4xl text-white mb-4 font-light">􀑁</div>
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold mb-2">Monitor ROI and Portfolio Performance</h3>
                        <p className="text-lg text-white/70">
                            Track the performance of your properties and monitor ROI.
                        </p>
                    </div>
                </div>

                <div className="relative text-left p-6 hover:scale-102 cursor-pointer transition-all duration-500 bg-white/5 rounded-2xl">
                    <div className="absolute top-6 left-6 text-4xl text-white mb-4 font-light">􀐾</div>
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold mb-2">Make Data-Driven Decisions</h3>
                        <p className="text-lg text-white/70">
                            Use the insights to make informed decisions and grow your real estate portfolio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
