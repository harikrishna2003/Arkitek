import React from "react";

const DepartmentCard = ({ title, icon, employees }) => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex justify-center mb-3 text-3xl" style={{color : '#183432'}}>{icon}</div>
      <h6 className="text-lg font-semibold text-center">{title}</h6>
      <p className="text-green-600 text-center">Active Employee: {employees}</p>
      
    </div>
  );
};

export default DepartmentCard;
