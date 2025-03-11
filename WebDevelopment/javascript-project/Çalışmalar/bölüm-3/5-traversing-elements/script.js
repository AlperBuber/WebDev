let sonuc;

const parent = document.querySelector(".parent");

sonuc = parent.children;

parent.children[1].style.color = "red";
parent.firstElementChild.innerText = "Eleman";
parent.lastElementChild.innerText = "last";

const child = document.querySelector(".child");

sonuc = child;

sonuc = child.parentElement;

sonuc = child.nextElementSibling;

sonuc.style.color = "purple";

sonuc.nextElementSibling.style.color = "#435454";

console.log(sonuc);
