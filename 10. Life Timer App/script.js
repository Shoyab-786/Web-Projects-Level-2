// Set the maximum date for the input field to today's date
userInput.max = new Date().toISOString().split("T")[0];

// Function to get the number of days in a given month of a year
function getDaysInMonth(year, month) {
    // Months are zero-indexed, so we need to subtract 1 from the month
    return new Date(year, month, 0).getDate();
}

// Selecting clock elements
let clock1 = document.querySelector(".clock1");
let clock2 = document.querySelector(".clock2");
let clock3 = document.querySelector(".clock3");
let clock4 = document.querySelector(".clock4");
let clock5 = document.querySelector(".clock5");
let clock6 = document.querySelector(".clock6");

// Function to update clock with current date and time
let currentDatFunc = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDays = currentDate.getDate();
    let currentHour = currentDate.getHours();
    let currentMin = currentDate.getMinutes();
    let currentSec = currentDate.getSeconds();

    // Adjusting hours to 12-hour format
    if (currentHour < 10) {
        currentHour = "0" + currentHour;
    }
    if (currentHour > 12) {
        currentHour = currentHour - 12;
        if (currentHour < 10) {
            currentHour = "0" + currentHour;
        }
    }
    if (currentMin < 10) {
        currentMin = "0" + currentMin;
    }
    if (currentSec < 10) {
        currentSec = "0" + currentSec;
    }

    // Updating clock elements with current date and time
    clock1.innerHTML = currentYear;
    clock2.innerHTML = currentMonth;
    clock3.innerHTML = currentDays;
    clock4.innerHTML = currentHour;
    clock5.innerHTML = currentMin;
    clock6.innerHTML = currentSec;
};

// Interval to update current date and time every second
let interval = setInterval(currentDatFunc, 1000);

// Selecting birthdate input element
let birthdateInput = document.querySelector("#userInput");
let birthdate;

// Function to calculate age and display countdown
let calcFunction = () => {
    console.log("Updating...");
    birthdate = birthdateInput.valueAsDate;

    let birthdateYear = birthdate.getFullYear();
    let birthdateMonth = birthdate.getMonth() + 1;
    let birthdateDays = birthdate.getDate();
    let birthdateHour = birthdate.getHours();
    let birthdateMin = birthdate.getMinutes();
    let birthdateSec = birthdate.getSeconds();

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDays = currentDate.getDate();
    let currentHour = currentDate.getHours();
    let currentMin = currentDate.getMinutes();
    let currentSec = currentDate.getSeconds();

    let difDay, difMon, difYear;

    // Calculate age in years, months, and days
    difYear = currentYear - birthdateYear; // Difference in years
    if (currentMonth >= birthdateMonth) {
        difMon = currentMonth - birthdateMonth;
    } else {
        difYear--; // Subtract one year if the birth month is after the current month
        difMon = 12 + currentMonth - birthdateMonth; // Calculate months difference
    }
    if (currentDays >= birthdateDays) {
        difDay = currentDays - birthdateDays;
    } else {
        difMon--; // Subtract one month if the birth day is after the current day
        difDay = getDaysInMonth(birthdateYear, birthdateMonth) + currentDays - birthdateDays; // Calculate days difference
    }
    if (difMon < 0) {
        difMon = 11;
        difYear--; // Subtract one year if the calculated months difference is negative
    }

    let dateDiff = currentDate - birthdate;
    let difhour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    let difminute = Math.floor(dateDiff / (1000 * 60)) % 60;
    let difsecond = Math.floor(dateDiff / 1000) % 60;

    // Display age and countdown
    clock1.innerHTML = difYear;
    clock2.innerHTML = difMon;
    clock3.innerHTML = difDay;
    clock4.innerHTML = difhour < 10 ? "0" + difhour : difhour;
    clock5.innerHTML = difminute < 10 ? "0" + difminute : difminute;
    clock6.innerHTML = difsecond < 10 ? "0" + difsecond : difsecond;

};

// Selecting setting button, date section, and submit button
let settingBtn = document.querySelector(".faBtn");
let dateSec = document.querySelector(".dateSec");
let submitbtn = document.querySelector(".submitbtn");

let isdateopen = false;

// Event listener for setting button to show/hide date section
settingBtn.addEventListener('click', () => {
    if (isdateopen) {
        dateSec.classList.add("hideDate");
        submitbtn.classList.remove("ptr");
    } else {
        dateSec.classList.remove("hideDate");
        submitbtn.classList.add("ptr");
    }
    isdateopen = !isdateopen;
});

let interval2; // Define interval2 outside the click event listener to access it globally

// Event listener for submit button to calculate age and start countdown
submitbtn.addEventListener('click', () => {
    clearInterval(interval);
    interval2 = setInterval(calcFunction, 1000);
    setTimeout(() => {
        submitbtn.classList.add('hide');
    }, 1000);
});
