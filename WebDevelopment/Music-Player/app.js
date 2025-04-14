const container = document.querySelector(".container");
const image = document.getElementById("music-image");
const audio = document.querySelector("audio");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const duration = document.getElementById("duration");
const currentTime = document.getElementById("current-time");

const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
});

function displayMusic(music) {
  title.innerText = music.title;
  singer.innerText = music.singer;
  image.src = "img/" + music.img;
  audio.src = "mp3/" + music.file;
  play.classList.replace("fa-pause", "fa-play");
}

play.addEventListener("click", () => {
  audio.play();

  if (play.classList.contains("fa-play")) {
    audio.play();
  } else {
    audio.pause();
  }
  play.classList.toggle("fa-play");
  play.classList.toggle("fa-pause");
});

next.addEventListener("click", function () {
  player.next();
  music = player.getMusic();
  displayMusic(music);
});

prev.addEventListener("click", function () {
  player.prev();
  music = player.getMusic();
  displayMusic(music);
});

audio.addEventListener("loadedmetadata", function () {
  const dakika = Math.floor(audio.duration / 60);
  const saniye = Math.floor(audio.duration % 60);
  const guncellenenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`;
  duration.textContent = `${dakika}:${guncellenenSaniye}`;
});
