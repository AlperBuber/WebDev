function Player(name) {
  this.name = name;
  this.score = 0;

  this.start = function () {
    return `${this.name} adlı oyuncu oyuna başladı.`;
  };
  this.stop = function () {
    return `${this.name} adlı oyuncu oyundan çıktı.`;
  };
  this.pause = function () {
    return `${this.name} adlı oyuncu oyunu durdurdu.`;
  };
  this.add_score = function (score) {
    this.score = score;
  };
  this.show_score = function () {
    return `${this.name} adlı oyuncunun puanı ${this.score}.`;
  };
}

// object

const player1 = new Player("Alper");
const player2 = new Player("Yeliz");
const player3 = new Player("Efe");

console.log(player1.start());
console.log(player1.stop());
console.log(player1.pause());
console.log(player1.add_score(50));
console.log(player1.show_score());
