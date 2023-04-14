const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const form = document.querySelector(".form");
const button = document.querySelector(".button");

const resultDay = document.querySelector(".result-day");
const resultMonth = document.querySelector(".result-month");
const resultYear = document.querySelector(".result-year");
let userDay;
let userMonth;
let userYear;

day.addEventListener("input", (e) => {
  userDay = e.target.value;

  console.log(userDay, "days");
});

month.addEventListener("input", (e) => {
  userMonth = e.target.value;
  console.log(userMonth, "months");
});
year.addEventListener("input", (e) => {
  userYear = e.target.value;
  console.log(userYear, "years");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const now = new Date();
  const userBirthdate = new Date(`${userYear}-${userMonth}-${userDay}`);
  let thisYear = now.getFullYear() - userBirthdate.getFullYear();
  let thisMonth = now.getMonth() - userBirthdate.getMonth();
  let thisDay = now.getDay() - userBirthdate.getDay();

  const printYear = `-- ${thisYear} year`;
  const printMonth = `-- ${thisMonth} month`;
  const printDay = `-- ${thisDay} day`;
  if (thisDay < 0) {
    thisDay +=
      new Date(now.getFullYear(), now.getMonth(), 0).getDate() -
      userBirthdate.getDate();
    thisMonth--;
  }
  if (isNaN(userDay) || isNaN(userMonth) || isNaN(userYear)) {
    checkInput();
  } else {
    resultYear.innerHTML = printYear;
    resultMonth.innerHTML = printMonth;
    resultDay.innerHTML = printDay;
  }
});
// JavaScript

const errorMessage = document.getElementById("errorMessage");
function checkInput() {
  if (isNaN(userDay) || userDay === null || userDay === undefined) {
    errorMessage.textContent = "Please input a valid day";
  } else {
    errorMessage.textContent = "";
  }
}
