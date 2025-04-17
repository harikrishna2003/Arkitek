import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";


const Settings = () => {
  return (
    <div id="parent" style={{backgroundColor : '#D3E7F0'}}>
        <Sidebar />
      
      <div className="ml-75 flex flex-col flex-1">
        <Navbar title={"Settings"}/>
      </div>
    </div>
  );
};

export default Settings;