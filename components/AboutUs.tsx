import { HeroSectionProps } from "@/interface";
import Image from "next/image";
import React from "react";

const AboutUs = ({ slides }: HeroSectionProps) => {
    return (
      <section>
        {slides.map((slide, index) => (
          <div className="layout-standard md:pt-28 pt-24" key={index}>
            {/* Text Content */}
            <div className="text-center md:text-left space-y-2 md:space-y-6">
              {Array.isArray(slide.title) ? (
                <h1>
                  {slide.title.map((line, i) => (
                    <span key={i} className={i === 1 ? "text-primary" : ""}>
                      {line}
                      {i < slide.title.length - 1 && <br />}
                    </span>
                  ))}
                </h1>
              ) : (
                <h1>{slide.title}</h1>
              )}
              <p>{slide.subtitle}</p>
              <button>Get in touch</button>
            </div>

            {/* Image / Illustration */}
            <div>
              <Image
                src={slide.image}
                alt={`about Image ${index + 1}`}
                width={400}
                height={407}
              />
            </div>
          </div>
        ))}
      </section>
    );
};

export default AboutUs;