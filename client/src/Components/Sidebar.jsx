import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Building, Users, Clock, Bell, Megaphone, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  // Function to check if current path matches
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed text-white w-70 p-4 rounded-lg h-175 m-3 flex flex-col" style={{ backgroundColor: "#183432" }}>
      <p className="text-2xl mb-5 text-center">Arkitek</p>
      <nav className="flex-1">
        <ul className="space-y-3">
          <li className={`flex items-center p-2 rounded-md cursor-pointer ${isActive('/dashboard') ? 'bg-gray-500' : 'hover:bg-gray-500'}`}>
            <Link to="/dashboard" className="flex items-center w-full text-white !no-underline">
              <Home className="w-5 h-5 mr-2" /> Dashboard
            </Link>
          </li>
          <li className={`flex items-center p-2 rounded-md cursor-pointer ${isActive('/department') ? 'bg-gray-500' : 'hover:bg-gray-500'}`}>
            <Link to="/department" className="flex items-center w-full text-white !no-underline">
              <Building className="w-5 h-5 mr-2" /> Department
            </Link>
          </li>
          <li className={`flex items-center p-2 rounded-md cursor-pointer ${isActive('/employees') ? 'bg-gray-500' : 'hover:bg-gray-500'}`}>
            <Link to="/employees" className="flex items-center w-full text-white !no-underline">
              <Users className="w-5 h-5 mr-2" /> Employees
            </Link>
          </li>
          <li className={`flex items-center p-2 rounded-md cursor-pointer ${isActive('/attendance') ? 'bg-gray-500' : 'hover:bg-gray-500'}`}>
            <Link to="/attendance" className="flex items-center w-full text-white !no-underline">
              <Clock className="w-5 h-5 mr-2" /> Attendance
            </Link>
          </li>
          <li className={`flex items-center p-2 rounded-md cursor-pointer ${isActive('/notification') ? 'bg-gray-500' : 'hover:bg-gray-500'}`}>
            <Link to="/notification" className="flex items-center w-full text-white !no-underline">
              <Bell className="w-5 h-5 mr-2" /> Notification
            </Link>
          </li>
          <li className={`flex items-center p-2 rounded-md cursor-pointer ${isActive('/announcement') ? 'bg-gray-500' : 'hover:bg-gray-500'}`}>
            <Link to="/announcement" className="flex items-center w-full text-white !no-underline">
              <Megaphone className="w-5 h-5 mr-2" /> Announcement
            </Link>
          </li>
          <li className={`flex items-center p-2 rounded-md cursor-pointer ${isActive('/settings') ? 'bg-gray-500' : 'hover:bg-gray-500'}`}>
            <Link to="/settings" className="flex items-center w-full text-white !no-underline">
              <Settings className="w-5 h-5 mr-2" /> Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-30">
        <button onClick={handleLogout} className="flex items-center p-2 rounded-md hover:bg-red-600 cursor-pointer w-full">
          <LogOut className="w-5 h-5 mr-2" /> Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;