const displayVal = document.getElementById("Display");

displayVal.value = "0.0";

function appendNum(calc) {
  if (displayVal.value === "0.0") displayVal.value = "";
  displayVal.value += calc;
}

function calcNum() {
  if (displayVal.value !== "") {
    try {
      //eval() 函数会将传入的字符串当做 JavaScript 代码进行执行
      displayVal.value = eval(displayVal.value).toFixed(1); //toFixed保留小数点
    } catch (error) {
      displayVal.value = "error";
    }
  }
}

function Clear() {
  displayVal.value = "0.0";
}
