let meyve = ["kiraz", "karpuz", "erik", "üzüm"];

// soru1

let sonuc;

sonuc = meyve.length;
console.log(sonuc);

// soru2

sonuc = `${meyve[0]} ${meyve[1]}`;
console.log(sonuc);

// soru3
sonuc = meyve.indexOf("kavun");
console.log(sonuc == -1);

// soru4

sonuc = meyve.push("çilek");
sonuc = meyve;

console.log(sonuc);

// soru5

meyve.pop();
meyve.pop();
console.log(meyve);

// soru6

let ogrenci1 = ["yiğit", "bilgi", "2010", [60, 90, 80]];
let ogrenci2 = ["ada", "bilgi", "2012", ["70", "80", "80"]];
let ogrenci3 = ["çınar", "turan", "2017", ["60", "50", "80"]];

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];

console.log(2025 - ogrenciler[0][2]);
console.log(2025 - ogrenciler[1][2]);
console.log(2025 - ogrenciler[2][2]);
console.log(ogrenciler[0][3][0]);
console.log(
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3
);
