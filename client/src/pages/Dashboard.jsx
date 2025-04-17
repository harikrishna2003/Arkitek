import React from "react";
import DepartmentList from "../Components/DepartmentList";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import AttendanceTable from "../Components/AttendanceTable";
import DashboardList from "../Components/DashboarList";

const Dashboard = () => {
  return (
    <div id="parent" style={{backgroundColor : '#D3E7F0'}}>
        <Sidebar />
      
      <div className="ml-75 flex flex-col flex-1">
        <Navbar title={"Dashboard"}/>
        <div className="flex flex-row justify-center gap-12 p-2">
          <DashboardList />
        </div>
        <div>
          <DepartmentList />
        </div>
        <div className="p-4">
          <AttendanceTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
