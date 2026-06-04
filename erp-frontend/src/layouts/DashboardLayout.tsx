import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardPage from "../pages/DashboardPage";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />
        <DashboardPage />
      </div>
    </div>
  );
}