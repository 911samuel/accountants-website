"use client";
import { pricingPlans } from "@/data";
import { useState } from "react";
import PackageCard from "./PackageCard";
import Heading from "./shared/Headings";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );
  const plans = pricingPlans[billingCycle];

  return (
    <section>
      <Heading
        title="Choose Your Plan"
        subtitle="Choose from our range of service packages designed to meet your business needs and budget."
      />

      <div className=" flex justify-center  mb-8">
        <div className="flex md:gap-10 gap-4 bg-white">
          <button
            className={`md:px-20 px-10 py-4 rounded-lg ${
              billingCycle === "monthly"
                ? " bg-gray-800 text-white"
                : "bg-primary"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`md:px-20 px-10 py-4 rounded-lg ${
              billingCycle === "annual"
                ? "bg-gray-800 text-white"
                : "bg-primary"
            }`}
            onClick={() => setBillingCycle("annual")}
          >
            Annual
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((packageItem, index) => (
          <PackageCard
            key={index}
            title={packageItem.title}
            services={packageItem.services}
            highlighted={packageItem.highlighted}
            price={packageItem.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
