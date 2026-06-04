export default function DashboardPage() {
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

    </div>
  );
}