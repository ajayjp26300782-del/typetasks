// model.ts

// A status can only ever be one of these three exact strings.
export type TaskStatus = "todo" | "in-progress" | "done";

// Every Task must have this exact shape.
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}
let nextId = 1;

// Add a new task — always starts as "todo".
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = { id: nextId++, title, status: "todo" };
  return [...tasks, newTask];
}

// Mark a task done by id.
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((t) => (t.id === id ? { ...t, status: "done" as const } : t));
}

// Return only the tasks matching a given status.
export function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((t) => t.status === status);
}

// Custom operation: move a task one step forward in its lifecycle
// (todo -> in-progress -> done -> done).
const nextStatus: Record<TaskStatus, TaskStatus> = {
  todo: "in-progress",
  "in-progress": "done",
  done: "done",
};

export function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((t) => (t.id === id ? { ...t, status: nextStatus[t.status] } : t));
}

// Remove a task by id.
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((t) => t.id !== id);
}

// Count how many tasks have a given status.
export function countByStatus(tasks: Task[], status: TaskStatus): number {
  return filterByStatus(tasks, status).length;
}

// Make sure new ids never collide with tasks loaded from storage.
export function seedNextId(tasks: Task[]): void {
  nextId = tasks.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}
