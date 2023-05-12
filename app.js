const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");
const clearBtn = document.getElementById("clear-btn");

addBtn.addEventListener("click", addTask);
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
});
clearBtn.addEventListener("click", clearTasks);

function addTask() {
  const inputValue = input.value.trim();

  if (inputValue !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = inputValue;
    li.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      list.removeChild(li);
    });
    li.appendChild(deleteBtn);

    list.appendChild(li);
    input.value = "";
  }
}
function clearTasks() {
  list.innerHTML = "";
}
