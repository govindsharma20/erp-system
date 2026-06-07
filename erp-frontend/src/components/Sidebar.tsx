import { useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  const items = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Employees",
      path: "/employees",
    },
    {
      name: "Inventory",
      path: "/inventory",
    },
    {
      name: "Analytics",
      path: "/analytics",
    },
    {
      name: "Users",
      path: "/users",
    },
    {
      name: "Reports",
      path: "/reports",
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];

  return (
    <aside className="w-72 min-h-screen border-r border-white/10 bg-white/5 backdrop-blur-2xl p-6 hidden lg:block">

      <h1 className="text-4xl font-black mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        ERP Nexus
      </h1>

      <div className="space-y-3">

        {items.map((item) => (

          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className="w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all"
          >
            {item.name}
          </button>

        ))}

      </div>

    </aside>
  );
}