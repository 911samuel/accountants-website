import { Testimonials } from "@/interface";
import Image from "next/image";

const TestimonialCard = ({ content, author, role, imageUrl }: Testimonials) => (
  <div className="rounded-3xl p-6 bg-white shadow-lg">
    <div className="w-full">
      <h3 className="text-primary text-4xl">❝</h3>
      <p className="mt-4 text-gray-700">{content}</p>
    </div>

    <div className="mt-6 flex flex-row items-center space-x-4">
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={author}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
        />
      </div>

      <div>
        <h4>{author}</h4>
        <p>{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
