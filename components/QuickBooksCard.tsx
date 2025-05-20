import { QuickBooksCardProps } from "@/interface";
import React from "react";
import { FaCalculator } from "react-icons/fa";

const QuickBooksCard = ({ quickBooks }: QuickBooksCardProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {quickBooks.map((quickBook, idx) => (
        <div
          key={idx}
          className="relative p-8 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center text-white gap-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-indigo-500 to-purple-700 opacity-95"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-10 rounded-full -ml-40 -mb-40"></div>
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <FaCalculator className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-white">
                {quickBook.title}
              </h3>
            </div>
            {quickBook.location && (
              <h4 className="text-white">
                {quickBook.location}
              </h4>
            )}
            {quickBook.isAvailable && (
              <div className="mt-4 flex items-center justify-center bg-white bg-opacity-10 px-4 py-2 rounded-full">
                <div className="h-3 w-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-white font-medium">
                  Support Available 24/7
                </span>
              </div>
            )}
            <p className="text-lg text-white mt-4 max-w-lg mx-auto leading-relaxed">
              {quickBook.description}
            </p>
            <button className="mt-6 bg-gray-800 text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 transform hover:scale-105 shadow-lg">
              Request
            </button>
            <p className="mt-4 text-blue-100 text-sm">
              Certified QuickBooks ProAdvisors
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickBooksCard;
