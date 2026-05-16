"use client";

import AppShell from "@/components/dashboard/AppShell";
import { leads, sales } from "@/lib/store";

export default function Dashboard() {
  const totalLeads = leads.length;

  const wonLeads = leads.filter(
    (l) => l.status === "Won"
  ).length;

  const lostLeads = leads.filter(
    (l) => l.status === "Lost"
  ).length;

  const conversionRate =
    totalLeads === 0
      ? 0
      : Math.round((wonLeads / totalLeads) * 100);

  const totalRevenue = sales.reduce(
    (sum, sale) => sum + sale.amount,
    0
  );

  const recentLeads = [...leads]
    .slice(-3)
    .reverse();

  const recentSales = [...sales]
    .slice(-3)
    .reverse();

  return (
    <AppShell>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          SalesMate Analytics
        </h1>

        <p className="text-gray-400 text-sm">
          Overview of your business
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
          <p className="text-gray-400 text-sm">
            Total Leads
          </p>
          <h2 className="text-2xl font-bold">
            {totalLeads}
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
          <p className="text-gray-400 text-sm">
            Won Leads
          </p>
          <h2 className="text-2xl font-bold text-green-400">
            {wonLeads}
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
          <p className="text-gray-400 text-sm">
            Conversion Rate
          </p>
          <h2 className="text-2xl font-bold text-blue-400">
            {conversionRate}%
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
          <p className="text-gray-400 text-sm">
            Revenue
          </p>
          <h2 className="text-2xl font-bold text-green-400">
            ${totalRevenue}
          </h2>
        </div>

      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

        {/* Recent Leads */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
          <h3 className="font-semibold mb-3">
            Recent Leads
          </h3>

          {recentLeads.length === 0 ? (
            <p className="text-gray-400 text-sm">
              No leads yet
            </p>
          ) : (
            recentLeads.map((lead) => (
              <div
                key={lead.id}
                className="flex justify-between text-sm py-2 border-b border-white/10"
              >
                <span>{lead.name}</span>
                <span className="text-gray-400">
                  {lead.status}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Recent Sales */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
          <h3 className="font-semibold mb-3">
            Recent Sales
          </h3>

          {recentSales.length === 0 ? (
            <p className="text-gray-400 text-sm">
              No sales yet
            </p>
          ) : (
            recentSales.map((sale) => (
              <div
                key={sale.id}
                className="flex justify-between text-sm py-2 border-b border-white/10"
              >
                <span>{sale.leadName}</span>
                <span className="text-green-400">
                  ${sale.amount}
                </span>
              </div>
            ))
          )}
        </div>

      </div>

    </AppShell>
  );
}          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
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
