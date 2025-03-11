// https://www.linkedin.com/in/alper-buber-781379231/

let url = "https://www.linkedin.com/in/alper-buber-781379231";
let kursAdi = "Komple uygulamalı Web geliştirme eğitimi";

// 1. soru

let confirm = url.length;
console.log(confirm);

// 2.soru

confirm = kursAdi.split(" ").length;
console.log(confirm);
// 3.soru

confirm = url.slice(0, 5);

console.log((confirm = "https"));

// 4.soru

confirm = kursAdi.indexOf("kursu");
console.log(confirm == -1);

// 5.soru

let set_kursadi = kursAdi.replaceAll(" ", "-");
set_kursadi = set_kursadi.toLowerCase();
set_kursadi = set_kursadi
  .replaceAll("ş", "s")
  .replaceAll("ğ", "g")
  .replaceAll("ı", "i");
console.log(set_kursadi);
let newLink = `${url}/${set_kursadi} `;

console.log(newLink);
