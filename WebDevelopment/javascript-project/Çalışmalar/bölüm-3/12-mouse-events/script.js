const div = document.querySelector("div");

function onClick() {
  console.log("Clicked");
}
function onDbClick() {
  console.log("dbClicked");
}

function ctMenu() {
  console.log("ctMenu");
}
function mouseenter() {
  console.log("mouseenter");
}

function onDrag() {
  console.log("onDrag");
}

const img = document.querySelector("img");
div.addEventListener("click", onClick);
div.addEventListener("dblclick", onDbClick);
div.addEventListener("contextmenu", ctMenu);
div.addEventListener("mouseenter", mouseenter);
img.addEventListener("drag", onDrag);
