function insertElements() {
  const ul = document.querySelector("#myList");
  const h1 = document.createElement("h1");
  h1.innerText = "Sayfa Başlığı";

  ul.insertAdjacentElement("beforebegin", h1);
}

// insertElements();

function insertText() {
  const li = document.querySelector("li:first-child");
  li.insertAdjacentText("beforeend", " Sona eklendi");
}

// insertText();

function insertHtml() {
  const li = document.querySelector("li:last-child");
  li.insertAdjacentHTML("beforeend", "<input type='checkbox' />");
}

// insertHtml();

function insertBefore() {
  const ul = document.querySelector("#myList");

  const li = document.createElement("li");

  li.textContent = "insertBefore";

  const li2 = document.querySelector("li:nth-child(2)");

  ul.insertBefore(li, li2);
}

insertBefore();
