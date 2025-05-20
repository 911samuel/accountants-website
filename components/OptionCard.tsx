import { OffersCard } from "@/interface";
import React from "react";

const OptionCard: React.FC<OffersCard> = ({ options }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-16">
      {options.map((option, idx) => (
        <div
          key={idx}
          className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 rounded-3xl shadow-xl ring-1 transition-all duration-300 hover:-translate-y-1"
        >
          <span
            className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[20]`}
          ></span>
          <div className="relative z-10">
            <span
              className={`grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:opacity-90`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10 text-white transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <button
                  className="group-hover:bg-gray-800">
                  {option.buttonText}
                </button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OptionCard;