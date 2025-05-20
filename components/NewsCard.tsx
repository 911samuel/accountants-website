"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { NewsCard } from "@/interface";

const NewsCard: React.FC<NewsCard> = ({
  id,
  imageUrl,
  title,
  description,
}) => {
   const router = useRouter();

   const handleReadMore = () => {
     router.push(`/resources/news/${id}`);
   };
  return (
    <div className="relative mb-36 md:mb-52 flex flex-col">
      <Image src={imageUrl} alt="Image placeholder" className="w-full" />
      <div className="bg-slate-100 w-4/5 text-center p-5 rounded-md shadow-lg absolute left-1/2 bottom-[-40%]  md:bottom-[-25%] -translate-x-1/2">
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <p className="text-slate-500">{description}</p>
        <div
          onClick={handleReadMore}
          className="flex items-center justify-center font-bold text-primary mt-2 cursor-pointer hover:opacity-60"
        >
          Read more{" "}
          <span>
            <FaLongArrowAltRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;