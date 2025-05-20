import { OffersCardProps } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const OffersCard: React.FC<OffersCardProps> = ({ offers }) => {
  return (
    <div className="grid md:grid-cols-2 md:gap-10 grid-cols-1 md:mb-0 gap-y-20 mb-16">
      {offers.map((offer, idx) => (
        <div
          key={idx}
          className={`${
            idx + 1 !== offers.length ? "mb-14" : ""
          } relative h-[300px] rounded-sm shadow-md`}
        >
          <div className="h-full w-full">
            <Image
              src={offer.imageUrl}
              alt={offer.name}
              className="h-full w-full object-cover"
              width={500}
              height={300}
            />
          </div>
          <div className="bg-slate-100 w-5/6 text-center p-5 rounded-md shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2">
            <h2 className="mb-4">{offer.name}</h2>
            <p className="text-slate-500">{offer.description}</p>
            <Link
              href={offer.link}
              title={offer.name}
              className="flex items-center justify-center font-bold text-primary mt-2 cursor-pointer hover:opacity-60"
            >
              Read more <FaLongArrowAltRight className="ml-2" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OffersCard;