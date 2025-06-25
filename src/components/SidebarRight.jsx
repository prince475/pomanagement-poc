// src/components/SidebarRight.jsx
import React from "react";
// import  mockPOData  from "../data";


  const formatCurrency = (amount) =>
    `KES ${amount.toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;

  // Filter POs with less than or equal to 30 days to expire
  const getExpiringPOs = (data) => {
    return data.filter((po) => Number(po["DaysToExpiry"]) <= 30);
  };

  // Convert to CSV and download
const handleDownloadExpiring = (expiringData) => {
  if (expiringData.length === 0) return;

  const headers = ["FY", "Supplier", " AmountReceipted", "POAmount", "ExpirationDate", "DaysToExpiry"];
  const rows = [
    headers.join(","),
    ...expiringData.map((po) =>
      headers
        .map((field) => JSON.stringify(po[field] ?? ""))
        .join(",")
    ),
  ];

  const blob = new Blob([rows.join("\n")], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "expiring_pos.csv";
  link.click();
  window.URL.revokeObjectURL(url);
};


  export default function SidebarRight({ data }) {
    const expiringPOs = getExpiringPOs(data);

  return (
    <div className="flex flex-col gap-6  max-w-sm">
      <div className="bg-white rounded-xl shadow-md mt-10 p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Results Summary</h2>
        <ul className="space-y-4 text-sm text-gray-700">
          <li className="flex justify-between">
            <span>Budget Loaded:</span>
            <span className="font-semibold">
              {formatCurrency(data.reduce((sum, po) => sum + po.POAmount, 0))}
            </span>
          </li>
          <li className="flex justify-between">
            <span>POs Raised:</span>
            <span className="font-semibold">{data.length}</span>
          </li>
          <li className="flex justify-between">
            <span>Receipted:</span>
            <span className="font-semibold">
              {formatCurrency(data.reduce((sum, po) => sum + po.AmountReceipted, 0))}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Risk of Cancellation:</span>
            <span className="font-semibold text-red-600">
              {
                data.filter((po) => po.ExpirationStatus === "PO has expired").length
              }
            </span>
          </li>
          <li className="flex justify-between">
            <span>Receipting Risk:</span>
            <span className="font-semibold text-yellow-600">
              {data.filter((po) => po.ReceiptingPercentage < 0.5).length}
            </span>
          </li>
        </ul>
      </div>

     {/* Expiring POs Card */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="font-bold text-black mb-4">POs Expiring in 30 Days</h2>
        {expiringPOs.length > 0 ? (
          <>
          <ul className="font-display space-y-2 text-sm text-gray-700 max-h-[500px] overflow-auto">
            {expiringPOs.map((po, index) => (
              <li key={index} className="flex justify-between pb-1">
                <span className="truncate ">{po.Supplier}</span>
                <span className="text-sm font-semibold text-gray-700">
                  {po["DaysToExpiry"]} days
                </span>
              </li>
            ))}
          </ul>
            {/* ✅ Inserted Download Button */}
      <button
        onClick={() => handleDownloadExpiring(expiringPOs)}
        className="mt-4 bg-black text-white text-sm px-4 py-2 rounded hover:bg-green-500 transition-colors"
      >
        Download CSV
      </button>
      </>

        ):(
          <p className="text-sm text-green-600">No POs expiring soon 🎉</p>
        )}
      </div>
    </div>
        
  );
}


// function SidebarRight({ data }) {
//     return (
//       <div>
//         <h2 className="text-lg font-semibold mb-4">Results</h2>
//         {/* Add your metric breakdowns here */}
//         <ul className="space-y-2">
//           <li>Budget Loaded: {data.reduce((sum, po) => sum + po.POAmount, 0)}</li>
//           <li>POs Raised: {data.length}</li>
//           <li>Receipted: {data.reduce((sum, po) => sum + po.AmountReceipted, 0)}</li>
//           <li>
//             Risk of Cancellation:{" "}
//             {data.filter((po) => po.ExpirationStatus === "PO has expired").length}
//           </li>
//           <li>
//             Receipting Risk:{" "}
//             {data.filter((po) => po.ReceiptingPercentage < 0.5).length}
//           </li>
//         </ul>
//       </div>
//     );
//   }
  
//   export default SidebarRight;
  











// export default function SidebarRight() {
//     return (
//       <div>
//         <h2 className="text-xl font-bold mb-4">Summary</h2>
//         <ul className="space-y-2 text-sm">
//           <li><strong>Budget Loaded:</strong> $1,000,000</li>
//           <li><strong>POs Raised:</strong> 132</li>
//           <li><strong>Receipted:</strong> $850,000</li>
//           <li><strong>Risk of Cancellation:</strong> 5%</li>
//           <li><strong>Receipting Risk:</strong> Low</li>
//         </ul>
//       </div>
//     );
//   }
  