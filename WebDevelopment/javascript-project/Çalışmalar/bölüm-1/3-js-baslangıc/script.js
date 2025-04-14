const number = 15;
const div = document.querySelector(".container");

const arr = [4, 5, 6, 7, 8, 9, 11, 15, 16, 21];

const doubled = arr.map((sayi) =>
  sayi < 10 ? sayi * sayi : sayi * sayi * sayi
);

console.log(doubled);
