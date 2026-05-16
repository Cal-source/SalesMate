export default function Dashboard() {
  return (
    <main className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-16 bg-[#0A0F1C] border-r border-white/10 flex flex-col items-center py-6 gap-6">

        <div className="w-8 h-8 rounded-lg bg-blue-600" />

        <div className="flex flex-col gap-6 mt-10 text-gray-400">
          <span>📊</span>
          <span>👥</span>
          <span>💰</span>
          <span>⚙️</span>
        </div>

      </aside>

      {/* Main Content */}
      <section className="flex-1 p-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            SalesMate Dashboard
          </h1>

          <div className="text-sm text-gray-400">
            Welcome back 👋
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mt-6">

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Total Leads</p>
            <h2 className="text-2xl font-bold">0</h2>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Active Deals</p>
            <h2 className="text-2xl font-bold">0</h2>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Revenue</p>
            <h2 className="text-2xl font-bold">$0</h2>
          </div>

        </div>

        {/* Data Section */}
        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl h-64">
            <h3 className="font-semibold mb-2">Recent Leads</h3>
            <p className="text-gray-400 text-sm">No leads yet</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl h-64">
            <h3 className="font-semibold mb-2">Sales Activity</h3>
            <p className="text-gray-400 text-sm">No activity yet</p>
          </div>

        </div>

      </section>
    </main>
  );
          }
