import AppShell from "@/components/dashboard/AppShell";

export default function LeadsPage() {
  return (
    <AppShell>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Leads</h1>

        <button className="bg-[#2563EB] hover:bg-blue-500 transition px-4 py-2 rounded-lg text-sm font-medium">
          + Add Lead
        </button>
      </div>

      {/* Leads Table */}
      <div className="mt-6 bg-white/5 border border-white/10 rounded-xl overflow-hidden">

        {/* Table Header */}
        <div className="grid grid-cols-5 text-gray-400 text-sm p-4 border-b border-white/10">
          <span>Name</span>
          <span>Contact</span>
          <span>Source</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {/* Sample Lead Row */}
        <div className="grid grid-cols-5 p-4 items-center text-sm">

          <span>John Doe</span>
          <span>johndoe@email.com</span>
          <span>Instagram</span>

          <span>
            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-md text-xs">
              New
            </span>
          </span>

          <span className="text-blue-400 cursor-pointer">
            View
          </span>

        </div>

        {/* Another Row */}
        <div className="grid grid-cols-5 p-4 items-center text-sm border-t border-white/10">

          <span>Sarah Mark</span>
          <span>sarah@email.com</span>
          <span>WhatsApp</span>

          <span>
            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-md text-xs">
              Won
            </span>
          </span>

          <span className="text-blue-400 cursor-pointer">
            View
          </span>

        </div>

      </div>

    </AppShell>
  );
}
