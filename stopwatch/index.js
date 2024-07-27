let isStart = false;
let intervalTime = 0;
let timer = null;
let startTime = 0;
const display = document.getElementById("display");
const startButton = document.getElementById("Start");

//开始
function Start() {
  if (!isStart) {
    startTime = Date.now() - intervalTime;
    // console.log(startTime);
    timer = setInterval(upDate, 10);
    isStart = true;
    startButton.textContent = "开始";
  }
}

//暂停
function Suspend() {
  if (timer) clearInterval(timer);
  isStart = false;
  !isStart && display.textContent !== `00:00:00:00`
    ? (startButton.textContent = "继续")
    : (startButton.textContent = "开始");
  console.log(intervalTime);
}

//清空
function Clear() {
  if (timer) clearInterval(timer);
  display.textContent = `00:00:00:00`;
  isStart = false;
  intervalTime = 0;
  timer = null;
  startTime = 0;
  console.log(intervalTime);
  startButton.textContent = "开始";
}

//更新计数
function upDate() {
  let currentTime = Date.now();
  intervalTime = currentTime - startTime;
  //   console.log(intervalTime);

  //毫秒
  let Millisecond = String(Math.floor((intervalTime % 1000) / 10)).padStart(
    2,
    0
  );

  //秒
  let sec = String(Math.floor(intervalTime / 1000) % 60).padStart(2, 0);

  //分
  let min = String(Math.floor((intervalTime / 1000 / 60) % 60)).padStart(2, 0);

  //时
  let hours = String(Math.floor((intervalTime / 1000 / 60 / 60) % 24)).padStart(
    2,
    0
  );

  display.textContent = `${hours}:${min}:${sec}:${Millisecond}`;
}
