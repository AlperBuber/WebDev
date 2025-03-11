function createItemLi(text) {
  const li = document.createElement("li");

  li.className = "item";

  li.id = "last-child";

  li.innerText = text;

  const checkBox = document.createElement("input");

  checkBox.type = "checkbox";
  checkBox.className = "ch-1";

  li.appendChild(checkBox);
  document.getElementById("myList").appendChild(li);
}

function createItemLi2(text) {
  const li = document.createElement("li");

  li.innerHTML = `${text} <input type="checkbox" />`;

  document.getElementById("myList").appendChild(li);
}
createItemLi("item5");
createItemLi2("item6");
