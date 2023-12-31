const gameSection = document.querySelector(".game-section");
const showRules = document.getElementById("show-rules");
const hideRules = document.getElementById("play");
const timer = document.querySelector(".timer");
const level = document.querySelector(".level");
const targetNumbCont = document.querySelector(".target-number-container");
const generator = document.querySelector(".target-number-generator");
let myNumber = 0;

let counterCont;
let counterTitle;
let counter;
let inputsCont;
let minusButton;
let plusButton;

function createCounter() {
    counterCont = document.createElement("div");
    counterCont.setAttribute("class", "container counter-container");
    
    counterTitle = document.createElement("p");
    counterTitle.appendChild(document.createTextNode("MY NUMBER"));
    
    counter = document.createElement("p");
    counter.setAttribute("class", "counter");
    counter.appendChild(document.createTextNode("0"));

    inputsCont = document.createElement("div");
    inputsCont.setAttribute("class", "inputs-container");
    
    minusButton = document.createElement("button");
    minusButton.setAttribute("id", "minus");
    minusButton.appendChild(document.createTextNode("-"));
    
    plusButton = document.createElement("button");
    plusButton.setAttribute("id", "plus");
    plusButton.appendChild(document.createTextNode("+"));

    gameSection.appendChild(counterCont);
    counterCont.appendChild(counterTitle);
    counterCont.appendChild(counter);
    counterCont.appendChild(inputsCont);
    inputsCont.appendChild(minusButton);
    inputsCont.appendChild(plusButton);
}

createCounter();

minusButton.disabled = true;
plusButton.disabled = true;

inputsCont.addEventListener("click", function(event) {
    if (event.target.id === "plus" && myNumber >= 0) {
        myNumber++;
    } else if (event.target.id === "minus" && myNumber > 0) {
        myNumber--;
    }

    counter.innerHTML = myNumber;
});

showRules.addEventListener("click", function() {
    document.querySelector(".rules-container").classList.remove("display-none");
})

hideRules.addEventListener("click", function() {
    document.querySelector(".rules-container").classList.add("display-none");
})

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

