import { useEffect, useState } from "react";
import api from "../services/api";

export default function DashboardPage() {

  const [employeeCount, setEmployeeCount] = useState(0);

  useEffect(() => {

    const fetchEmployees = async () => {

      try {

        const response = await api.get("/employees");

        setEmployeeCount(response.data.length);

      } catch (error) {

        console.error("Error fetching employees:", error);

      }
    };

    fetchEmployees();

  }, []);

  return (
    <div>

      <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-10 mb-10">

        <h1 className="text-7xl font-black leading-tight max-w-4xl">
          The Future Of Enterprise Operations
        </h1>

        <p className="text-zinc-300 text-xl mt-6 max-w-2xl">
          Futuristic ERP platform with analytics,
          employees and inventory intelligence.
        </p>

        <div className="flex gap-4 mt-8">

          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500">
            Launch Platform
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5">
            View Analytics
          </button>

        </div>

      </section>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <p className="text-zinc-400 text-sm">
            Total Employees
          </p>

          <h2 className="text-5xl font-bold mt-3 text-cyan-400">
            {employeeCount}
          </h2>
        </div>

        <div className="rounded-3xl border border-purple-500/20 bg-purple-500/5 p-6">
          <p className="text-zinc-400 text-sm">
            Departments
          </p>

          <h2 className="text-5xl font-bold mt-3 text-purple-400">
            4
          </h2>
        </div>

        <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6">
          <p className="text-zinc-400 text-sm">
            Active Projects
          </p>

          <h2 className="text-5xl font-bold mt-3 text-green-400">
            12
          </h2>
        </div>

        <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
          <p className="text-zinc-400 text-sm">
            Monthly Revenue
          </p>

          <h2 className="text-5xl font-bold mt-3 text-orange-400">
            ₹0
          </h2>
        </div>

      </div>

    </div>
  );
}