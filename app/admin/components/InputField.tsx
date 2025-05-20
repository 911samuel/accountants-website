interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type,
  value,
  onChange,
  required,
}: InputFieldProps) {
  return (
    <div className="mb-4 w-full mx-auto">
      <label className="block mb-1 font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-3 w-full rounded-md text-gray-900 
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary 
                   transition-all duration-200 ease-in-out hover:border-gray-400"
        required={required}
      />
    </div>
  );
}
