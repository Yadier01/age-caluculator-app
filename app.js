const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const form = document.querySelector(".form");
const button = document.querySelector(".button");

const resultDay = document.querySelector(".result-day");
const resultMonth = document.querySelector(".result-month");
const resultYear = document.querySelector(".result-year");
const errorDay = document.querySelector(".errorDay");
const errorYear = document.querySelector(".errorYear");
const errorMonth = document.querySelector(".errorMonth");

const currentYear = new Date().getFullYear();
let userDay = "";
let userMonth = "";
let userYear = "";

function updateDay(e) {
  userDay = e.target.value;
}

function updateMonth(e) {
  userMonth = e.target.value;
}

function updateYear(e) {
  userYear = e.target.value;
}

day.addEventListener("input", updateDay);
month.addEventListener("input", updateMonth);
year.addEventListener("input", updateYear);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const [dayValue, monthValue, yearValue] = [userDay, userMonth, userYear];
  const userBirthdate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
  const now = new Date();
  const diffTime = Math.abs(now - userBirthdate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let thisYear = Math.floor(diffDays / 365);
  let thisMonth = Math.floor((diffDays % 365) / 30);
  let thisDay = diffDays % 30;

  const printYear = `-- ${thisYear} years`;
  const printMonth = `-- ${thisMonth} month`;
  const printDay = `-- ${thisDay} day`;

  if (
    isNaN(parseInt(dayValue)) ||
    isNaN(parseInt(monthValue)) ||
    isNaN(parseInt(yearValue))
  ) {
    checkInput();
  } else if (userYear > currentYear) {
    errorYear.textContent = "You were not born in the future ;)";
  } else {
    resultYear.innerHTML = printYear;
    resultMonth.innerHTML = printMonth;
    resultDay.innerHTML = printDay;
  }
});

function checkInput() {
  errorDay.textContent = "Please input a valid day";
  errorMonth.textContent = "Please enter a valid month";
  errorYear.textContent = "Please enter a valid Year";
}
