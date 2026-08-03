type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const taskForm = document.getElementById("task-form") as HTMLFormElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;
const task = document.getElementById("task") as HTMLInputElement;
const exportBtn = document.getElementById("export-btn") as HTMLButtonElement;

let nextId: number = 1;
let tasks: Task[] = [];

function createSampleTasks(): void {
  const samples: Omit<Task, "id">[] = [
    { title: "Buy groceries for the week", completed: true },
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

function renderTasks(): void {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");

    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
    });

    span.textContent = task.title;

    label.append(checkbox, span);
    li.append(label);
    taskList.append(li);
  });
}

function addTask(title: string): void {
  tasks.push({
    id: nextId++,
    title: title,
    completed: false,
  });
  renderTasks();
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addTask(task.value);

  task.value = "";
  task.focus();
});

exportBtn.addEventListener("click", () => {
  console.log(tasks);
});

createSampleTasks();
renderTasks();
// console.log(tasks);
