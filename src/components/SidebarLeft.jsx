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

    return (
        <div className="p-4 space-y-6 bg-white h-full">
        <h2 className="text-lg font-semibold">Filters</h2>

        <div className="space-y-2">
            <label className="block text-sm font-medium">Financial Year</label>
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
            <label className="block text-sm font-medium">Section</label>
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
            <label className="block text-sm font-medium">Partner</label>
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
    );                                                                                                                                                      
    }
