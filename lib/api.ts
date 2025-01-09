const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Partners
export async function getPartners() {
  const response = await fetch(`${API_URL}/partners`);
  if (!response.ok) throw new Error('Failed to fetch partners');
  return response.json();
}

// Services
export async function getServices() {
  const response = await fetch(`${API_URL}/services`);
  if (!response.ok) throw new Error('Failed to fetch services');
  return response.json();
}

// Projects
export async function getProjects(params?: { category?: string; featured?: boolean }) {
  const queryParams = new URLSearchParams();
  if (params?.category) queryParams.append('category', params.category);
  if (params?.featured !== undefined) queryParams.append('featured', params.featured.toString());
  
  const response = await fetch(`${API_URL}/projects?${queryParams}`);
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
}

// Team Members
export async function getTeamMembers() {
  const response = await fetch(`${API_URL}/team`);
  if (!response.ok) throw new Error('Failed to fetch team members');
  return response.json();
}

// Works
export async function getWorks() {
  const response = await fetch(`${API_URL}/works`);
  if (!response.ok) throw new Error('Failed to fetch works');
  return response.json();
}

export async function getWork(id: string) {
  const response = await fetch(`${API_URL}/works/${id}`);
  if (!response.ok) throw new Error('Failed to fetch work');
  return response.json();
}

// Generic fetch function for single items
export async function getItem(endpoint: string, id: string) {
  const response = await fetch(`${API_URL}/${endpoint}/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return response.json();
} 