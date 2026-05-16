"use client";

import { useState } from "react";
import AppShell from "@/components/dashboard/AppShell";
import { sales as initialSales, leads, addSale, Sale } from "@/lib/store";

export default function SalesPage() {
  const [sales, setSales] = useState(initialSales);

  const [leadId, setLeadId] = useState("");
  const [amount, setAmount] = useState("");

  const totalRevenue = sales.reduce(
    (sum, sale) => sum + sale.amount,
    0
  );

  const handleAddSale = () => {
    if (!leadId || !amount) return;

    const lead = leads.find((l) => l.id === leadId);
    if (!lead) return;

    const newSale: Sale = {
      id: Date.now().toString(),
      leadId,
      leadName: lead.name,
      amount: Number(amount),
      date: new Date().toISOString().split("T")[0],
    };

    addSale(newSale);
    setSales([...sales, newSale]);

    setLeadId("");
    setAmount("");
  };

  return (
    <AppShell>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Sales
        </h1>

        <div className="text-green-400 font-bold">
          Total Revenue: ${totalRevenue}
        </div>
      </div>

      {/* Add Sale */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">

        {/* Lead selector */}
        <select
          value={leadId}
          onChange={(e) =>
            setLeadId(e.target.value)
          }
          className="bg-black/30 border border-white/10 p-2 rounded-lg"
        >
          <option value="">Select Lead</option>
          {leads
            .filter((l) => l.status === "Won")
            .map((lead) => (
              <option key={lead.id} value={lead.id}>
                {lead.name}
              </option>
            ))}
        </select>

        {/* Amount */}
        <input
          placeholder="Amount ($)"
          type="number"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
        />

        {/* Button */}
        <button
          onClick={handleAddSale}
          className="bg-[#2563EB] hover:bg-blue-500 transition px-4 py-2 rounded-lg"
        >
          + Add Sale
        </button>

      </div>

      {/* Sales Table */}
      <div className="mt-6 bg-white/5 border border-white/10 rounded-xl overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-4 text-gray-400 text-sm p-4 border-b border-white/10">
          <span>Lead</span>
          <span>Amount</span>
          <span>Date</span>
          <span>Action</span>
        </div>

        {/* Rows */}
        {sales.map((sale) => (
          <div
            key={sale.id}
            className="grid grid-cols-4 p-4 items-center text-sm border-t border-white/10"
          >
            <span>{sale.leadName}</span>

            <span className="text-green-400 font-medium">
              ${sale.amount}
            </span>

            <span className="text-gray-400">
              {sale.date}
            </span>

            <span className="text-blue-400 cursor-pointer">
              View
            </span>
          </div>
        ))}

        {sales.length === 0 && (
          <div className="p-6 text-center text-gray-400">
            No sales recorded yet
          </div>
        )}

      </div>

    </AppShell>
  );
      }
