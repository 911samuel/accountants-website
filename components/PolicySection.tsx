import React from "react";
import type { PolicySection } from "@/interface"

interface PolicySectionProps {
  section: PolicySection;
}

const PolicySection: React.FC<PolicySectionProps> = ({ section }) => {
  return (
    <div id={section.id} className="mb-8 scroll-mt-24">
      <h2 className="text-xl font-bold mb-4">{section.title}</h2>
      {Array.isArray(section.content) ? (
        section.content.map((paragraph, index) => (
          <p key={index} className="mb-3">
            {paragraph}
          </p>
        ))
      ) : (
        <p className="mb-3">{section.content}</p>
      )}
    </div>
  );
};

export default PolicySection;