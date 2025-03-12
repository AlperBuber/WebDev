function clearHeader() {
  const h1 = document.querySelector("h1");
  h1.remove();
}
clearHeader();

function removeItem1() {
  const ul = document.querySelector("#myList");
  const item = document.querySelector("li:first-child");

  ul.removeChild(item);
}

// removeItem1();

function removeItem(number) {
  const ul = document.querySelector("#myList");
  const item = document.querySelector(`li:nth-child(${number})`);

  ul.removeChild(item);
}

removeItem(1);

function removeAll() {
  // const ul = document.querySelector("ul");
  // ul.innerHTML = "";

  // 2.yontem
  const ul = document.querySelector("ul");
  while (ul.firstChild) {
    // ul.removeChild(ul.firstChild);

    ul.firstChild.remove();
  }
}
removeAll();
