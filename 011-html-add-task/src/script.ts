import { tasks, genereteId, createSampleTasks } from "./seed";

const taskForm = document.getElementById("task-form") as HTMLFormElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;
const task = document.getElementById("task") as HTMLInputElement;
const exportBtn = document.getElementById("export-btn") as HTMLButtonElement;

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
    id: genereteId(),
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
