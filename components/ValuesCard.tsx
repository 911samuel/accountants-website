import { AboutIntroItem } from "@/interface";
import Image from "next/image";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

const ValueCard = ({ icon, title, description }: AboutIntroItem) => {
  return (
    <Fade cascade damping={0.1}>
      <div className="bg-white rounded-xl border border-primary p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:border-s-8">
        {/* Icon */}
        <Zoom duration={1000} delay={500}>
          <div className="flex justify-center">
            <Image
              src={icon}
              alt={title}
              width={64}
              height={64}
              className="w-16 h-16 mb-6 object-contain"
            />
          </div>
        </Zoom>

        {/* Title */}
        <Slide direction="down" duration={1000}>
          <h3 className="mb-3">{title}</h3>
        </Slide>

        {/* Description Handling Multiple Contents */}
        <Slide direction="up" duration={1000}>
          <div className="text-gray-700 text-left space-y-2">
            {Array.isArray(description) ? (
              description.every((item) => typeof item === "string") ? (
                // Handle the case where description is an array of strings
                <ul className="list-disc list-inside text-sm">
                  {description.map((item, index) => (
                    <li key={index} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                // Handle the case where description is an array of objects
                description.map((section, index) => (
                  <div key={index} className="mb-3">
                    {typeof section === "object" && section !== null && (
                      <>
                        <h4 className="font-medium text-primary">
                          {section.title}
                        </h4>
                        <ul className="list-disc list-inside text-sm">
                          {section.contents.map((content, index) => (
                            <li key={index} className="text-gray-600">
                              {content}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))
              )
            ) : (
              <p className="small-text leading-relaxed">{description}</p>
            )}
          </div>
        </Slide>

        {/* Underline Effect */}
        <div className="mt-4 w-12 h-1 bg-primary mx-auto rounded-full transition-all duration-300 ease-in-out group-hover:w-24" />
      </div>
    </Fade>
  );
};

export default ValueCard;