import React from "react";
import { FaUserCheck, FaUsers, FaUserPlus, FaCalendarAlt } from "react-icons/fa";
import DashboardCard from "./Cards/DashboardCard";

const DashboardData = [
  { title: "Active Employee", icon: <FaUserCheck />, employees: 43 },
  { title: "Total Employee", icon: <FaUsers />, employees: 90},
  { title: "Employee Requirement", icon: <FaUserPlus />,employees:4},
  { title: "Interview Scheduling", icon: <FaCalendarAlt />, employees: 32 }
];

const DashboardList = () => {
  return (
    <div className="flex gap-12 overflow-x-auto">
      {DashboardData.map((dept, index) => (
        <DashboardCard
          key={index}
          title={dept.title}
          icon={dept.icon}
          value={dept.employees}
          
        />
      ))}
    </div>
  );
};

export default DashboardList;
