import { preferredMethods } from "@/data";
import { PreferredCommunicationProps } from "@/interface";

const PreferredCommunication = ({
  selectedMethod,
  setSelectedMethod,
}: PreferredCommunicationProps) => (
  <div className="mb-10">
    <h4 className="mb-4">Preferred method of communication</h4>
    <div className="flex">
      {preferredMethods.map((method) => (
        <div key={method.id} className="flex items-center mr-11">
          <input
            id={method.id}
            type="radio"
            name="radio-group"
            value={method.value}
            checked={selectedMethod === method.value}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="hidden"
          />
          <label
            htmlFor={method.id}
            className="flex items-center cursor-pointer text-textLight text-base font-normal leading-6"
          >
            <span
              className={`border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2 ${
                selectedMethod === method.value
                  ? "bg-primary border-background"
                  : ""
              }`}
            ></span>
            {method.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default PreferredCommunication
