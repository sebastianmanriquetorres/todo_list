const API = "http://localhost:3000/tasks"; // 🔥 se cambiará a Render después

async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = `${task.title} ${task.completed ? "✔️" : ""}`;
    list.appendChild(li);
  });
}

async function addTask() {
  const title = document.getElementById("taskInput").value;
  if (!title.trim()) return;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  document.getElementById("taskInput").value = "";
  loadTasks();
}

// Cargar cuando abra la página
loadTasks();
