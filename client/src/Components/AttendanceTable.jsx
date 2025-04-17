import React from "react";

const AttendanceTable = () => {
  const attendanceData = [
    { name: "Syed Mahamudul Hasan", role: "Flutter Developer", checkIn: "09:36", checkOut: "18:55", workingHrs: "09hr 02min", breakTime: "45min", extraHrs: "+30min", status: "Late" },
    { name: "Kamrul Hasan", role: "Back-End Developer", checkIn: "09:00", checkOut: "18:30", workingHrs: "09hr 30min", breakTime: "1hr 05min", extraHrs: "--", status: "In time" },
    { name: "Arfan-Roky", role: "Front-End Developer", checkIn: "09:36", checkOut: "18:55", workingHrs: "09hr 02min", breakTime: "30min", extraHrs: "--", status: "In time" },
    { name: "Afsan-Rahmatullah", role: "Full-Stack Developer", checkIn: "09:10", checkOut: "16:55", workingHrs: "07hr 02min", breakTime: "45min", extraHrs: "--", status: "In time" },
    { name: "Wasif-Zaman-Omee", role: "Full-Stack Developer", checkIn: "09:36", checkOut: "18:55", workingHrs: "09hr 02min", breakTime: "45min", extraHrs: "+45min", status: "In time" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg">
    <h4 className="text-xl font-semibold">Attendance</h4>
    <div className="overflow-y-auto max-h-[210px]"> {/* Enable scrolling inside this div */}
        <table className="w-full border-collapse">
        <thead>
            <tr className="bg-gray-200">
            <th className="p-2 text-left">Employee</th>
            <th className="p-2">Check In</th>
            <th className="p-2">Check Out</th>
            <th className="p-2">Working Hrs</th>
            <th className="p-2">Break Time</th>
            <th className="p-2">Extra Hrs</th>
            <th className="p-2">Status</th>
            </tr>
        </thead>
        <tbody>
            {attendanceData.map((employee, index) => (
                <tr key={index} className="text-center">
                <td className="border p-2 text-left">
                    <div className="font-medium">{employee.name}</div>
                    <div className="text-sm text-gray-500">{employee.role}</div>
                </td>
                <td className="border p-2">{employee.checkIn}</td>
                <td className="border p-2">{employee.checkOut}</td>
                <td className="border p-2">{employee.workingHrs}</td>
                <td className="border p-2">{employee.breakTime}</td>
                <td className="border p-2">{employee.extraHrs}</td>
                <td className={`border p-2 font-semibold ${employee.status === "Late" ? "text-red-500" : "text-green-600"}`}>{employee.status}</td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>

  );
};



export default AttendanceTable;
