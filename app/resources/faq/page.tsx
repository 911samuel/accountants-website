import components from "@/components";
import { faqs } from "@/data";
import React from "react";

const page = () => {
  return (
    <div>
      <components.FaqSection faqs={faqs} />
    </div>
  );
};

export default page;
