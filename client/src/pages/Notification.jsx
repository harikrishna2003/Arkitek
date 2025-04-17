import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";


const Notification = () => {
  return (
    <div id="parent" style={{backgroundColor : '#D3E7F0'}}>
        <Sidebar />
      
      <div className="ml-75 flex flex-col flex-1">
        <Navbar title={"Notification"}/>
      </div>
    </div>
  );
};

export default Notification;