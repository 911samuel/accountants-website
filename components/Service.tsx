import React from "react";
import Heading from "./shared/Headings";
import { servicesData } from "@/data";
import MaterialCard from "./MaterialCard";

const Service = () => {
  return (
    <section className="bg-white">
      <Heading
        title="Our Services"
        subtitle="We handle bookkeeping, tax compliance, payroll, and financial reporting, ensuring accuracy and efficiency while you focus on growing your business."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service.id}>
            <MaterialCard
              id={service.id}
              IconUrl={service.iconUrl}
              product={service.title}
              description={service.description}
              buttonText="Readmore"
              href={service.link}
            />
            </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
