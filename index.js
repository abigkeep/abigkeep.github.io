function updateClock() {
  const nowTime = new Date();
  const hours = nowTime.getHours().toString().padStart(2, 0);

  timi = hours > 12 ? "PM" : "AM";

  const mins = nowTime.getMinutes().toString().padStart(2, 0);
  const sec = nowTime.getSeconds().toString().padStart(2, 0);
  nowTimeString = `${hours}:${mins}:${sec} ${timi}`;
  document.getElementById("clock").textContent = nowTimeString;
}

updateClock();
setInterval(updateClock, 1000);
