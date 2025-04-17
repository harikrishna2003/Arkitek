import React from "react";
import { FaBuilding, FaBullseye, FaVectorSquare, FaUsers, FaChartLine } from "react-icons/fa";
import DepartmentCard from "./Cards/DepartmentCard";

const departmentData = [
  { title: "Civil", icon: <FaChartLine />, employees: 245 },
  { title: "Architect", icon: <FaBullseye />, employees: 245},
  { title: "Interior Design", icon: <FaVectorSquare />,employees:245},
  { title: "3D Modeling", icon: <FaUsers />, employees: 245 }
];

const DepartmentList = () => {
  return (
    <div className="flex gap-12 p-6 overflow-x-auto justify-center">
      {departmentData.map((dept, index) => (
        <DepartmentCard
          key={index}
          title={dept.title}
          icon={dept.icon}
          employees={dept.employees}
          updated={dept.updated}
        />
      ))}
    </div>
  );
};

export default DepartmentList;
