const shoppingList = document.querySelector(".shopping-list");

const shoppingForm = document.querySelector(".shopping-form");

const filterButtons = document.querySelectorAll(".filter-buttons button  ");

const clearButton = document.getElementById("delete-button");

document.addEventListener("DOMContentLoaded", function () {
  shoppingForm.addEventListener("submit", handleFormSubmit);
  loadItems();
  updateStates();

  for (let button of filterButtons) {
    button.addEventListener("click", filterSelection);
  }

  clearButton.addEventListener("click", deleteButton);
});

function saveToLS() {
  const listItems = shoppingList.querySelectorAll("li");
  const liste = [];

  for (let li of listItems) {
    const id = li.getAttribute("item-id");
    const name = li.querySelector(".item-name").textContent;
    const completed = li.hasAttribute("item-completed");

    liste.push({ id, name, completed });
  }

  localStorage.setItem("shoppingItems", JSON.stringify(liste));
}

function loadItems(e) {
  const items = JSON.parse(localStorage.getItem("shoppingItems")) || [];

  for (let item of items) {
    const li = createListItem(item);

    shoppingList.appendChild(li);
  }
}

function createListItem(item) {
  //   checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = item.completed;
  input.addEventListener("change", toggleCompleted);
  //   div
  const div = document.createElement("div");
  div.classList.add("item-name");
  div.innerText = `${item.name}`;
  div.addEventListener("click", openEditMode);
  div.addEventListener("blur", closeEditMode);
  div.addEventListener("keydown", preventEnter);
  //   icon
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-x", "text-danger", "delete-icon");
  icon.addEventListener("click", deleteItem);

  const li = document.createElement("li");
  li.setAttribute("item-id", item.id);
  li.className = "border rounded mb-1 p-3";
  li.toggleAttribute("item-completed", item.completed);

  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(icon);

  return li;
}

function addItem(input) {
  updateFilteredItems();
  const newItem = createListItem({
    id: generateId(),
    name: input.value,
    completed: false,
  });
  shoppingList.appendChild(newItem);
  input.value = "";
  updateFilteredItems();
  saveToLS();
  updateStates();
}
function generateId() {
  return Date.now().toString();
}

function handleFormSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("item_name");

  if (input.value.trim().length === 0) {
    alert("Ürün giriniz");
    return;
  }

  addItem(input);
}

function toggleCompleted(e) {
  const li = e.target.parentElement;

  li.toggleAttribute("item-completed", e.target.checked);
  updateFilteredItems();
  saveToLS();
}

function deleteItem(e) {
  const li = e.target.parentElement;

  shoppingList.removeChild(li);
  saveToLS();

  updateStates();
}

function openEditMode(e) {
  const li = e.target.parentElement;
  if (li.hasAttribute("item-completed") == false) {
    e.target.contentEditable = true;
  }
}

function closeEditMode(e) {
  e.target.contentEditable = false;
  saveToLS();
}

function preventEnter(e) {
  if (e.key == "Enter") {
    e.preventDefault();
    closeEditMode(e);
  }
}

function filterSelection(e) {
  for (let button of filterButtons) {
    button.classList.remove("btn-primary");
    button.classList.add("btn-dark");
    button.removeAttribute("active");
  }
  e.target.classList.replace("btn-dark", "btn-primary");
  e.target.setAttribute("active", "true");
  const filterType = e.target.getAttribute("item-filter");

  startFiltering(filterType);
}

function startFiltering(e) {
  const li = document.querySelectorAll(".shopping-list li");

  for (let item of li) {
    item.classList.remove("d-none");
    item.classList.remove("d-flex");

    const completed = item.hasAttribute("item-completed");
    if (e == "completed") {
      item.classList.toggle(completed ? "d-flex" : "d-none");
    } else if (e == "incomplete") {
      item.classList.toggle(completed ? "d-none" : "d-flex");
    } else {
      item.classList.toggle("d-flex");
    }
  }
}

function updateFilteredItems() {
  const activeFilter = document.querySelector(".filter-buttons .btn-primary");

  startFiltering(activeFilter.getAttribute("item-filter"));
}

function updateStates() {
  const isEmpty = shoppingList.querySelectorAll("li").length === 0;
  const filterDiv = document.querySelector(".filter-buttons");
  const alert = document.querySelector(".alert");

  alert.classList.toggle("d-none", !isEmpty);
  filterDiv.classList.toggle("d-none", isEmpty);
  clearButton.classList.toggle("d-none", isEmpty);
}

function clearAllItems() {
  shoppingList.innerHTML = "";
  localStorage.clear("shoppingItems");
  updateStates();
}

// butona bastı, aktif filter butonu kontrol edecek

// daha sonra eğer all ise inner html "" olacak

// completed döndüyse item-completed leri remove edecek
// shoppingList üzerinden

function deleteButton() {
  for (btn of filterButtons) {
    if (btn.getAttribute("active") === "true") {
      const filter = btn.getAttribute("item-filter");
      const allLi = shoppingList.querySelectorAll("li");
      if (filter == "completed") {
        for (let li of allLi) {
          if (li.hasAttribute("item-completed")) {
            console.log(li);
            shoppingList.removeChild(li);
          }
        }
      } else if (filter == "incomplete") {
        for (let li of allLi) {
          if (!li.hasAttribute("item-completed")) {
            console.log(li);
            shoppingList.removeChild(li);
          }
        }
      } else {
        shoppingList.innerHTML = "";
        localStorage.clear("shoppingItems");
        updateStates();
      }
    }
  }
}
