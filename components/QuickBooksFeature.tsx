import { quickBooksFeatures } from "@/data";
import assets from "@/public";
import Image from "next/image";
import Heading from "./shared/Headings";

const QuickBooksFeature = () => {
  return (
    <section>
      <Heading
        title="How We Help You"
        subtitle="Our services are designed to provide seamless and efficient solutions tailored to your business needs."
      />
      <div className="layout-standard md:gap-x-20">
        <div>
          <Image src={assets.Features} alt="Feature's Image" />
        </div>
        <div className="space-y-10 md:w-1/2">
          {quickBooksFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-10">
              <div className="p-3 bg-white border-2 border-green-500 rounded-full hover:bg-primary">
                <feature.icon className="text-primary text-6xl hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickBooksFeature;
