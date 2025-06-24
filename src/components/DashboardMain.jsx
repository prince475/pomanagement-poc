//DashboardMain
import React, { useState } from "react";
import mockPOData from "../data";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import ChartCard from "./ChartCard";


export default function DashboardMain() {
  const [filters, setFilters] = useState({
    FY: "",
    Category: "",
    Supplier: "",
  });

  if (!mockPOData || !Array.isArray(mockPOData)) {
    return <div className="p-4 text-red-500">Error loading mock PO data.</div>;
  }

  const filteredData = mockPOData.filter((po) => {
    return (
      (!filters.FY || po.FY === filters.FY) &&
      (!filters.Category || po.Category === filters.Category) &&
      (!filters.Supplier || po.Supplier === filters.Supplier)
    );
  });

  return (
    <div className="flex">
      <div className="flex flex-1 overflow-hidden bg-gray-100 text-gray-900">
        <div className="w-1/6 bg-white shadow-sm overflow-y-auto">
          <SidebarLeft filters={filters} setFilters={setFilters} />
        </div>

        <div className="w-1/2 overflow-y-auto p-10">
          <ChartCard data={filteredData} />
        </div>

        <div className="w-1/4 overflow-y-auto shadow-sm p-4">
          <SidebarRight data={filteredData} />
        </div>
      </div>
    </div>
  );
}



// // src/components/DashboardMain.jsx

// import React, { useState } from "react";
// import mockPOData  from "../data";
// import SidebarLeft from "./SidebarLeft";
// import SidebarRight from "./SidebarRight";
// import ChartCard from "./ChartCard"; // assuming this handles the center visualizations
// import MetricCard from "./MetricCard";

// export default function DashboardMain() {
//   const [filters, setFilters] = useState({
//     FY: "",
//     Category: "",
//     Supplier: "",
//   });

//   if (!mockPOData || !Array.isArray(mockPOData)) {
//     return <div className="p-4 text-red-500">Error loading mock PO data.</div>;
//   }
  
//   const filteredData = mockPOData.filter((po) => {
//     return (
//       (!filters.FY || po.FY === filters.FY) &&
//       (!filters.Category || po.Category === filters.Category) &&
//       (!filters.Supplier || po.Supplier === filters.Supplier)
//     );
//   });



//   return (
//     <div className="flex h-screen w-full bg-gray-50 text-gray-900">
//       <div className="w-1/5 border-r border-gray-200">
//         <SidebarLeft filters={filters} setFilters={setFilters} />
//       </div>
//       <div className="flex-1 p-4 overflow-y-auto">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//             <MetricCard title="Total PO Value" value={`KES ${filteredData.reduce((sum, po) => sum + po.POAmount, 0).toLocaleString()}`} />
//             <MetricCard title="Total Receipted" value={`KES ${filteredData.reduce((sum, po) => sum + po.AmountReceipted, 0).toLocaleString()}`} color="bg-green-100" textColor="text-green-800" />
//             <MetricCard title="POs Raised" value={filteredData.length} color="bg-yellow-100" textColor="text-yellow-800" />
//             <MetricCard 
//                 title="% Receipted" 
//                 value={`${Math.round(
//                 (filteredData.reduce((sum, po) => sum + po.AmountReceipted, 0) /
//                 filteredData.reduce((sum, po) => sum + po.POAmount, 0) || 1) * 100
//                 )}%`} 
//                 color="bg-purple-100" 
//                 textColor="text-purple-800" 
//             />
//         </div>

//         <ChartCard data={filteredData} />
//       </div>
//       <div className="w-1/5 border-l border-gray-200 bg-white p-4">
//         <SidebarRight data={filteredData} />
//       </div>
//     </div>
//   );
// }
