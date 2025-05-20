import React from "react";
import FaqItem from "./FaqItem";
import Image from "next/image";
import assets from "@/public";

interface FaqSectionProps {
  faqs: { question: string; answer: string }[];
}

const FaqSection = ({ faqs }: FaqSectionProps) => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <Image
              src={assets.Fqa}
              alt="FAQ image"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-4 lg:mb-8">
                <h5 className="text-center text-primary mb-2 lg:text-left">FAQs</h5>
                <h2 className="text-center mb-5 lg:text-left">
                  Looking for answers?
                </h2>
              </div>
              <div className="accordion-group" data-accordion="default-accordion">
                {faqs.map((faq, index) => (
                  <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FaqSection;