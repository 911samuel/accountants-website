import { TextInputFieldProps } from "@/interface";

const InputField: React.FC<TextInputFieldProps> = ({
  type = "text",
  placeholder,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-12 text-textLight placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
    />
  );
};

export default InputField;
