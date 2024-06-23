console.log("JavaScript Initializing...");

// Selecting elements
let passwordField = document.querySelector('.password');
let copyBtn = document.querySelector('.copy');
let generateBtn = document.querySelector('.generate');
let notification = document.querySelector('.notification');

// Function to generate a random password
let randomPass = () => {
    // Define character sets
    let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let lowerCase = upperCase.map(letter => letter.toLowerCase());
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let symbols = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\\`, `]`, `^`, `_`, `{`, `|`, `}`];
    let allChars = upperCase.concat(lowerCase, nums, symbols);

    let password = "";

    // Ensure password contains at least one character from each set
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the rest of the password with random characters
    while (password.length < 12) {
        let randomNum = Math.floor(Math.random() * allChars.length);
        password += allChars[randomNum];
    }

    // Set the generated password to the password field value
    passwordField.value = password;
}

// Function to show notification
let showNotification = () => {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500);
}

// Event listener for generate button
generateBtn.addEventListener('click', () => {
    randomPass(); // Generate a random password
    // Display notification
    notification.style.color = "rgb(9, 153, 71)";
    notification.innerHTML = "Password Generated Successfully.";
    showNotification();
});

// Event listener for copy button
copyBtn.addEventListener('click', () => {
    if (passwordField.value === "") {
        // If password field is empty, show error notification
        notification.style.color = "red";
        notification.innerHTML = "Empty Field Can't Copy";
        showNotification();
    } else {
        // Copy password to clipboard
        navigator.clipboard.writeText(passwordField.value);
        // Show success notification
        notification.style.color = "rgb(9, 153, 71)";
        notification.innerHTML = "Password copied Successfully.";
        showNotification();
    }
});