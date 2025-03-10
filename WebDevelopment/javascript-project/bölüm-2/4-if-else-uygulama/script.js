// soru1
let number = 62;

if (number > 50 && number < 100) {
  console.log("sayı 50-100 arası");
} else {
  console.log("sayı 50-100 arası değil");
}

// soru2

if (number % 2 == 0 && number > 0) {
  console.log("sayı çifttir");
} else {
  console.log("tek veya pozitif değil");
}

// soru4

let vize = 100;

let final = 49;

let ortalama = vize * 0.4 + final * 0.6;

if ((ortalama > 50 && final > 49) || final > 69) {
  console.log("Dersten geçti");
} else {
  console.log("Dersten kaldı");
}
