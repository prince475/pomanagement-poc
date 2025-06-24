// Chartcard
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";

export default function ChartCard({ data }) {
  // Data prep
  const partnerStatusData = data.map((po) => ({
    name: po.Supplier,
    FullyReceipted: po.ReceiptingPercentage === 1 ? po.POAmount : 0,
    Pending: po.ReceiptingPercentage < 1 ? po.POAmount - po.AmountReceipted : 0,
    AtRisk:
      po.DaysToExpiry <= 30 && po.ReceiptingPercentage < 1
        ? po.POAmount - po.AmountReceipted
        : 0,
  }));

  const totalPO = data.reduce((sum, po) => sum + po.POAmount, 0);
  const totalPending = data.reduce(
    (sum, po) => sum + (po.POAmount - po.AmountReceipted),
    0
  );
  const donutData = [
    { name: "Pending", value: totalPending },
    { name: "Receipted", value: totalPO - totalPending },
  ];

  const workloadData = data.map((po) => ({
    name: po.Supplier,
    Workload: po.POAmount,
  }));

  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Top row: Horizontal bar + Donut */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Horizontal Stacked Bar */}
        <div className="bg-white p-4 rounded-xl shadow-md h-[22rem]">
          <h2 className="text-lg font-semibold mb-2">Receipt Fulfillment</h2>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart layout="vertical" data={partnerStatusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="FullyReceipted" stackId="a" fill="#4ade80" />
              <Bar dataKey="Pending" stackId="a" fill="#facc15" />
              <Bar dataKey="AtRisk" stackId="a" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Donut */}
        <div className="bg-white p-4 rounded-xl shadow-md h-[22rem]">
          <h2 className="text-lg font-semibold mb-2">% Pending vs Receipted</h2>
          <div className="h-[90%] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  label
                >
                  {donutData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "#facc15" : "#4ade80"}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom row: Vertical bar full width */}
      <div className="bg-white p-4 rounded-xl shadow-md h-[22rem]">
        <h2 className="text-lg font-semibold mb-2">
          Workload Assigned per Partner
        </h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={workloadData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Workload" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   Cell,
//   PieChart,
//   Pie,
//   Legend,
// } from "recharts";

// export default function ChartCard({ data }) {
//   // Data prep
//   const partnerStatusData = data.map((po) => ({
//     name: po.Supplier,
//     FullyReceipted: po.ReceiptingPercentage === 1 ? po.POAmount : 0,
//     Pending: po.ReceiptingPercentage < 1 ? po.POAmount - po.AmountReceipted : 0,
//     AtRisk:
//       po.DaysToExpiry <= 30 && po.ReceiptingPercentage < 1
//         ? po.POAmount - po.AmountReceipted
//         : 0,
//   }));

//   const totalPO = data.reduce((sum, po) => sum + po.POAmount, 0);
//   const totalPending = data.reduce(
//     (sum, po) => sum + (po.POAmount - po.AmountReceipted),
//     0
//   );
//   const donutData = [
//     { name: "Pending", value: totalPending },
//     { name: "Receipted", value: totalPO - totalPending },
//   ];

//   const workloadData = data.map((po) => ({
//     name: po.Supplier,
//     Workload: po.POAmount,
//   }));

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Horizontal Bar Chart */}
//         <div className="bg-white p-4 rounded-xl shadow-md h-[20rem]">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart layout="vertical" data={partnerStatusData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis type="number" />
//               <YAxis dataKey="name" type="category" />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="FullyReceipted" stackId="a" fill="#4ade80" />
//               <Bar dataKey="Pending" stackId="a" fill="#facc15" />
//               <Bar dataKey="AtRisk" stackId="a" fill="#f87171" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Donut Chart */}
//         <div className="bg-white p-4 rounded-xl shadow-md h-[20rem] flex items-center justify-center">
//           <ResponsiveContainer width="100%" height="80%">
//             <PieChart>
//               <Pie
//                 data={donutData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={50}
//                 outerRadius={70}
//                 label
//               >
//                 {donutData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={index === 0 ? "#facc15" : "#4ade80"}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Vertical Bar */}
//       <div className="bg-white p-4 rounded-xl shadow-md h-[20rem]">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={workloadData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="Workload" fill="#60a5fa" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

//   return (
//     <div className="overflow-y-auto scrollbar-hide p-4 space-y-6">
//       {/* Top row: Horizontal bar + donut side by side */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Horizontal Bar */}
//         <div className="bg-white p-4 rounded shadow h-[20rem]">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart layout="vertical" data={partnerStatusData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis type="number" />
//               <YAxis dataKey="name" type="category" />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="FullyReceipted" stackId="a" fill="#4ade80" />
//               <Bar dataKey="Pending" stackId="a" fill="#facc15" />
//               <Bar dataKey="AtRisk" stackId="a" fill="#f87171" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Donut Chart */}
//         <div className="bg-white p-4 rounded shadow h-[20rem] flex flex-col justify-center items-center">
//           <ResponsiveContainer width="100%" height="80%">
//             <PieChart>
//               <Pie
//                 data={donutData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={50}
//                 outerRadius={70}
//                 label
//               >
//                 {donutData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={index === 0 ? "#facc15" : "#4ade80"}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Bottom: Vertical Bar */}
//       <div className="bg-white p-4 rounded shadow h-[20rem]">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={workloadData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="Workload" fill="#60a5fa" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }



























// // src/components/ChartCard.jsx
// import React from "react";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
// } from "recharts";

// export default function ChartCard({ data }) {
//   // Summarize receipting percentage per supplier or category
//   const chartData = data.map((po) => ({
//     name: po.Supplier,
//     Receipted: po.AmountReceipted,
//     Total: po.POAmount,
//   }));

//   return (
//     <div className="bg-white p-4 rounded shadow w-full h-96">
//       <h3 className="text-lg font-semibold mb-4">Receipting by Supplier</h3>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="Receipted" fill="#4ade80" name="Receipted" />
//           <Bar dataKey="Total" fill="#60a5fa" name="Total PO" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
