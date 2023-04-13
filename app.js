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

  console.log(userDay);
});

month.addEventListener("input", (e) => {
  userMonth = e.target.value;
  console.log(userMonth);
});
year.addEventListener("input", (e) => {
  userYear = e.target.value;
  console.log(userYear);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const now = new Date();
  const userBirthdate = new Date(`${userYear}-${userMonth}-${userDay}`);
  let thisDay = now.getDay() - userBirthdate.getDay();
  let thisMonth = now.getMonth() - userBirthdate.getMonth();
  let thisYear = now.getFullYear() - userBirthdate.getFullYear();

  if (
    now.getMonth() < userBirthdate.getMonth() ||
    (now.getMonth() === userBirthdate.getMonth() &&
      now.getDate() < userBirthdate.getDate())
  ) {
    thisYear--;
    thisMonth += 12;
  }
  if (userMonth === null || userMonth === undefined) {
    console.log("no");
  }
  resultDay.innerHTML = thisDay;
  resultMonth.innerHTML = thisMonth;
  resultYear.innerHTML = thisYear;
});
