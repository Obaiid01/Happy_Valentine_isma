const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const countdown = document.getElementById("countdown");
const countText = document.getElementById("countText");
const surprise = document.getElementById("surprise");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  countdown.classList.remove("hidden");

  let count = 3;
  countText.innerText = count;

  const timer = setInterval(() => {
    count--;
    if (count > 0) {
      countText.innerText = count;
    } else {
      clearInterval(timer);
      countdown.classList.add("hidden");
      surprise.classList.remove("hidden");
      music.play();
    }
  }, 1000);
});
