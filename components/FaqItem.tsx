"use client";
import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion py-8 border-b border-solid border-gray-300">
      <button
        className="inline-flex items-center justify-between w-full transition duration-500 text-white"
        onClick={toggleAccordion}
      >
        <h5>{question}</h5>
        <svg
          className={`text-white transition duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="accordion-content w-full px-2 overflow-hidden mt-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;