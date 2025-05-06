import React, { useState } from "react";

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null); 

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); 
    };

    return (
        <div className="space-y-4 max-w-xl mx-auto">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    index={index}
                    isOpen={index === openIndex}
                    question={item.question}
                    answer={item.answer}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    );
}

function AccordionItem({ index, isOpen, question, answer, onToggle }) {
    return (
        <div className="border-b border-white/10 py-4 transition-all duration-700 ease-in-out">
            <button
                className="flex justify-between items-center w-full text-left text-white font-medium text-lg focus:outline-none cursor-pointer"
                onClick={() => onToggle(index)}
            >
                <span>{question}</span>
                <span className="text-white/50 text-sm transition-transform duration-700 ease-in-out">
                    {isOpen ? "􀆇" : "􀆈"}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                style={{ transition: "max-height 0.3s ease-in-out", maxHeight: isOpen ? "400px" : "0" }} 
            >
                <div className="text-white/70 mt-2 text-base">
                    {answer}
                </div>
            </div>
        </div>
    );
}
