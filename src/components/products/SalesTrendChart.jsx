import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const salesData = [
    {name: "Jan", sales: 6100 },
    {name: "Feb", sales: 5900 },
    {name: "Mar", sales: 6800 },
    {name: "Apr", sales: 6300 },
    {name: "May", sales: 7100 },
    {name: "Jun", sales: 7500 },
]

const SalesTrendChart = () => {
  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
   <h2 className="text-xl font-semibold text-gray-100 mb-4">Sales Trend</h2>
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
          <LineChart data={salesData}>
              <CartesianGrid strokeDasharray='3 3' stroke="#374151" />
              <XAxis dataKey='name' stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                 contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4B5563"
                 }}   
                 itemStyle={{color: "#E5E7EB" }}             
              />
               <Legend />
              <Line  type='monotone'dataKey='sales'stroke="#885CF6" strokeWidth={2}/>
          </LineChart>
      </ResponsiveContainer>
    </div>  

  </motion.div>
  )
}

export default SalesTrendChart
