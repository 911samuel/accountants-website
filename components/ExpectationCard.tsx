"use client";
import { ExpectationCardProps } from "@/interface";
import Image from "next/image";
import { useState } from "react";

const ExpectationCard: React.FC<ExpectationCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg p-6 transition-all duration-500 ease-in-out transform ${
        isHovered ? "bg-white shadow-2xl scale-105" : "bg-gray-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={`flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 ${
            isHovered ? "bg-primary/20 scale-110" : "bg-gray-200"
          }`}
        >
          <Image
            src={icon}
            alt={title}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        <h3
          className={`mt-4 text-xl font-bold transition-all duration-300 ${
            isHovered ? "text-primary" : "text-gray-800"
          }`}
        >
          {title}
        </h3>

        {Array.isArray(description) ? (
          <ul
            className={`mt-2 text-left text-gray-600 text-sm space-y-1 transition-all duration-300 ${
              isHovered ? "text-gray-700" : "text-gray-500"
            }`}
          >
            {description.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p
            className={`my-4 text-gray-600 text-sm transition-all duration-300 ${
              isHovered ? "text-gray-700" : "text-gray-500"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpectationCard;