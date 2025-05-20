import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/data";
import Link from "next/link";

const Testimonials = () => {
  return (
    <section>
      <div className="layout-standard">
        <div className="w-full md:w-1/2 flex flex-col md:text-left space-y-6">
          <span className="text-primary">Testimonial</span>
          <h2>What Our Clients Say about Us!</h2>
          <p className="mt-4">
            Hear from our satisfied clients about how ACR Online Accounting
            Services Ltd
            <br />
            has helped their businesses thrive with expert accounting and tax
            solutions.
          </p>
          <Link href={"/contact"} className="flex mt-4">
            <button>View all testimonials</button>
          </Link>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-1 gap-8">
          {testimonialsData.slice(0, 2).map((item, index) => (
            <div key={index}>
              <TestimonialCard
                content={item.content}
                author={item.author}
                imageUrl={item.imageUrl}
                role={item.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
