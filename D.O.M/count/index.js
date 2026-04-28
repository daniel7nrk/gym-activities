let timeLeft = 10; // state (data)

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

function updateUI() {
  timer.textContent = timeLeft;
}

let interval; // will store the timer loop

startBtn.addEventListener("click", () => {
  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateUI();
    } else {
      clearInterval(interval);
    }
  }, 1000);
});