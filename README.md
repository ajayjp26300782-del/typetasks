# TypeTasks (Part 1: Typed Logic Layer)

TypeTasks is a lightweight, type-safe task management blueprint built in TypeScript. This repository establishes the core data models, strict types, and robust operations required to ensure predictable state management before any UI or framework is introduced.

## 📁 Project Structure

```text
typetasks/
├── model.ts        # Core TypeScript interfaces, types, and operations
├── tsconfig.json   # TypeScript compiler configuration (strict mode enabled)
└── README.md       # Project documentation

```

## 🛠️ Data Model & Specifications (`model.ts`)

Part 1 implements a rigorous, type-safe foundation:

1. **`TaskStatus` Union Type**: Restricts task states to exact literals: `"todo" | "in-progress" | "done"`.
2. **`Task` Interface**: Defines the rigid shape of a single task entity (`id`, `title`, `status`).
3. **Core Typed Operations**:

- `addTask(tasks, title)`: Appends a new task with a unique ID and a default status of `"todo"`.
- `completeTask(tasks, id)`: Returns a new array setting the target task's status to `"done"`.
- `filterByStatus(tasks, status)`: Filters tasks securely using the strict `TaskStatus` union type.

4. **Custom Original Operation**:

- `advanceTask(tasks, id)`: Progressively cycles a task's status through its lifecycle (`todo` $\rightarrow$ `in-progress` $\rightarrow$ `done` $\rightarrow$ `done`).

---

## 🚀 Getting Started & Compilation

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Setup Instructions

1. **Clone the repository and initialize the project:**

```bash
mkdir typetasks && cd typetasks
npm init -y

```

2. **Initialize TypeScript configuration:**

```bash
npx tsc --init

```

_(Ensure `"strict": true` remains enabled in your generated `tsconfig.json`)._ 3. **Compile the project:**

```bash
npx tsc

```

_Verifies zero type errors across the entire codebase._

---

## 🧪 Type Safety Verification

The code is strictly guarded against invalid data mutations:

- Assigning an object missing the `status` property throws: `Property 'status' is missing in type...`
- Assigning a string to an ID (`id: "3"`) throws: `Type 'string' is not assignable to type 'number'`
- Passing invalid filters (`filterByStatus(tasks, "finished")`) throws: `Argument of type '"finished"' is not assignable to parameter of type 'TaskStatus'`

```

```
