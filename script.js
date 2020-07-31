const images = ["1.jpg", "2.jpg", "3.jpg"];
let cIndex = 0;
let backBtn = document.querySelector("#Back");
let nextBtn = document.querySelector("#next");
const img = document.querySelector("#picholder");
nextBtn.addEventListener("click", forwardPic);
function forwardPic() {
  cIndex = (cIndex + 1) % images.length;
  img.src = images[cIndex];
}

console.log("change bs");
const body = document.querySelector("body");
const butn = document.querySelector("#backgroundChanger");
butn.addEventListener("click", ChangeBackground);
function ChangeBackground() {
  // body.style.backgroundColor = "green";
  body.classList.toggle("colorChanger");
}
