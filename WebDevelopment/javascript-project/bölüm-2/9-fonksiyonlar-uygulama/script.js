// Uygulama:Fonksiyonlar

// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function display(word, times) {
  for (i = 0; i < times; i++) {
    console.log(word);
  }
}

display("alper", 2);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function calc_features(x, y) {
  let area = x * y;
  let circle = 2 * (x + y);

  return `Alanı ${area}, çevresi ${circle}`;
}

console.log(calc_features(4, 13));

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function divider(number) {
  let array = [];
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      array.push(i);
    }
  }
  return array;
}
console.log(divider(20));

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam() {
  let sonuc = 0;
  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }
  return sonuc;
}

console.log(toplam(10, 20, 45, 65, 40, 120));
