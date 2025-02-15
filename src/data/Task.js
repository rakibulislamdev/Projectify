const initialData = [
  {
    id: crypto.randomUUID(),
    taskName: "Build Authentication",
    description: "Implement user login and signup",
    dueDate: "2025-02-16",
    category: "To-Do",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Integrate Payment Gateway",
    description: "Add Stripe for transactions",
    dueDate: "2025-07-16",
    category: "On-Progress",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Fix UI Bugs",
    description: "Resolve issues in mobile responsiveness",
    dueDate: "2025-05-16",
    category: "Done",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Optimize App Performance",
    description: "Improve load times and reduce lag",
    dueDate: "06-12-2025",
    category: "Revised",
  },
];

export { initialData };
