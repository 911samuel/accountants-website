"use client";
import { useEffect, useState, useMemo } from "react";
import Cookies from "universal-cookie";
import { AiOutlineClose } from "react-icons/ai";
import InputField from "./shared/InputField";

const SubscribePopUp = () => {
  const cookies = useMemo(() => new Cookies(), []);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const hasVisited = cookies.get("v_t");
    if (!hasVisited) {
      setIsPopupOpen(true);
    }
  }, [cookies]);

  const handleClose = () => {
    cookies.set("v_t", 1, { expires: new Date(Date.now() + 86400000) });
    setIsPopupOpen(false);
  };

  return (
    <>
      {isPopupOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-gray-800 bg-opacity-20">
          <div className="w-1/3 bg-white rounded-3xl shadow-md p-5 space-y-4 relative">
            <div className="flex items-center justify-between">
              <p className="text-md font-bold uppercase text-primary">
                Subscribe To Newsletter
              </p>
              <AiOutlineClose
                className="text-red-600 font-bold text-2xl cursor-pointer"
                onClick={handleClose}
              />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="p-2">
              <InputField
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex justify-end mt-5">
                <button className="bg-primary text-white px-4 py-2 rounded-md">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribePopUp;