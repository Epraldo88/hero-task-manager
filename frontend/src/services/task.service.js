const BASE_URL = "http://localhost:5000/api/tasks";

export const getTasks = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  const result = await res.json();
  return result.data;
};

export const createTask = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create task");
  return await res.json();
};

export const updateTask = async ({ id, data }) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update task");
  const result = await res.json();
  return result.data;
};

export const deleteTask = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete task");
  const result = await res.json();
  return result.data;
};

export const getTaskDetail = async (id) => {
  const res = await fetch(`${BASE_URL}/detail/${id}`);
  if (!res.ok) throw new Error("Failed to get task detail");
  const result = await res.json();
  return result.data?.logs;
};
