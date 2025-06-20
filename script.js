// script.js
function showTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format with leading zero if needed
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

// Run showTime every second
setInterval(showTime, 1000);

// Show time immediately on load
showTime();