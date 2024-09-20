import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const orderData = [
    { id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2024-07-01" },
    { id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2024-07-02" },
    { id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2024-07-03" },
    { id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2024-07-04" },
    { id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2024-07-05" },
    { id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2024-07-06" },
    { id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2024-07-07" },
    { id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2024-07-08" },
];

const OrdersTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orderData);

   const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orderData.filter((order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term))
    setFilteredOrders(filtered);
   } 

  return (
   <motion.div
   className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ delay: 0.4 }}    
   >
    <div className="flex justify-between items-center mb-6">
       <h2 className="text-xl font-semibold text-gray-100">Order List</h2> 
        <div className="relative">
        <input 
            type="text" 
            placeholder="Search orders..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
         /> 
         <Search className="absolute left-3 top-2.5 text-gray-400"size={18} />
        </div>
    </div>
   </motion.div>
  );
};

export default OrdersTable
