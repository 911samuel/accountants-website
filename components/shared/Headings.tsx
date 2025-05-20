import { HeadingProps } from "@/interface";
import React from "react";

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`md:mx-72 text-center ${className}`}>
      <h2 className="mb-4">{title}</h2>
      <p className="mb-8">{subtitle}</p>
    </div>
  );
};

export default Heading;
