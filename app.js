// Key Codes
const keyCodes = {
    "boom": 49,
    "clap": 50,
    "hi-hat": 51,
    "kick": 52,
    "open-hat": 53,
    "ride": 54,
    "snare": 55,
    "tink": 56,
    "tom": 57
}

// Audio
const boom = new Audio("./sounds/boom.wav");
const clap = new Audio("./sounds/clap.wav");
const hiHat = new Audio("./sounds/hihat.wav");
const kick = new Audio("./sounds/kick.wav");
const openHat = new Audio("./sounds/openhat.wav");
const ride = new Audio("./sounds/ride.wav");
const snare = new Audio("./sounds/snare.wav");
const tink = new Audio("./sounds/tink.wav");
const tom = new Audio("./sounds/tom.wav");

document.addEventListener("click", e => {
    if (e.target.id in keyCodes) {
        playSound(keyCodes[e.target.id]);
    }
});

document.addEventListener("keypress", e => {
    playSound(e.keyCode);
});

const playSound = (key) => {
    switch (key) {
        case 49:
            // boom
            console.log("boom")
            boom.pause();
            boom.currentTime = 0;
            boom.play();
            break;
        case 50:
            // clap
            console.log("clap")
            clap.pause();
            clap.currentTime = 0;
            clap.play();
            break;
        case 51:
            // hi-hat
            console.log("hi-hat")
            hiHat.pause();
            hiHat.currentTime = 0;
            hiHat.play();
            break;
        case 52:
            // kick
            console.log("kick")
            kick.pause();
            kick.currentTime = 0;
            kick.play();
            break;
        case 53:
            // open-hat
            console.log("open-hat")
            openHat.pause();
            openHat.currentTime = 0;
            openHat.play();
            break;
        case 54:
            // ride
            console.log("ride")
            ride.pause();
            ride.currentTime = 0;
            ride.play();
            break;
        case 55:
            // snare
            console.log("snare")
            snare.pause();
            snare.currentTime = 0;
            snare.play();
            break;
        case 56:
            // tink
            console.log("tink")
            tink.pause();
            tink.currentTime = 0;
            tink.play();
            break;
        case 57:
            // tom
            console.log("tom")
            tom.pause();
            tom.currentTime = 0;
            tom.play();
            break;
        default:
            console.log(e.keyCode)
    }
};