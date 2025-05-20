import React from "react";
import Heading from "./shared/Headings";
import { ExpectationData } from "@/data";
import ExpectationCard from "./ExpectationCard";

const Expectation = () => {
  return (
    <section>
      <Heading
        title="What to Expect"
        subtitle="Reliable, professional, and tailored accounting services designed to help your business stay compliant, efficient, and financially healthy."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ExpectationData.map((item) => (
          <ExpectationCard
            key={item.id}
            icon={item.icon}
            description={item.description}
            title={item.title} id={0}          />
        ))}
      </div>
    </section>
  );
};

export default Expectation;
