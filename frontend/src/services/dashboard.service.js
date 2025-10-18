const BASE_URL = "http://localhost:5000/api/dashboard";

export const getDashboardSummary = async () => {
  const res = await fetch(`${BASE_URL}/summary`);
  if (!res.ok) throw new Error("Failed to fetch dashboard summary");
  const result = await res.json();
  return result.data;
};

export const getStatusSummary = async () => {
  const res = await fetch(`${BASE_URL}/status-summary`);
  if (!res.ok) throw new Error("Failed to fetch status summary");
  const result = await res.json();
  return result.data;
};

export const getPerformanceStatusSummary = async () => {
  const res = await fetch(`${BASE_URL}/performance-summary`);
  if (!res.ok) throw new Error("Failed to fetch performance summary");
  const result = await res.json();
  return result.data;
};

export const getRecentActivities = async () => {
  const res = await fetch(`${BASE_URL}/recent-activites`);
  if (!res.ok) throw new Error("Failed to fetch recent activites");
  const result = await res.json();
  return result.data;
};
