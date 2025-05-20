"use client";
import assets from "@/public";
import Image from "next/image";
import ContactInfo from "./shared/ContactInfo";
import InputField from "./shared/InputField";
import { contactData } from "@/data";
import React from "react";
import PreferredCommunication from "./shared/PreferredCommunication";

function ContactUs() {
  const [selectedMethod, setSelectedMethod] = React.useState("email");

  return (
    <section className="pt-32">
      <div className="flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left Section */}
        <div className="flex flex-col lg:p-11 rounded-2xl lg:rounded-l-2xl w-full lg:w-1/2">
          <h2 className="text-primary font-bold mb-6 text-center">Contact us</h2>
          <div className="relative flex-1">
            <Image
              src={assets.Contact}
              alt="Contact"
              className="w-full h-full object-cover lg:rounded-l-2xl rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-lg p-4 shadow">
              {contactData.map((contact, index) => (
                <ContactInfo
                  key={index}
                  iconPath={contact.iconPath}
                  text={contact.text}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-5 lg:p-11 rounded-2xl lg:rounded-r-2xl w-full lg:w-1/2 flex flex-col justify-between">
          <h2 className="text-primary text-2xl font-bold mb-6">Send Us A Message</h2>
          <InputField placeholder="Name" />
          <InputField type="email" placeholder="Email" />
          <InputField type="phone" placeholder="Phone" />
          <InputField type="text" placeholder="Subject" />
          <PreferredCommunication
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
          />
          <textarea
            className="w-full h-24 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none p-4 mb-6"
            placeholder="Message"
          />
          <button className="bg-primary text-white px-6 py-3 rounded-full w-full">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;