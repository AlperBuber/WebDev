const soruListesi = [
  new Soru(
    "1-Hangisi Javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm" },
    "d"
  ),
  new Soru(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    { a: "css", b: "html", c: "javascipt", d: "sql" },
    "d"
  ),
  new Soru(
    "3-Hangisi backend kapsamında değerlendirilir?",
    { a: "node.js", b: "typescript", c: "angular", d: "react" },
    "a"
  ),
  new Soru(
    "4-Hangisi javascript programlama dilini kullanmaz?",
    { a: "react", b: "angular", c: "vuejs", d: "asp.net" },
    "d"
  ),
];

const quiz = new Quiz(soruListesi);
const ui = new UI();

ui.btnStart.addEventListener("click", function () {
  startTimer(10);
  ui.startBody.classList.toggle("d-none");
  ui.quiz_box.classList.replace("d-none", "d-flex");
  ui.btnSoruGetir.click();
});

document.getElementById("btnSoruGetir").addEventListener("click", function () {
  if (soruListesi.length !== quiz.soruIndex) {
    startTimer(10);
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, soruListesi.length);
  } else {
    console.log("quiz-bitti");
    ui.scoreBox.classList.replace("d-none", "d-flex");
    ui.quiz_box.classList.replace("d-flex", "d-none");
    ui.skoruGoster(quiz.dogruCevapSayisi, soruListesi.length);
  }
});

function optionSelected(e) {
  clearInterval(counter);
  cevap = e.target.textContent[0];
  const soru = quiz.soruGetir();
  if (soru.cevabiKontrolEt(cevap)) {
    e.target.classList.add("correct", "d-flex", "justify-content-between");
    e.target.insertAdjacentHTML("beforeend", ui.correctIcon);

    quiz.dogruCevapSayisi += 1;
  } else {
    e.target.classList.add("inCorrect", "d-flex", "justify-content-between");
    e.target.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }

  ui.disableAllOption();
  quiz.soruIndex += 1;
}

ui.btnQuit.addEventListener("click", function () {
  window.location.reload();
});
ui.btnReplay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  ui.quiz_box.classList.replace("d-none", "d-flex");
  ui.scoreBox.classList.replace("d-flex", "d-none");
  ui.btnSoruGetir.click();
});
let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    console.log(time);
    if (time < 0) {
      console.log("sa");
      clearInterval(counter);
      ui.timeText.textContent = "Süre Bitti";
      ui.disableAllOption();
      quiz.soruIndex += 1;
      return;
    } else {
      ui.timeText.textContent = "Kalan Süre";
      ui.timeSecond.textContent = time;
      time--;
      console.log(time);
    }
  }
}
