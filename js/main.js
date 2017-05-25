var refresher = window.setInterval(currentTime, 1000);

function currentTime() {
  var time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.querySelector('.js-clock').innerHTML = hours + ":" + minutes + ":" + seconds;
}

currentTime();
