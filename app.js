const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");
const approve = document.querySelector("#approve");
const reject = document.querySelector("#reject");
const head = document.querySelector("h1");

const pic = document.querySelector("img");

yesBtn.addEventListener("click", () => {
  head.innerText = "Princess";
  pic.src = "images/3.jpeg";
  approve.style.display = "block";
  reject.style.display = "none";
});

noBtn.addEventListener("click", () => {
  head.innerText = "literallyy??!";

  pic.src = "images/2.jpeg";
  approve.style.display = "none";
  reject.style.display = "block";
});
