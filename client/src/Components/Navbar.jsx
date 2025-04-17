import React from "react";
import { Search } from "lucide-react";

const Navbar = ({title}) => {
  return (
    <div className="bg-white p-2 rounded-lg m-3 flex justify-between items-center">
      <h4 className="ml-5 font-semibold">{title}</h4>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-3 text-gray-500" />
        </div>
        {/* <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium">Admin</span>
          <img
            src="https://www.brandcrowd.com/blog/67-best-architecture-logo-designs/"
            alt="Profile"
            className="w-10 h-10 rounded-full border"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
