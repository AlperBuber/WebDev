function UI() {
  this.quiz_box = document.getElementById("quiz-box");
  this.scoreBox = document.getElementById("score-box");
  this.body = document.querySelector("#quiz-box #body");
  this.time = document.querySelector(".time");
  this.timeText = document.querySelector(".time-text");
  this.timeSecond = document.querySelector(".time-second");
  this.correctIcon = '<i class="bi bi-check-circle"></i>';

  this.inCorrectIcon = '<i class="bi bi-x-circle"></i>';
  this.footer = document.querySelector("#footer");
  this.questionIndex = document.querySelector(".question-index");
  this.btnReplay = document.querySelector(".btn-replay");
  this.btnQuit = document.querySelector(".btn-quit");
  this.btnSoruGetir = document.getElementById("btnSoruGetir");
  this.btnStart = document.querySelector(".btn-start");
  this.startBody = document.querySelector(".start");
}

UI.prototype.soruGoster = function (soru) {
  this.body.innerHTML = "";
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.className = "question-title";
  title.textContent = soru.soruMetni;

  const optionList = document.createElement("div");
  optionList.classList.add("option-list");

  for (let [key, value] of Object.entries(soru.cevapSecenekleri)) {
    const option = document.createElement("div");
    option.classList.add("option");
    option.addEventListener("click", optionSelected);

    const span = document.createElement("span");
    span.textContent = key + ")" + value;
    option.appendChild(span);
    optionList.appendChild(option);

    cardBody.appendChild(title);
    cardBody.appendChild(optionList);

    this.body.appendChild(cardBody);
  }
};

UI.prototype.disableAllOption = function () {
  const options = document.querySelectorAll(".option");

  for (let option of options) {
    option.classList.add("disabled");
  }
};

UI.prototype.soruSayisiniGoster = function (soruSirasi, toplamSoru) {
  const etiket = `<span class ="badge text-bg-danger">${soruSirasi} / ${toplamSoru} </span>`;
  document.querySelector(".question-index").innerHTML = etiket;
};

UI.prototype.skoruGoster = function (dogruCevap, toplamSoru) {
  const scoreText = document.querySelector(".score-text");

  scoreText.textContent = `Toplam ${toplamSoru} soruda ${dogruCevap} dogru cevap verdiniz.`;
};
