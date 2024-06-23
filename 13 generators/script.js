const firstNames = [
    "Aarav", "Aaradhya", "Aarushi", "Aarohi", "Abhinav", "Abhishek", "Adarsh", "Adhya", "Aditi", "Aisha",
    "Akash", "Akshay", "Ali", "Amara", "Ambika", "Ananya", "Anaya", "Aniket", "Anika", "Anjali", "Ankit", "Ansh",
    "Arjit", "Arnav", "Arjun", "Aryan", "Aria", "Ariana", "Ashutosh", "Ashwini", "Avani", "Avisha", "Avni",
    "Chamara", "Charith", "Danushka", "Deepak", "Dev", "Devansh", "Dilshan", "Gaurav", "Harsh", "Heshan", "Hira",
    "Hitesh", "Imran", "Ishani", "Ishita", "Itika", "Jayant", "Kaira", "Kamil", "Karan", "Karthik", "Kashvi",
    "Kavya", "Khushi", "Kiara", "Kritika", "Kyra", "Lakshan", "Mahesh", "Malik", "Milinda", "Mohit", "Murtaza",
    "Myra", "Nandini", "Naveen", "Nimal", "Nimesh", "Nisal", "Nitesh", "Nuwan", "Pihu", "Pranav", "Praniti",
    "Prateek", "Prisha", "Raghav", "Rahul", "Rajat", "Rajesh", "Ravi", "Rhea", "Riddhi", "Rishi", "Riya",
    "Rohan", "Rohit", "Sameer", "Sagar", "Samara", "Sandaruwan", "Sandeep", "Sanika", "Saanvi", "Saisha",
    "Sakshi", "Samadhi", "Sangeeth", "Sanith", "Shanaya", "Shashank", "Shivam", "Sridhar", "Surya", "Saanvi",
    "Saisha", "Sakshi", "Sanika", "Siya", "Sanya", "Shubham", "Surya", "Swara", "Tarun", "Tharindu", "Tharuka",
    "Thilina", "Thilini", "Udara", "Udesh", "Umesha", "Varun", "Vikas", "Vivek", "Yash", "Yuvraj", "Zahid",
    "Zain", "Zenith", "Zoha"
];

let usedNames = [];

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const generateRandomUsername = (name) => {
    const randomSuffix = Math.floor(Math.random() * 1000);
    const formattedName = name.toLowerCase().replace(/\s/g, '_');
    return `${formattedName}_${randomSuffix}`;
};

const generateRandomPhoneNumber = () => Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');

const generateRandomEmail = (name) => {
    const domains = ["gmail.com", "yahoo.com", "outlook.com", "example.com"];
    const domain = getRandomItem(domains);
    const randomName = name.toLowerCase().replace(/\s/g, '');
    return `${randomName}${(Math.round(Math.random() * 10000))}@${domain}`;
};

const generateRandomAddress = () => {
    const cities = ["Aali", "Alipur", "Asola", "Aya Nagar", "Babarpur", "Bakhtawarpur", "Bakkar Wala", "Bankauli", "Bankner", "Bapraula", "Baqiabad", "Barwala", "Bawana", "Begum Pur", "Bhalswa Jahangirpur", "Bhati", "Bhor Garh", "Burari", "Chandan Hola", "Chattarpur", "Chhawala", "Chilla Saroda Bangar", "Chilla Saroda Khadar", "Daryapur Kalan", "Dayalpur", "Dallopura", "Dindarpur", "Deoli", "Dera Mandi", "Fatehpur Beri", "Gharonda Neemka Bangar (also known as Patparganj)", "Gharoli", "Gheora", "Gokalpur", "Ghitorni", "Hastsal", "Ibrahimpur", "Jaitpur", "Jiwanpur (also called Johripur)", "Jaffrabad", "Jharoda Kalan", "Jonapur", "Jharoda Majra Burari", "Kanjhawala", "Kamalpur Majra Burari", "Kapas Hera", "Karala", "Karawal Nagar", "Kair", "Khanpur Dhani", "Khajoori Khas", "Khera", "Khera Kalan", "Khera Khurd", "Kirari Suleman Nagar", "Kondli", "Kotla Mahigiran", "Kusumpur", "Ladpur", "Libaspur", "Maidan Garhi", "Mehrauli", "Mukhmelpur", "Moradabad Pahari", "Malikpur Kohi alias Rangpuri", "Mithepur", "Molarband", "Mirpur Turk", "Mubarak Pur Dabas", "Mustafabad", "Mohammad Pur Majri", "Mandoli", "Mukandpur", "Mundka", "Mitraon", "Nilothi", "Nangloi Jat", "Nithari", "Neb Sarai", "Nangli Sakrawati", "Pooth Kalan", "Pooth Khurd", "Pul Pehlad", "Prahlad Pur Bangar", "Qadipur", "Quammruddin Nagar", "Rajapur Khurd", "Rajokri", "Rani Khera", "Roshanpura (also called Dichaon Khurd)", "Sultanpur Majra", "Saidabad", "Shakarpur Baramad", "Sadatpur Gujran", "Siraspur", "Sahibabad Daulatpur", "Shafipur Ranhola", "Tikri Kalan", "Sambhalka", "Sultanpur", "Saidul Azaib", "Taj Pul", "Tukhmirpur", "Tilangpur Kotla", "Tigri", "Tikri Khurd", "Ziauddinpur"];
    const streets = ["Main Street", "Ward no.", "Block", "Market Street", "Park Avenue", "Broadway", "High Street"];
    const randomCity = getRandomItem(cities);
    const randomStreet = getRandomItem(streets);
    const randomHouseNumber = Math.floor(Math.random() * 100) + 1;
    return `${randomHouseNumber}, ${randomStreet}, ${randomCity}, India`;
};

