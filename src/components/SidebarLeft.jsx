    // src/components/SidebarLeft.jsx

    import React from "react";
    import  mockPOData  from "../data";

    const getUniqueValues = (data, key) => [...new Set(data.map((item) => item[key]))];

    export default function SidebarLeft({ filters, setFilters }) {
    const FYOptions = getUniqueValues(mockPOData, "FY");
    const categoryOptions = getUniqueValues(mockPOData, "Category");
    const supplierOptions = getUniqueValues(mockPOData, "Supplier");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

     // ✅ Filter data based on selected filters
  const getFilteredData = () => {
    return mockPOData.filter((po) => {
      return (
        (filters.FY === "" || po.FY === filters.FY) &&
        (filters.Category === "" || po.Category === filters.Category) &&
        (filters.Supplier === "" || po.Supplier === filters.Supplier)
      );
    });
  };

  // ✅ Convert data to CSV and trigger download
  const handleDownload = () => {
    const filteredData = getFilteredData();
    const headers = Object.keys(filteredData[0]);
    const csvRows = [
      headers.join(","), // header row
      ...filteredData.map((row) =>
        headers.map((field) => JSON.stringify(row[field] ?? "")).join(",")
      ),
    ];
    const csvString = csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "purchase_orders.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };


    return (
        <div className="font-display p-4 bg-white h-full flex flex-col justify-between">
        {/* Top: Filters */}
        <div className="space-y-6">
            <h2 className="text-lg font-bold">Selection Panel</h2>

            <div className="space-y-2">
            <label className="block text-lg font-medium">Financial Year</label>
            <select
                name="FY"
                value={filters.FY}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
            >
                <option value="">All</option>
                {FYOptions.map((fy) => (
                <option key={fy} value={fy}>
                    {fy}
                </option>
                ))}
            </select>
            </div>

            <div className="space-y-2">
            <label className="block text-lg font-medium">Section</label>
            <select
                name="Category"
                value={filters.Category}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
            >
                <option value="">All</option>
                {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
                ))}
            </select>
            </div>

            <div className="space-y-2">
            <label className="block text-lg font-medium">Partner</label>
            <select
                name="Supplier"
                value={filters.Supplier}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
            >
                <option value="">All</option>
                {supplierOptions.map((sup) => (
                <option key={sup} value={sup}>
                    {sup}
                </option>
                ))}
            </select>
            </div>
        </div>

        {/* Bottom: Download Button */}
        <button
            onClick={handleDownload}
            className="mt-2 mb-6 bg-black text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
        >
            Download CSV
        </button>
        </div>
    );                                                                                                                                                      
    }
