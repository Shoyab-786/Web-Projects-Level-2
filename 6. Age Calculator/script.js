// Selecting necessary elements
let userInput = document.querySelector('#date'); // Input field for the birthdate
let result = document.querySelector('.result'); // Field to display the calculated age
let checkBtn = document.querySelector('.check'); // Button to trigger the age calculation

// Set maximum date allowed in the input field to today's date
userInput.max = new Date().toISOString().split("T")[0];

// Function to calculate age
let calcFunction = () => {
    // Get the birthdate from the input field
    let birthdate = new Date(userInput.value);

    // Check if the entered value is a valid date
    if (isNaN(birthdate)) {
        alert("Please select a valid date.");
        return;
    }

    // Get day, month, and year components of the birthdate
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1; // Note: January is 0 in JavaScript
    let y1 = birthdate.getFullYear();

    // Get current date
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    // Calculate age in years, months, and days
    y3 = y2 - y1; // Difference in years
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--; // Subtract one year if the birth month is after the current month
        m3 = 12 + m2 - m1; // Calculate months difference
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--; // Subtract one month if the birth day is after the current day
        d3 = getDaysInMonth(y1, m1) + d2 - d1; // Calculate days difference
    }
    if (m3 < 0) {
        m3 = 11;
        y3--; // Subtract one year if the calculated months difference is negative
    }

    // Construct age string
    let userAge = `Your Are ${y3} Years ${m3} Months ${d3} Days Old.`;
    result.value = userAge; // Display the calculated age
}

// Function to get the number of days in a month
let getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

// Event listener for the check button to trigger age calculation
checkBtn.addEventListener('click', calcFunction);
