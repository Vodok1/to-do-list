setInterval(function () {
  let godziny = new Date();
  let hourActual = godziny.getHours().toString();
  let minuteActual = godziny.getMinutes().toString();
  let secondsActual = godziny.getSeconds().toString();

  if (hourActual.length < 2) {
    hourActual = "0" + hourActual;
  }
  if (minuteActual.length < 2) {
    minuteActual = "0" + minuteActual;
  }
  if (secondsActual.length < 2) {
    secondsActual = "0" + secondsActual;
  }
  document.querySelector(
    ".godzina"
  ).innerHTML = `${hourActual}:${minuteActual}:${secondsActual}`;
}, 1000);

const actualDate = new Date();
const ustFormatDaty = { year: "numeric", month: "long", day: "numeric" };
const datum = actualDate.toLocaleDateString("pl-PL", ustFormatDaty);
document.getElementById("datum").innerHTML = `${datum}`;
