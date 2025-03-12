const div = document.querySelectorAll("div");

function onClick(e) {
  // console.log(e);
  // console.log(e.target);
  // console.log(e.timeStamp );
  // console.log(e.clientX);
  // console.log(e.clientY); //bodye göre
  // console.log(e.offsetX);
  // console.log(e.offsetY); //dive göre x y bilgisi
}

for (let i of div) {
  i.addEventListener("click", onClick);
}

document.querySelector("a ").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("link tıklandı");
});
