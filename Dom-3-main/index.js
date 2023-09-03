const myForm = document.querySelector("form");
const inpTask = document.getElementById("task");
const prioritySelect = document.getElementById("priority");
const tbody = document.querySelector("tbody");

let allTasks = [];

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    input: inpTask.value,
    priority: prioritySelect.value,
  };

  allTasks.push(data);

  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");

  td1.innerText = data.input;
  td2.innerText = data.priority;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);

  inpTask.value = "";
  prioritySelect.value = "";
});
