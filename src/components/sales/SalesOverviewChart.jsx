import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const SalesOverviewChart = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
  return (
     <motion.div
     className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
     >
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>
            <select
                className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
            >
                <option>This Week</option>
                <option>This Month</option>
                <option>This Quarter</option>
                <option>This Year</option>
            </select>
        </div>
        <div
          className=""
        >
           <ResponsiveContainer>
            
           </ResponsiveContainer>
        </div>
     </motion.div>
  );
};

export default SalesOverviewChart;
