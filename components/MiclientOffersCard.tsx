import { miclientOffers } from '@/interface';
import Image from 'next/image';
import React from 'react'

const MiclientOffersCard = ({ image, title, description}: miclientOffers) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Image
        className="rounded-t-lg h-56 md:h-72 md:w-52 md:rounded-none md:rounded-s-lg"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {Array.isArray(description) ? (
            <ul className="list-disc pl-5">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiclientOffersCard
