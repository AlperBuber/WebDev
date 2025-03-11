let sonuc;

sonuc = document.getElementsByClassName("itemm");
// const group1 = document.getElementById("group2");
// const items = group1.getElementsByClassName("itemm");

const items = document.querySelectorAll("#group1 .itemm");
console.log(items);

for (let item of items) {
  item.style.color = "red";
  item.innerText = "Eleman";
}
