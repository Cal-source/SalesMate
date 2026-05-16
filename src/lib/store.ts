export type LeadStatus = "New" | "Contacted" | "Won" | "Lost";

export interface Lead {
  id: string;
  name: string;
  contact: string;
  source: string;
  status: LeadStatus;
}

export let leads: Lead[] = [
  {
    id: "1",
    name: "John Doe",
    contact: "johndoe@email.com",
    source: "Instagram",
    status: "New",
  },
  {
    id: "2",
    name: "Sarah Mark",
    contact: "sarah@email.com",
    source: "WhatsApp",
    status: "Won",
  },
];

export function addLead(lead: Lead) {
  leads.push(lead);
}
