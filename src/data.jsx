// src/data.js

 const mockPOData = [
    {
      FY: "FY24",
      Category: "Transport & Access",
      Supplier: "ADRIAN KENYA LTD",
      POAmount: 138720,
      AmountReceipted: 138720,
      ReceiptingPercentage: 1,
      Status: "Closed",
      DaysToExpiry: 305,
      ExpirationStatus: "PO has expired"
    },
    {
      FY: "FY24",
      Category: "Health & Safety",
      Supplier: "TECH SOLUTIONS",
      POAmount: 500000,
      AmountReceipted: 250000,
      ReceiptingPercentage: 0.5,
      Status: "Open",
      DaysToExpiry: 28,
      ExpirationStatus: "PO expiring soon"
    },
    {
      FY: "FY25",
      Category: "IT & Infrastructure",
      Supplier: "NEXT GEN",
      POAmount: 300000,
      AmountReceipted: 270000,
      ReceiptingPercentage: 0.9,
      Status: "Open",
      DaysToExpiry: 75,
      ExpirationStatus: "PO active"
    },
    {
      FY: "FY25",
      Category: "Transport & Access",
      Supplier: "DABRI GEN",
      POAmount: 180000,
      AmountReceipted: 120000,
      ReceiptingPercentage: 0.66,
      Status: "Open",
      DaysToExpiry: 10,
      ExpirationStatus: "PO expiring soon"
    },
    {
      FY: "FY23",
      Category: "Health & Safety",
      Supplier: "ELRIS COMMUNICATION",
      POAmount: 100000,
      AmountReceipted: 100000,
      ReceiptingPercentage: 1,
      Status: "Closed",
      DaysToExpiry: -100,
      ExpirationStatus: "PO has expired"
    }
  ];
  

export default mockPOData;











//   export const barData = [
//     { section: "Procurement", POs: 50 },
//     { section: "Finance", POs: 40 },
//     { section: "Programs", POs: 42 },
//   ];
  
//   export const pieData = [
//     { name: "Utilized", value: 850000 },
//     { name: "Remaining", value: 150000 },
//   ];
  
//   export const COLORS = ["#4CAF50", "#F44336"];
  