function replaceItem1() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Güncellenmiş Eleman";

  firstItem.replaceWith(li);
}

// replaceItem1();

function replaceItem2() {
  const secItem = document.querySelector("li:nth-child(2)");

  secItem.innerHTML = "güncelle";
  secItem.outerHTML = "<li>değiştir</li>";
}

// replaceItem2();

function replaceItemAll() {
  const items = document.querySelectorAll("li");
  for (let item of items) {
    item.innerHTML = "Değişiyorlar";
  }
}

replaceItemAll();
