"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { HeroSectionProps } from "@/interface";

const Hero: React.FC<HeroSectionProps> = ({ slides }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section>
              <div className="layout-standard md:pt-28 pt-24">
                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-2 md:space-y-6">
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
                  <button>{slide.buttonText || "Get Started"}</button>
                </div>

                {/* Image / Illustration */}
                <div>
                  <Image
                    src={slide.image}
                    alt={`Hero Image ${index + 1}`}
                    width={391}
                    height={407}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
