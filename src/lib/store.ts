export type LeadStatus = "New" | "Contacted" | "Won" | "Lost";

export interface Lead {
  id: string;
  name: string;
  contact: string;
  source: string;
  status: LeadStatus;
  notes?: string;
}

export let leads: Lead[] = [
  {
    id: "1",
    name: "John Doe",
    contact: "johndoe@email.com",
    source: "Instagram",
    status: "New",
    notes: "Interested in pricing",
  },
  {
    id: "2",
    name: "Sarah Mark",
    contact: "sarah@email.com",
    source: "WhatsApp",
    status: "Won",
    notes: "Closed deal last week",
  },
];

export function addLead(lead: Lead) {
  leads.push(lead);
}

export function updateLeadStatus(id: string, status: LeadStatus) {
  leads = leads.map((lead) =>
    lead.id === id ? { ...lead, status } : lead
  );
}

export function updateLeadNotes(id: string, notes: string) {
  leads = leads.map((lead) =>
    lead.id === id ? { ...lead, notes } : lead
  );
}
