import { ContactInfoProps } from "@/interface";

const ContactInfo = ({ iconPath, text }: ContactInfoProps) => {
  return (
    <a href="/king" className="flex items-center mb-6">
      <svg className="w-7 h-7 text-primary" viewBox="0 0 30 30" fill="none">
        <path
          d={iconPath}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className=" text-sm font-normal leading-6 ml-5 text-textLight md:text-base">
        {text}
      </span>
    </a>
  );
};

export default ContactInfo;
