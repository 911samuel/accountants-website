"use client";
import { PackageCardProps } from "@/interface";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  services,
  price,
  ctaText = "Select Package",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative border rounded-xl p-6 shadow-md transition-all duration-300 ${
        isHovered
          ? "bg-gradient-to-br from-primary to-white text-white"
          : "bg-white text-black"
      } hover:shadow-xl transform transition-transform duration-300 hover:scale-105`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="mb-2">{title}</h3>
      <div className={`mb-6 ${isHovered ? "text-gray-800" : "text-primary"}`}>
        <span className="text-3xl font-extrabold">{price}</span>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>
      <ul className="space-y-3 mb-6">
        {services.map((service, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle
              className={`text-lg ${
                isHovered ? "text-green-400" : "text-blue-500"
              } mr-3 mt-1 flex-shrink-0`}
            />
            <span>{service}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-4 ${
          isHovered
            ? "bg-gray-700 hover:bg-gray-800 text-white"
            : "bg-primary text-gray-800 hover:bg-white text-white"
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
};

export default PackageCard;
