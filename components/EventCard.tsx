import { EventCardProps } from "@/interface";
import Image from "next/image";

const EventCard = ({
  title,
  organizer,
  time,
  date,
  cost,
  image,
  location = "Online Event",
  category = "Event",
  gradientClass,
}: EventCardProps) => {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className={`h-32 ${gradientClass} relative`}>
        <div className="absolute top-4 left-4 bg-black bg-opacity-30 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
          {category}
        </div>

        <div className="absolute -bottom-10 left-6">
          <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
            <Image
              src={image}
              alt={organizer}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pt-12 px-6 pb-6 bg-white">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium text-gray-600">{organizer}</p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm">
            <svg
              className="w-4 h-4 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-600">{date}</span>
          </div>

          <div className="flex items-center text-sm">
            <svg
              className="w-4 h-4 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-600">{time}</span>
          </div>

          <div className="flex items-center text-sm">
            <svg
              className="w-4 h-4 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-gray-600">{location}</span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
        <div className="font-bold">
          {cost === 0 ? (
            <span className="text-green-600">Free Entry</span>
          ) : (
            <span className="text-gray-800">${cost}</span>
          )}
        </div>

        <button
          className={`px-4 py-2 rounded-lg text-white font-medium text-sm ${gradientClass} hover:opacity-90 transition-opacity`}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