const generateRandomPassword = (username) => {
    const specialCharacters = "!@#$%^&*()_-+=<>?";
    const numbers = "0123456789";

    let password = "";
    const passwordLength = Math.floor(Math.random() * 3) + 9;

    password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    for (let i = password.length; i < passwordLength; i++) {
        password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    if (password.includes(username)) {
        return generateRandomPassword(username);
    }

    return password;
};

const setRandomItem = (id, generator) => {
    const element = document.getElementById(id);
    if (!element) return;

    let value = generator();
    while (element.innerText === value) {
        value = generator();
    }
    element.innerText = value;
    return value;
};

const setNextRandomContent = () => {
    setRandomItem("random-name", () => getRandomItem(firstNames));
    setRandomItem("random-phone", generateRandomPhoneNumber);
    setRandomItem("random-email", () => generateRandomEmail(document.getElementById("random-name").innerText));
    setRandomItem("random-address", generateRandomAddress);
    setRandomItem("random-username", () => generateRandomUsername(document.getElementById("random-name").innerText));
    setRandomItem("random-password", () => generateRandomPassword(document.getElementById("random-username").innerText));
};


document.getElementById("nextButton").addEventListener("click", () => {
    setNextRandomContent();
    document.querySelector('.fa-rotate').classList.add('rotate');
    setTimeout(() => {
        document.querySelector('.fa-rotate').classList.remove('rotate');
        showNotification('New data generated');
    }, 1500);
});

const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
        .then(() => console.log('Copied to clipboard:', value))
        .catch(err => console.error('Unable to copy to clipboard', err));
};

const copyElementText = (id) => {
    const text = document.getElementById(id).innerText;
    copyToClipboard(text);
    showNotification(`${id} copied`);
};
const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.querySelector('.next-btn-container').appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
};
document.getElementById("copyName").addEventListener("click", () => copyElementText("random-name"));
document.getElementById("copyPhone").addEventListener("click", () => copyElementText("random-phone"));
document.getElementById("copyEmail").addEventListener("click", () => copyElementText("random-email"));
document.getElementById("copyAddress").addEventListener("click", () => copyElementText("random-address"));
document.getElementById("copyUsername").addEventListener("click", () => copyElementText("random-username"));
document.getElementById("copyPassword").addEventListener("click", () => copyElementText("random-password"));


document.querySelectorAll('.generator-container').forEach(container => {
    container.addEventListener('mouseenter', () => {
        const btnContainer = container.querySelector('.btn-container');
        if (btnContainer) {
            btnContainer.classList.add('show');
            setTimeout(() => {
                container.querySelector('.btn-secondary').classList.add('showCopy');
            }, 200);
        }
    });

    container.addEventListener('mouseleave', () => {
        const btnContainer = container.querySelector('.btn-container');
        if (btnContainer) {
            btnContainer.classList.remove('show');
            container.querySelector('.btn-secondary').classList.remove('showCopy');

        }
    });
});

setNextRandomContent();