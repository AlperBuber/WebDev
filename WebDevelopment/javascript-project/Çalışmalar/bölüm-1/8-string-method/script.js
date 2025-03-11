var kursAdi = "Komple uygulamalı Web geliştirme eğitimi";
var kursAdi2 = "Komple uygulamalı Web geliştirme kursu";
var sonuc;

sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.toLowerCase();

sonuc = kursAdi.length;
sonuc = kursAdi.substring(7, 17);

sonuc = kursAdi.replace(kursAdi, kursAdi2);
sonuc = kursAdi.trim();
sonuc = kursAdi.indexOf("Web");
sonuc = kursAdi.slice(sonuc);
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[2];
console.log(sonuc);
