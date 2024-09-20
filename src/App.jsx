import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import OverviewPage from "./pages/OverviewPage";
import Siderbar from "./components/Siderbar";
import UsersPage from "./pages/UsersPage";
import Salespage from "./pages/Salespage";
import Orderspage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
 return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
            <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        <Siderbar />
        <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/users" element={<UsersPage/>} />
            <Route path="/sales" element={<Salespage/>} />
            <Route path="/orders" element={<Orderspage/>} />
            <Route path="/analytics" element={<AnalyticsPage/>} />
        </Routes>
    </div>
 )
};

export default App;
