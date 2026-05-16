"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import AppShell from "@/components/dashboard/AppShell";

import {
  leads as initialLeads,
  addLead,
  updateLeadStatus,
  Lead,
  LeadStatus,
} from "@/lib/store";

export default function LeadsPage() {
  const [leads, setLeads] = useState(initialLeads);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [source, setSource] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<
    "All" | LeadStatus
  >("All");

  const handleAddLead = () => {
    if (!name || !contact) return;

    const newLead: Lead = {
      id: Date.now().toString(),
      name,
      contact,
      source: source || "Manual",
      status: "New",
    };

    addLead(newLead);

    setLeads([...leads, newLead]);

    setName("");
    setContact("");
    setSource("");
  };

  const handleStatusChange = (
    id: string,
    status: LeadStatus
  ) => {
    updateLeadStatus(id, status);

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id
          ? { ...lead, status }
          : lead
      )
    );
  };

  // FILTER + SEARCH LOGIC
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        lead.contact
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All"
          ? true
          : lead.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [leads, search, filter]);

  return (
    <AppShell>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Lead Pipeline
        </h1>
      </div>

      {/* Add Lead Form */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">

        <input
          placeholder="Name"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Contact"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          placeholder="Source"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <button
          onClick={handleAddLead}
          className="bg-[#2563EB] hover:bg-blue-500 transition px-4 py-2 rounded-lg"
        >
          + Add Lead
        </button>

      </div>

      {/* Search + Filters */}
      <div className="mt-6 flex flex-col md:flex-row gap-3">

        {/* Search */}
        <input
          placeholder="Search leads..."
          className="bg-white/5 border border-white/10 p-2 rounded-lg flex-1"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) =>
            setFilter(
              e.target.value as
                | "All"
                | LeadStatus
            )
          }
          className="bg-black/30 border border-white/10 p-2 rounded-lg"
        >
          <option value="All">All Leads</option>
          <option value="New">New</option>
          <option value="Contacted">
            Contacted
          </option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>
        </select>

      </div>

      {/* Leads Table */}
      <div className="mt-6 bg-white/5 border border-white/10 rounded-xl overflow-hidden">

        {/* Table Header */}
        <div className="grid grid-cols-6 text-gray-400 text-sm p-4 border-b border-white/10">
          <span>Name</span>
          <span>Contact</span>
          <span>Source</span>
          <span>Status</span>
          <span>Change</span>
          <span>Action</span>
        </div>

        {/* Dynamic Rows */}
        {filteredLeads.map((lead) => (
          <div
            key={lead.id}
            className="grid grid-cols-6 p-4 items-center text-sm border-t border-white/10"
          >
            <span>{lead.name}</span>

            <span>{lead.contact}</span>

            <span>{lead.source}</span>

            {/* Status Badge */}
            <span>
              <span
                className={`px-2 py-1 rounded-md text-xs ${
                  lead.status === "New"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : lead.status === "Contacted"
                    ? "bg-blue-500/20 text-blue-400"
                    : lead.status === "Won"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {lead.status}
              </span>
            </span>

            {/* Status Dropdown */}
            <select
              value={lead.status}
              onChange={(e) =>
                handleStatusChange(
                  lead.id,
                  e.target.value as LeadStatus
                )
              }
              className="bg-black/30 border border-white/10 p-1 rounded-md text-sm"
            >
              <option value="New">New</option>
              <option value="Contacted">
                Contacted
              </option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>

            {/* View Link */}
            <Link
              href={`/leads/${lead.id}`}
              className="text-blue-400 hover:text-blue-300"
            >
              View
            </Link>
          </div>
        ))}

        {/* Empty State */}
        {filteredLeads.length === 0 && (
          <div className="p-6 text-center text-gray-400">
            No matching leads found
          </div>
        )}

      </div>

    </AppShell>
  );
              }    setSource("");
  };

  const handleStatusChange = (id: string, status: LeadStatus) => {
    updateLeadStatus(id, status);

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id ? { ...lead, status } : lead
      )
    );
  };

  return (
    <AppShell>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lead Pipeline</h1>
      </div>

      {/* Add Lead Form */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">

        <input
          placeholder="Name"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Contact"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          placeholder="Source (Instagram, WhatsApp...)"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <button
          onClick={handleAddLead}
          className="bg-[#2563EB] hover:bg-blue-500 transition px-4 py-2 rounded-lg"
        >
          + Add Lead
        </button>

      </div>

      {/* Leads Table */}
      <div className="mt-6 bg-white/5 border border-white/10 rounded-xl overflow-hidden">

        {/* Table Header */}
        <div className="grid grid-cols-6 text-gray-400 text-sm p-4 border-b border-white/10">
          <span>Name</span>
          <span>Contact</span>
          <span>Source</span>
          <span>Status</span>
          <span>Change</span>
          <span>Action</span>
        </div>

        {/* Lead Rows */}
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="grid grid-cols-6 p-4 items-center text-sm border-t border-white/10"
          >
            <span>{lead.name}</span>
            <span>{lead.contact}</span>
            <span>{lead.source}</span>

            {/* Status Badge */}
            <span>
              <span
                className={`px-2 py-1 rounded-md text-xs ${
                  lead.status === "New"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : lead.status === "Contacted"
                    ? "bg-blue-500/20 text-blue-400"
                    : lead.status === "Won"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {lead.status}
              </span>
            </span>

            {/* Status Dropdown */}
            <select
              value={lead.status}
              onChange={(e) =>
                handleStatusChange(
                  lead.id,
                  e.target.value as LeadStatus
                )
              }
              className="bg-black/30 border border-white/10 p-1 rounded-md text-sm"
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>

            {/* View Lead Page */}
            <Link
              href={`/leads/${lead.id}`}
              className="text-blue-400 hover:text-blue-300"
            >
              View
            </Link>
          </div>
        ))}

      </div>

    </AppShell>
  );
        }      {/* Add Lead */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">

        <input
          placeholder="Name"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Contact"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          placeholder="Source"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <button
          onClick={handleAddLead}
          className="bg-[#2563EB] hover:bg-blue-500 transition px-4 py-2 rounded-lg"
        >
          + Add Lead
        </button>

      </div>

      {/* Table */}
      <div className="mt-6 bg-white/5 border border-white/10 rounded-xl overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-6 text-gray-400 text-sm p-4 border-b border-white/10">
          <span>Name</span>
          <span>Contact</span>
          <span>Source</span>
          <span>Status</span>
          <span>Change</span>
          <span>Action</span>
        </div>

        {/* Rows */}
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="grid grid-cols-6 p-4 items-center text-sm border-t border-white/10"
          >
            <span>{lead.name}</span>
            <span>{lead.contact}</span>
            <span>{lead.source}</span>

            {/* Status badge */}
            <span>
              <span
                className={`px-2 py-1 rounded-md text-xs ${
                  lead.status === "New"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : lead.status === "Contacted"
                    ? "bg-blue-500/20 text-blue-400"
                    : lead.status === "Won"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {lead.status}
              </span>
            </span>

            {/* Status changer */}
            <select
              value={lead.status}
              onChange={(e) =>
                handleStatusChange(
                  lead.id,
                  e.target.value as LeadStatus
                )
              }
              className="bg-black/30 border border-white/10 p-1 rounded-md text-sm"
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>

            <Link href={`/leads/${lead.id}`} className="text-blue-400">
  View
</Link>
          </div>
        ))}

      </div>

    </AppShell>
  );
}      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Leads</h1>
      </div>

      {/* Add Lead Form */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">

        <input
          placeholder="Name"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Contact"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          placeholder="Source (Instagram, WhatsApp...)"
          className="bg-white/5 border border-white/10 p-2 rounded-lg"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <button
          onClick={handleAddLead}
          className="bg-[#2563EB] hover:bg-blue-500 transition px-4 py-2 rounded-lg"
        >
          + Add Lead
        </button>

      </div>

      {/* Leads Table */}
      <div className="mt-6 bg-white/5 border border-white/10 rounded-xl overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-5 text-gray-400 text-sm p-4 border-b border-white/10">
          <span>Name</span>
          <span>Contact</span>
          <span>Source</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {/* Dynamic Rows */}
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="grid grid-cols-5 p-4 items-center text-sm border-t border-white/10"
          >
            <span>{lead.name}</span>
            <span>{lead.contact}</span>
            <span>{lead.source}</span>

            <span>
              <span
                className={`px-2 py-1 rounded-md text-xs ${
                  lead.status === "New"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : lead.status === "Won"
                    ? "bg-green-500/20 text-green-400"
                    : lead.status === "Lost"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}
              >
                {lead.status}
              </span>
            </span>

            <span className="text-blue-400 cursor-pointer">
              View
            </span>
          </div>
        ))}

      </div>

    </AppShell>
  );
}
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
