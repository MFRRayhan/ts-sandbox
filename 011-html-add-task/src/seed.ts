export type Task = {
  id: number;
  title: string;
  completed: boolean;
};
export let nextId: number = 1;
export let tasks: Task[] = [];

export function genereteId(): number {
  return nextId++;
}

export function createSampleTasks(): void {
  const samples: Omit<Task, "id">[] = [
    { title: "Buy groceries for the month", completed: true },
    { title: "Pay the electricity bill", completed: false },
    { title: "Finish the TypeScript assignment", completed: false },
    { title: "Review JavaScript array methods", completed: false },
    { title: "Book a dentist appointment", completed: false },
    { title: "Call Mom", completed: true },
    { title: "Go for a 30-minute walk", completed: false },
    { title: "Clean the bedroom", completed: false },
    { title: "Reply to important emails", completed: true },
    { title: "Prepare tomorrow's lunch", completed: false },
  ];

  samples.forEach((sample) => {
    tasks.push({
      id: nextId++,
      title: sample.title,
      completed: sample.completed,
    });
  });
}
