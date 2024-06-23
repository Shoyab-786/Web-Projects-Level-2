let gender = document.querySelector('#gender');
let countries = document.querySelector('#countries');
let convertBtn = document.querySelector('.convert');
let userInput = document.querySelector('#userInput');
let boxBtns = document.querySelector('.boxBtns');
let controlBtn = document.querySelector('.controlBtn');
let playBtn = document.querySelector('.fa-circle-play');
let pauseBtn = document.querySelector('.fa-circle-pause');
let downloadBtn = document.querySelector('.download');
let audio = document.querySelector('audio');
let previousUserInput = userInput.value;
let download_url;




let apiKeys = [
    '09bf6d84d4mshb8ee8e614b61dd6p18e533jsn77bd4030c265',   //md414
    '6d976eebfcmsh7f05d7d56e6e74ap1fabdbjsnaa30068c7425',  //greatkalam          
    '87e4c3d6c2msh75175050e982799p1e5161jsn9730938616de', //davinci
    '0035448d4emsh6cf7d64b1bdd286p148c86jsnedfd187a8aa6' //zenburnell
]

let fetch_Data = async () => {
    let countryCode = countries.value;
    let genderCode = gender.value;
    let voiceCode = `en-${countryCode}-${genderCode}`;
    const url = 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize';
    let options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
        },
        body: new URLSearchParams({
            voice_code: voiceCode,
            text: userInput.value,
        })
    };

    let success = false;
    let i;
    for (i = 0; i < apiKeys.length; i++) {
        options.headers['X-RapidAPI-Key'] = apiKeys[i];
        try {
            let response = await fetch(url, options);
            let result = await response.json();
            download_url = result.result.audio_url;
            audio.src = download_url;
            success = true;
            break; // Exit the loop if successful
        } catch (error) {
            console.log(`Fetching Failed with apiKey[${i}]`);

        }
    }

    if (!success) {
        console.error("Failed to fetch data using all API keys.");
    }
    else {
        console.log(`Fetching Finished with apiKey[${i}]`);
    }
};




convertBtn.addEventListener('click', async () => {

    console.log("clicking...");
    if (userInput.value.length > 0) {
        audio.pause();
        audio.currentTime = 0;
        // if (previousUserInput !== userInput.value) {
            alert("Converting please wait...");
            await fetch_Data();
            // previousUserInput = userInput.value;
        // }
        // else {
            // alert("Text Already Convert...");
        // }
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play");
        boxBtns.classList.add('show');

    }
    else {
        userInput.placeholder = "Empty Field Can't Convert!";
        previousUserInput = "";
        userInput.classList.add('error');

        setTimeout(() => {
            userInput.classList.remove('error');
            userInput.placeholder = "Write or paste here...";
        }, 2000);
    }
});

userInput.addEventListener('input', () => {
    if (userInput.value.length <= 0) {
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play");
        boxBtns.classList.remove('show');
    }
})

controlBtn.addEventListener('click', () => {
    if (audio.paused) {
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.add("fa-circle-pause");
        audio.play();
    } else {
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play");
        audio.pause();
    }
});

audio.addEventListener('ended', () => {
    playBtn.classList.remove("fa-circle-pause");
    playBtn.classList.add("fa-circle-play");
});

downloadBtn.addEventListener('click', () => {
    let audioSrc = audio.src;
    if (audioSrc) {
        window.open(audioSrc, '_blank');
    } else {
        console.log("No audio source available for download.");
    }
});
