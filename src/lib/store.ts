export type LeadStatus = "New" | "Contacted" | "Won" | "Lost";

export interface Lead {
  id: string;
  name: string;
  contact: string;
  source: string;
  status: LeadStatus;
  notes?: string;
}

export interface Sale {
  id: string;
  leadId: string;
  leadName: string;
  amount: number;
  date: string;
}

export let leads: Lead[] = [
  {
    id: "1",
    name: "John Doe",
    contact: "johndoe@email.com",
    source: "Instagram",
    status: "Won",
  },
  {
    id: "2",
    name: "Sarah Mark",
    contact: "sarah@email.com",
    source: "WhatsApp",
    status: "Contacted",
  },
];

export let sales: Sale[] = [
  {
    id: "s1",
    leadId: "1",
    leadName: "John Doe",
    amount: 200,
    date: "2026-01-01",
  },
];

export function addSale(sale: Sale) {
  sales.push(sale);
}    lead.id === id ? { ...lead, status } : lead
  );
}

export function updateLeadNotes(id: string, notes: string) {
  leads = leads.map((lead) =>
    lead.id === id ? { ...lead, notes } : lead
  );
}
