export default function Navbar() {
  return (
    <div className="flex items-center justify-between mb-10">

      <div>
        <h2 className="text-5xl font-black">
          Enterprise Dashboard
        </h2>

        <p className="text-zinc-400 mt-2">
          Futuristic ERP Operating System
        </p>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 w-80"
      />
    </div>
  );
}