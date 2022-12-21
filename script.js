const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
const weekdays = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

// we select ends-text and deadline timer

const endsText = document.getElementById("ends-text");
const deadline = document.getElementById("deadline");

// create end date in English
const endDate = new Date("21 Dec 2022 19:00:00");
console.log(endDate);

// extract end date text into variables
const endYear = endDate.getFullYear();
const endMonth = months[endDate.getMonth()];
const endWeekday = endDate.getDay();
const endDayName = weekdays[endWeekday];
const endDay = endDate.getDate();
const endHour = endDate.getHours();
const endMinute = endDate.getMinutes();
const endSecond = endDate.getSeconds();

// replace content dinamically

endsText.textContent = `El Demo Day será el ${endDayName} ${endDay} de ${endMonth} de ${endYear} a las ${endHour}:00 horas.`;

// we select the items of the timer

const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

// function for remaing time

// endDate in ms

function remainingTime() {
  const now = new Date();
  const remainingTimeInMs = endDate - now;

  const oneMinuteInMs = 60 * 1000;
  const oneHourInMs = 60 * oneMinuteInMs;
  const oneDayInMs = 24 * oneHourInMs;

  let remainingDays = Math.floor(remainingTimeInMs / oneDayInMs);

  let remainingHours = Math.floor(
    (remainingTimeInMs % oneDayInMs) / oneHourInMs
  );
  let remainingMinutes = Math.floor(
    (remainingTimeInMs % oneHourInMs) / oneMinuteInMs
  );
  let remainingSeconds = Math.floor((remainingTimeInMs % oneMinuteInMs) / 1000);

  return {
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
    remainingTimeInMs,
  };
}

const countDown = setInterval(function () {
  const {
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
    remainingTimeInMs,
  } = remainingTime();
  daysElement.innerHTML = remainingDays;
  hoursElement.innerHTML = remainingHours;
  minutesElement.innerHTML = remainingMinutes;
  secondsElement.innerHTML = remainingSeconds;

  if (remainingTimeInMs <= 0) {
    clearInterval(countDown);
    daysElement.innerHTML = 0;
    hoursElement.innerHTML = 0;
    minutesElement.innerHTML = 0;
    secondsElement.innerHTML = 0;
  }
}, 1000);
