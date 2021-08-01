var min = 0;
var sec = 0;
var msec = 0;
var interval;

var minbtn = document.getElementById("min");
var secbtn = document.getElementById("sec");
var msecbtn = document.getElementById("msec");

function timer() {
  msec++;
  msecbtn.innerHTML = msec;
  if (msec > 100) {
    sec++;
    secbtn.innerHTML = sec;
    msec = 0;
  } else if (sec >= 60) {
    min++;
    minbtn.innerHTML = min;
    sec = 0;
  }
}
function start() {
  interval = setInterval(timer, 10);
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = false;
}

function pause() {
  clearInterval(interval);
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn1").disabled = false;
}
function reset() {
  clearInterval(interval);
  msec = 0;
  sec = 0;
  min = 0;
  minbtn.innerHTML = min;
  secbtn.innerHTML = sec;
  msecbtn.innerHTML = msec;
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
}
