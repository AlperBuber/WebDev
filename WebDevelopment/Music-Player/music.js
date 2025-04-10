class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("We Are Young", "FUN", "weryoung.jpg", "weryoung.mp3"),
  new Music("Danza Kuduro", "Don Omar", "danza.jfif", "danza.mp3"),
  new Music("Aşkın Olayım", "Simge Sağın", "askin.jfif", "askin.mp3"),
];
