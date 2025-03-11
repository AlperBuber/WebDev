// Uygulama: Döngüler

let sayilar = [3, 5, 7, 8, 12, 23, 45, 65];

// 1- sayilar dizisindeki her bir sayının karesini yazdırınız.
let sonuc;

for (let index = 0; index < sayilar.length; index++) {
  sonuc = sayilar[index] * sayilar[index];
  console.log(sonuc);
}

// 2- sayilar listesindeki hangi sayılar 5'in katıdır?
for (let index = 0; index < sayilar.length; index++) {
  if (sayilar[index] % 5 == 0) {
    console.log(sayilar[index]);
  }
}

// 3- 50-100 arasındaki sayıları azalan şekilde yazdırınız.

for (let i = 100; i > 49; i--) {
  console.log(i);
}

let urunler = [
  "iphone 16",
  "samsung s25",
  "iphone 17",
  "samsung s26",
  "samsung s23",
];
urunler.toupper;
// 4- urunler listesindeki tüm ürünleri büyük harfe çeviriniz.

for (let i = 0; i < urunler.length; i++) {
  console.log(urunler[i].toUpperCase());
}

// 5- urunler listesinde içinde samsung kelimesi geçen kaç kelime vardır?
let total = 0;
for (let i = 0; i < urunler.length; i++) {
  if (urunler[i].includes("samsung")) {
    total++;
  }
}
console.log(total);

let ogrenciler = [
  { ad: "Yiğit", soyad: "Bilgi", notlar: [60, 70, 80, 90] },
  { ad: "Ada", soyad: "Bilgi", notlar: [80, 50, 75] },
  { ad: "Çınar", soyad: "Turan", notlar: [70, 70, 80] },
];

// 6-  ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumu yazdırınız.
let total_ort = 0;
for (let i = 0; i < ogrenciler.length; i++) {
  let ortalama = 0;
  let sum = 0;
  for (let k = 0; k < ogrenciler[i].notlar.length; k++) {
    sum += ogrenciler[i].notlar[k];
  }
  ortalama = sum / ogrenciler[i].notlar.length;
  total_ort += ortalama;

  console.log(
    `${ogrenciler[i].ad} ${ogrenciler[i].soyad} isimli öğrencinin not ortalaması ${ortalama}`
  );
}

// 7- Tüm öğrencilerin not ortalaması nedir?
console.log("Tüm öğrencilerin ortalaması:... " + total_ort / ogrenciler.length);
