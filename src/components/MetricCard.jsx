// src/components/MetricCard.jsx
import React from "react";

export default function MetricCard({ title, value, color = "bg-blue-100", textColor = "text-blue-800" }) {
  return (
    <div className={`p-4 rounded shadow ${color} ${textColor} w-full`}>
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}
