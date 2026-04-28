// Get elements
const timerDisplay = document.getElementById("timer");
const btnContainer = document.getElementById("btnContainer");

const add5Btn = document.getElementById("add5");
const add10aBtn = document.getElementById("add10");
const add10bBtn = document.getElementById("add15");

// Initial time
let timeLeft = 10;

// Update UI
function updateDisplay() {
  timerDisplay.textContent = timeLeft;
}

// Add time function
function addTime(seconds) {
  if (timeLeft > 0) {
    timeLeft += seconds;
    updateDisplay();
  }
}

// Button events
add5Btn.addEventListener("click", () => addTime(5));
add10aBtn.addEventListener("click", () => addTime(10));
add10bBtn.addEventListener("click", () => addTime(10));

// Countdown logic

function startCountdown() {
  const interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
    //   clearInterval(interval);
      timerDisplay.textContent = "0";
    //   btnContainer.style.display = "none"; // hide buttons
    }
  }, 1000);
}

// Start automatically
updateDisplay();
startCountdown();