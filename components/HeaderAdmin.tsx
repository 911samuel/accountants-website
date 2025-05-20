"use client";
import { useAuth } from "@/context/authContext";
import { FiBell, FiSearch, FiMessageSquare } from "react-icons/fi";

function HeaderAdmin() {
  const auth = useAuth();

  return (
    <div className="bg-white shadow-md py-4 px-6 flex items-center justify-between flex-wrap">
      <div className="flex items-center w-full md:w-1/2 lg:w-1/3">
        <div className="relative w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 overflow-hidden"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button className="relative p-2 rounded-full hover:bg-gray-200 transition-colors">
          <FiBell className="text-gray-600 w-6 h-6" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <button className="relative p-2 rounded-full hover:bg-gray-200 transition-colors">
          <FiMessageSquare className="text-gray-600 w-6 h-6" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500"></span>
        </button>

        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">
              {auth.user?.lastName || "John Doe"}
            </p>
            <p className="text-xs text-gray-500">
              {" "}
              {auth.user?.role || "Admin"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin
