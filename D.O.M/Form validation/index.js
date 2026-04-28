const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const error = document.getElementById("error");

function validate() {
  const value1 = Number(num1.value);
  const value2 = Number(num2.value);

  if (value1 === value2) {
    error.textContent = "";
  } else if (value1 > value2) {
    error.textContent = "First number is larger";
  } else {
    error.textContent = "Second number is larger";
  }
}

// Listen while typing
num1.addEventListener("input", validate);
num2.addEventListener("input", validate);

// Run once at start
validate();