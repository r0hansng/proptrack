import React from "react";
import Accordion from "../components/UI/Accordion/Accordion";

const faqItems = [
    {
        question: "Is this platform free to use?",
        answer: "Yes, the platform is free to use with core features available at no cost.",
    },
    {
        question: "Can I add multiple properties?",
        answer: "Absolutely! You can manage and track multiple properties simultaneously.",
    },
    {
        question: "How do I calculate ROI for my properties?",
        answer: "The app provides built-in ROI calculators tailored for real estate metrics.",
    },
    {
        question: "What data sources are used for property values?",
        answer: "We pull data from verified real estate databases and market APIs.",
    },
];

export default function FAQ() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 text-white max-w-3xl mx-auto rounded-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-2">Frequently Asked Questions</h2>
                <p className="text-sm text-white/50 max-w-2xl mx-auto">
                    Answers to common questions about the platform.
                </p>
            </div>
            <Accordion items={faqItems} />
        </section>
    );
}
