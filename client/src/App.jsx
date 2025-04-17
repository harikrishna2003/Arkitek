import React from "react"
import { Dashboard, Department, Employees, Attendance, Announcement, Notification, Settings, Login } from "./pages"
import { Routes, Route, Navigate } from "react-router-dom"



function App() {


  return (

      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/department" element={<Department />}/>
        <Route exact path="/Employees" element={<Employees />}/>
        <Route exact path="/Attendance" element={<Attendance />}/>
        <Route exact path="/Announcement" element={<Announcement />}/>
        <Route exact path="/Notification" element={<Notification />}/>
        <Route exact path="/Settings" element={<Settings />}/>
      </Routes>
  )
      
   
}

export default App
