// src/components/SidebarRight.jsx

export default function SidebarRight({ data }) {
  const formatCurrency = (amount) =>
    `KES ${amount.toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;

  return (
    <div className="bg-white rounded-xl shadow-md mt-10 max-w-sm p-4">
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
  