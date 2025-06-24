
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  email?: string;
  linkedin?: string;
  scholar?: string;
  github?: string; // Added GitHub profile URL
  orcid?: string; // Added ORCID profile URL
  interests?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  link?: string;
  abstract?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  description: string;
  status: 'Ongoing' | 'Completed' | 'Proposed' | 'Funded'; // Added 'Funded'
  tags?: string[];
  principalInvestigator?: string;
  relatedPublications?: string[]; // IDs of publications
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  imageUrl?: string;
  content: string; // Full content, can be markdown-like string
  author?: string;
}

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Repository {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  tags: string[];
  language?: string; // Main language
  imageUrl?: string; // Optional image for the card
}
