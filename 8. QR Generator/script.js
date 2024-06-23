console.log("JavaScript Initializing...");

// Selecting necessary elements
let userInput = document.querySelector('.userInput'); // Input field for user input
let submitBtn = document.querySelector('.submit'); // Button to submit user input
let qrCode = document.querySelector('.qrCode'); // Container for displaying the QR code
let qimg = document.querySelector('.qimg'); // Image element to display the QR code
let notification = document.querySelector('.notification'); // Element for displaying notifications
let previousInputValue = ""; // Variable to store previous input value
let downloadBtn = document.querySelector('.download')

// Function to show notification with given text and color
let showNotification = (text, color) => {
    notification.innerHTML = text;
    notification.style.color = color;
    notification.classList.add('showNotification');
    setTimeout(() => {
        notification.classList.remove('showNotification');
    }, 2500);
}

// Function to add smooth effect when showing the QR code
let smootEffect = () => {
    if (qrCode.classList.contains("show")) {
        if (userInput.value === previousInputValue) {
            // If the input value hasn't changed, do nothing
        } else {
            setTimeout(() => {
                qrCode.classList.remove('show');
            }, 1); // Adjust the delay as needed
            setTimeout(() => {
                qrCode.classList.add('show');
                showNotification("New QR Generated...", "green");
            }, 1000);
        }
    } else {
        qrCode.classList.add('show');
        setTimeout(() => {
            showNotification("QR Generated...", "green");
        }, 1000)
    }
}

// Function to fetch data and generate QR code
let fetchData = async () => {
    let inputValue = userInput.value;
    if (inputValue.length > 0) {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
        try {
            if (inputValue != previousInputValue) {
                console.log("Fetching Data...");
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response error!');
                }
                const imageDataUrl = await response.blob();
                qimg.src = URL.createObjectURL(imageDataUrl);
                smootEffect();
                previousInputValue = inputValue;
            }
            else {
                showNotification("QR Already Exists...", "red");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    } else {
        showNotification("Field is Empty...", "red");
    }
}

// Event listener for the submit button to trigger fetching data and generating QR code
submitBtn.addEventListener('click', fetchData);

// Event listener for the download button to trigger the download of the QR code image
downloadBtn.addEventListener('click', () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = qimg.src;
    downloadLink.download = 'qrcode.jpg'; // You can change the filename as needed
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
