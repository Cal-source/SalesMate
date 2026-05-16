"use client";

import { useState } from "react";
import AppShell from "@/components/dashboard/AppShell";
import {
  leads,
  updateLeadStatus,
  updateLeadNotes,
  LeadStatus,
} from "@/lib/store";

export default function LeadDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const lead = leads.find((l) => l.id === params.id);

  const [status, setStatus] = useState(lead?.status || "New");
  const [notes, setNotes] = useState(lead?.notes || "");

  if (!lead) {
    return (
      <AppShell>
        <p className="text-red-400">Lead not found</p>
      </AppShell>
    );
  }

  const handleStatusChange = (value: LeadStatus) => {
    setStatus(value);
    updateLeadStatus(lead.id, value);
  };

  const handleNotesSave = () => {
    updateLeadNotes(lead.id, notes);
  };

  return (
    <AppShell>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{lead.name}</h1>

        <span className="text-gray-400 text-sm">
          Lead ID: {lead.id}
        </span>
      </div>

      {/* Info Card */}
      <div className="mt-6 bg-white/5 border border-white/10 p-5 rounded-xl">

        <p className="text-gray-400 text-sm">Contact</p>
        <p className="mb-3">{lead.contact}</p>

        <p className="text-gray-400 text-sm">Source</p>
        <p className="mb-3">{lead.source}</p>

        <p className="text-gray-400 text-sm">Status</p>

        <select
          value={status}
          onChange={(e) =>
            handleStatusChange(e.target.value as LeadStatus)
          }
          className="mt-1 bg-black/30 border border-white/10 p-2 rounded-md"
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>
        </select>

      </div>

      {/* Notes Section */}
      <div className="mt-6 bg-white/5 border border-white/10 p-5 rounded-xl">

        <h2 className="font-semibold mb-2">Notes</h2>

        <textarea
          className="w-full h-32 bg-black/30 border border-white/10 p-2 rounded-md"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write notes about this lead..."
        />

        <button
          onClick={handleNotesSave}
          className="mt-3 bg-[#2563EB] hover:bg-blue-500 transition px-4 py-2 rounded-lg text-sm"
        >
          Save Notes
        </button>

      </div>

    </AppShell>
  );
}
