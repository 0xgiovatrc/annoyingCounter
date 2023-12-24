const timer = document.querySelector(".timer");
let myNumber = 0;

document.querySelector(".plus-button").addEventListener("click", function() {
    if (myNumber >= 0) {
        myNumber++;
        document.querySelector(".counter").innerHTML = myNumber;
    };
    return
});

document.querySelector(".minus-button").addEventListener("click", function() {
    if (myNumber > 0) {
        myNumber--;
        document.querySelector(".counter").innerHTML = myNumber;
    };
    return
});

document.querySelector(".target-number-generator").addEventListener("click", function() {
    const targetNumber1= getRandomInt(15, 21);
    document.querySelector(".target-number-container")
        .innerHTML = `
            <p>Target Number: </p>
            <p class="target-number">${targetNumber1}</p>
        `;
    let timeCentiSeconds = 1000;
    const timerCountDown = setInterval(() => {
        timeCentiSeconds--;
        displayTime(timeCentiSeconds);
        if (timeCentiSeconds === 0 && targetNumber1 === myNumber) {
            clearInterval(timerCountDown);
            alert("You Win!");
        } else if (timeCentiSeconds === 0 && targetNumber1 != myNumber) {
            clearInterval(timerCountDown);
            alert("You Lose.");
        }}, (1000 / 100));
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function displayTime(centiSeconds) {
    const sec = Math.floor(centiSeconds / 100);
    const centiSec = Math.floor(centiSeconds % 100);
    timer.innerHTML = `${sec < 10 ? "0" : ""}${sec}:${centiSec < 10 ? "0" : ""}${centiSec}`;
}
