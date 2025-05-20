"use client";
import components from "@/components";
import Heading from "@/components/shared/Headings";
import ExpectationCard from "@/components/ExpectationCard";
import PackageCard from "@/components/PackageCard";
import { ServicePageProps } from "@/interface";
import OffersCard from "./OffersCard";
import { usePathname } from "next/navigation";
import OptionCard from "./OptionCard";
import { outsourcingAccountingData } from "@/data";

const ServicePage: React.FC<ServicePageProps> = ({
  heroSlides,
  expectationData,
  servicePackages,
  title,
  subtitle,
  solutionsData,
  solutionsTitle,
  solutionsSubtitle,
}) => {
  const pathname = usePathname();
  return (
    <div>
      <components.Hero slides={heroSlides} />

      <section className="bg-white">
        <Heading title="What to Expect" subtitle={subtitle} />
        <div
          className={`grid grid-cols-1 ${
            expectationData.length === 4
              ? "md:grid-cols-2 md:gap-20 md:mx-10"
              : "md:grid-cols-3"
          } gap-8`}
        >
          {expectationData.map((item) => (
            <ExpectationCard
              id={item.id}
              key={item.id}
              icon={item.icon}
              description={item.description}
              title={item.title}
            />
          ))}
        </div>
      </section>

      {pathname === "/services/outsourcing-accounting" && (
        <section>
          <Heading
            title="Your Options"
            subtitle="Choose the right payroll option that fits your business needs, ensuring compliance and efficiency for both casual and full-time employees."
          />
          <OptionCard options={outsourcingAccountingData.Options} />
        </section>
      )}

      <section className="mb-20">
        <Heading title={solutionsTitle} subtitle={solutionsSubtitle} />
        <OffersCard offers={solutionsData} />
      </section>

      <section className="bg-white">
        <Heading
          title={title}
          subtitle="Choose from our range of service packages designed to meet your business needs and budget."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePackages.map((packageItem, index) => (
            <PackageCard
              key={index}
              title={packageItem.title}
              price={packageItem.price}
              services={packageItem.services}
              highlighted={packageItem.highlighted}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
