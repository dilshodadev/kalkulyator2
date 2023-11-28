let input = "";
let result = document.getElementById("result");

function appendInput(value) {
  input += value;
  result.value = input;
  
}



function clearDisplay() {
  input = "";
  result.value = "";
}


function appendInput(value) {
  if (value === 'backspace') {
    input = input.slice(0, -1); 
  } else {
    input += value;
  }
  result.value = input;
}


function calculate() {
  try {
    input = eval(input);
    result.value = input;
  } catch (error) {
    result.value = "Error";
  }
}


let day = document.querySelector("#day");
let night = document.querySelector("#night");
let container = document.querySelector(".container");

night.addEventListener("click", () => {
  day.style.display = "block";
  night.style.display = "none";
  container.classList.add("darkPart")
});


day.addEventListener("click", () => {
  day.style.display = "none";
  night.style.display = "block";
  container.classList.remove("darkPart");
});



function isNightTime() {
  let date = new Date();
  let hours = date.getHours();
  return hours >= 19 || hours < 7; 
}

// Function to toggle day and night mode
function toggleMode() {
  if (isNightTime()) {
    day.style.display = "block";
    night.style.display = "none";
    container.classList.add("darkPart");
  } else {
    day.style.display = "none";
    night.style.display = "block";
    container.classList.remove("darkPart");
  }
}

// Initial mode based on current time
toggleMode();

// Event listeners for day and night icons
night.addEventListener("click", () => {
  day.style.display = "block";
  night.style.display = "none";
  container.classList.add("darkPart");
});

day.addEventListener("click", () => {
  day.style.display = "none";
  night.style.display = "block";
  container.classList.remove("darkPart");
});







