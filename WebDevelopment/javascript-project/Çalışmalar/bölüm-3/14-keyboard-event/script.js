const input = document.getElementById("text");

// function onKeyPress() {
//   console.log("key pressed");
// }
// function onKeyUp() {
//   console.log("key up");
// }
function onKeyDown(e) {
  // console.log(e);
  // console.log(e.key);

  // document.querySelector("h2").innerText = e.key;
  // if (e.key === "Enter") {
  //   alert("Enter a tıklandı");
  // }

  // if (e.repeat) {
  //   alert(`${e.key} basılı kaldı`);
  // }

  if (e.ctrlKey && e.key === "v") {
    alert("ctrl v yapmak yasaktır");
  }
}

// input.addEventListener("keypress", onKeyPress);
// input.addEventListener("keyup", onKeyUp);
input.addEventListener("keydown", onKeyDown);
