
const DashboardCard = ({ title, value, icon}) => {
    return (
      <div className={"bg-white rounded-2xl w-64 flex flex-row justify-center items-center gap-4 p-3"}>
        <div className="bg-gray-200 rounded-full">
          <div className="flex justify-center p-3 text-xl" style={{color : '#183432'}}>{icon}</div>
        </div>
        <div className="flex flex-col items-center">
        <p className="text-gray-500 text-sm mb-0">{title}</p>
        <h5 className="text-2xl font-bold">{value}</h5>
        </div>

      </div>
    );
  };
  
  export default DashboardCard;