// LEVELS
generator.addEventListener("click", function() {
    minusButton.disabled = false;
    plusButton.disabled = false;
    const targetNumber1 = getRandomInt(15, 21);
    targetNumbCont.innerHTML = `
        <p>TARGET NUMBER</p>
        <p class="target-number">${targetNumber1}</p>
    `;
    let timeCentiSeconds = 1000;
    let timerCountDown = setInterval(() => {
        timeCentiSeconds--;
        displayTime(timeCentiSeconds);

        // WIN LEVEL 1
        if (timeCentiSeconds === 0 && targetNumber1 === myNumber) {
            clearInterval(timerCountDown);
            minusButton.disabled = true;
            plusButton.disabled = true;
            level.innerHTML = "🟩🟨⬜⬜⬜";
            targetNumbCont.innerHTML = `
                <p>TARGET NUMBER</p>
                <button class="target-number-generator-2">START LEVEL 2</button>
                <p class="target-number"></p>
            `;
            const generator2 = document.querySelector(".target-number-generator-2");
            myNumber = 0;
            counter.innerHTML = myNumber;
            timer.innerHTML = "--:--";

            // LEVEL 2
            generator2.addEventListener("click", function() {
                minusButton.disabled = false;
                plusButton.disabled = false;
                const targetNumber2 = getRandomInt(42, 49);
                targetNumbCont.innerHTML = `
                    <p>TARGET NUMBER</p>
                    <p class="target-number">${targetNumber2}</p>
                `;
                timeCentiSeconds = 1000;
                timerCountDown = setInterval(() => {
                    timeCentiSeconds--;
                    displayTime(timeCentiSeconds);
            
                    // WIN LEVEL 2
                    if (timeCentiSeconds === 0 && targetNumber2 === myNumber) {
                        clearInterval(timerCountDown);
                        minusButton.disabled = true;
                        plusButton.disabled = true;
                        level.innerHTML = "🟩🟩🟨⬜⬜";
                        targetNumbCont.innerHTML = `
                            <p>TARGET NUMBER</p>
                            <button class="target-number-generator-3">START LEVEL 3</button>
                            <p class="target-number"></p>
                        `;
                        const generator3 = document.querySelector(".target-number-generator-3");
                        myNumber = 0;
                        counter.innerHTML = myNumber;
                        timer.innerHTML = "--:--";

                        // LEVEL 3
                        generator3.addEventListener("click", function() {
                            minusButton.disabled = false;
                            plusButton.disabled = false;
                            const targetNumber3 = getRandomInt(75, 79);
                            targetNumbCont.innerHTML = `
                                <p>TARGET NUMBER</p>
                                <p class="target-number">${targetNumber3}</p>
                            `;
                            timeCentiSeconds = 1200;
                            timerCountDown = setInterval(() => {
                                timeCentiSeconds--;
                                displayTime(timeCentiSeconds);
                        
                                // WIN LEVEL 3
                                if (timeCentiSeconds === 0 && targetNumber3 === myNumber) {
                                    clearInterval(timerCountDown);
                                    minusButton.disabled = true;
                                    plusButton.disabled = true;
                                    level.innerHTML = "🟩🟩🟩🟨⬜";
                                    targetNumbCont.innerHTML = `
                                        <p>TARGET NUMBER</p>
                                        <button class="target-number-generator-4">START LEVEL 4</button>
                                        <p class="target-number"></p>
                                    `;
                                    const generator4 = document.querySelector(".target-number-generator-4");
                                    myNumber = 0;
                                    counter.innerHTML = myNumber;
                                    timer.innerHTML = "--:--";

                                    // LEVEL 4
                                    generator4.addEventListener("click", function() {
                                        minusButton.disabled = false;
                                        plusButton.disabled = false;
                                        const targetNumber4 = getRandomInt(110, 123);
                                        targetNumbCont.innerHTML = `
                                            <p>TARGET NUMBER</p>
                                            <p class="target-number">${targetNumber4}</p>
                                        `;
                                        timeCentiSeconds = 1400;
                                        timerCountDown = setInterval(() => {
                                            timeCentiSeconds--;
                                            displayTime(timeCentiSeconds);
                                    
                                            // WIN LEVEL 4
                                            if (timeCentiSeconds === 0 && targetNumber4 === myNumber) {
                                                clearInterval(timerCountDown);
                                                minusButton.disabled = true;
                                                plusButton.disabled = true;
                                                level.innerHTML = "🟩🟩🟩🟩🟨";
                                                targetNumbCont.innerHTML = `
                                                    <p>TARGET NUMBER</p>
                                                    <button class="target-number-generator-5">START LEVEL 5</button>
                                                    <p class="target-number"></p>
                                                `;
                                                const generator5 = document.querySelector(".target-number-generator-5");
                                                myNumber = 0;
                                                counter.innerHTML = myNumber;
                                                timer.innerHTML = "--:--";

                                                // LEVEL 5
                                                generator5.addEventListener("click", function() {
                                                    minusButton.disabled = false;
                                                    plusButton.disabled = false;
                                                    const targetNumber5 = getRandomInt(155, 171);
                                                    targetNumbCont.innerHTML = `
                                                        <p>TARGET NUMBER</p>
                                                        <p class="target-number">${targetNumber5}</p>
                                                    `;
                                                    timeCentiSeconds = 1500;
                                                    timerCountDown = setInterval(() => {
                                                        timeCentiSeconds--;
                                                        displayTime(timeCentiSeconds);
                                                
                                                        // WIN LEVEL 5
                                                        if (timeCentiSeconds === 0 && targetNumber5 === myNumber) {
                                                            minusButton.disabled = true;
                                                            plusButton.disabled = true;
                                                            clearInterval(timerCountDown);
                                                            level.innerHTML = "🟩🟩🟩🟩🟩";
                                                            targetNumbCont.innerHTML = `
                                                                <p>CONGRATULATIONS!</p>
                                                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button>GET PRIZE 🎁</button></a>
                                                            `;
                                                            myNumber = 0;
                                                            counter.innerHTML = myNumber;
                                                            timer.innerHTML = "--:--";
                                                
                                                        // LOSE LEVEL 5
                                                        } else if (timeCentiSeconds === 0 && targetNumber5 != myNumber) {
                                                            location.reload();
                                                        }}, (1500 / 100));
                                                    });
                                    
                                            // LOSE LEVEL 4
                                            } else if (timeCentiSeconds === 0 && targetNumber4 != myNumber) {
                                                location.reload();
                                            }}, (1400 / 100));
                                        });
                        
                                // LOSE LEVEL 3
                                } else if (timeCentiSeconds === 0 && targetNumber3 != myNumber) {
                                    location.reload();
                                }}, (1200 / 100));
                        });
            
                    // LOSE LEVEL 2
                    } else if (timeCentiSeconds === 0 && targetNumber2 != myNumber) {
                        location.reload();
                    }}, (1000 / 100));
            });

        // LOSE LEVEL 1
        } else if (timeCentiSeconds === 0 && targetNumber1 != myNumber) {
            location.reload();
        }}, (1000 / 100));
});