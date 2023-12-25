const timer = document.querySelector(".timer");
const targetNumbCont = document.querySelector(".target-number-container");
const level = document.querySelector(".level");
const counter = document.querySelector(".counter");
let generator = document.querySelector(".target-number-generator");
let myNumber = 0;

document.querySelector(".plus-button").addEventListener("click", function() {
    if (myNumber >= 0) {
        myNumber++;
        counter.innerHTML = myNumber;
    };
    return
});

document.querySelector(".minus-button").addEventListener("click", function() {
    if (myNumber > 0) {
        myNumber--;
        counter.innerHTML = myNumber;
    };
    return
});

// LEVEL 1
generator.addEventListener("click", function() {
    const targetNumber1 = getRandomInt(15, 21);
    targetNumbCont.innerHTML = `
        <p>Target Number: </p>
        <p class="target-number">${targetNumber1}</p>
    `;
    let timeCentiSeconds = 1000;
    let timerCountDown = setInterval(() => {
        timeCentiSeconds--;
        displayTime(timeCentiSeconds);

        // WIN LEVEL 1
        if (timeCentiSeconds === 0 && targetNumber1 === myNumber) {
            clearInterval(timerCountDown);
            level.innerHTML = "Level 2 / 5";
            targetNumbCont.innerHTML = `
                <p>Target Number: </p>
                <button class="target-number-generator-2">Generate</button>
                <p class="target-number"></p>
            `;
            const generator2 = document.querySelector(".target-number-generator-2");
            myNumber = 0;
            counter.innerHTML = myNumber;
            timer.innerHTML = "--:--";

            // LEVEL 2
            generator2.addEventListener("click", function() {
                const targetNumber2 = getRandomInt(42, 49);
                targetNumbCont.innerHTML = `
                    <p>Target Number: </p>
                    <p class="target-number">${targetNumber2}</p>
                `;
                timeCentiSeconds = 1000;
                timerCountDown = setInterval(() => {
                    timeCentiSeconds--;
                    displayTime(timeCentiSeconds);
            
                    // WIN LEVEL 2
                    if (timeCentiSeconds === 0 && targetNumber2 === myNumber) {
                        clearInterval(timerCountDown);
                        level.innerHTML = "Level 3 / 5";
                        targetNumbCont.innerHTML = `
                            <p>Target Number: </p>
                            <button class="target-number-generator-3">Generate</button>
                            <p class="target-number"></p>
                        `;
                        const generator3 = document.querySelector(".target-number-generator-3");
                        myNumber = 0;
                        counter.innerHTML = myNumber;
                        timer.innerHTML = "--:--";

                        // LEVEL 3
                        generator3.addEventListener("click", function() {
                            const targetNumber3 = getRandomInt(63, 69);
                            targetNumbCont.innerHTML = `
                                <p>Target Number: </p>
                                <p class="target-number">${targetNumber3}</p>
                            `;
                            timeCentiSeconds = 1200;
                            timerCountDown = setInterval(() => {
                                timeCentiSeconds--;
                                displayTime(timeCentiSeconds);
                        
                                // WIN LEVEL 3
                                if (timeCentiSeconds === 0 && targetNumber3 === myNumber) {
                                    clearInterval(timerCountDown);
                                    level.innerHTML = "Level 4 / 5";
                                    targetNumbCont.innerHTML = `
                                        <p>Target Number: </p>
                                        <button class="target-number-generator-4">Generate</button>
                                        <p class="target-number"></p>
                                    `;
                                    const generator4 = document.querySelector(".target-number-generator-4");
                                    myNumber = 0;
                                    counter.innerHTML = myNumber;
                                    timer.innerHTML = "--:--";

                                    // LEVEL 4
                                    generator4.addEventListener("click", function() {
                                        const targetNumber4 = getRandomInt(81, 88);
                                        targetNumbCont.innerHTML = `
                                            <p>Target Number: </p>
                                            <p class="target-number">${targetNumber4}</p>
                                        `;
                                        timeCentiSeconds = 1400;
                                        timerCountDown = setInterval(() => {
                                            timeCentiSeconds--;
                                            displayTime(timeCentiSeconds);
                                    
                                            // WIN LEVEL 4
                                            if (timeCentiSeconds === 0 && targetNumber4 === myNumber) {
                                                clearInterval(timerCountDown);
                                                level.innerHTML = "Level 5 / 5";
                                                targetNumbCont.innerHTML = `
                                                    <p>Target Number: </p>
                                                    <button class="target-number-generator-5">Generate</button>
                                                    <p class="target-number"></p>
                                                `;
                                                const generator5 = document.querySelector(".target-number-generator-5");
                                                myNumber = 0;
                                                counter.innerHTML = myNumber;
                                                timer.innerHTML = "--:--";

                                                // LEVEL 5 ** IMPOSSIBLE **
                                                generator5.addEventListener("click", function() {
                                                    const targetNumber5 = getRandomInt(115, 123);
                                                    targetNumbCont.innerHTML = `
                                                        <p>Target Number: </p>
                                                        <p class="target-number">${targetNumber5}</p>
                                                    `;
                                                    timeCentiSeconds = 1500;
                                                    timerCountDown = setInterval(() => {
                                                        timeCentiSeconds--;
                                                        displayTime(timeCentiSeconds);
                                                
                                                        // WIN LEVEL 5
                                                        if (timeCentiSeconds === 0 && targetNumber5 === myNumber) {
                                                            clearInterval(timerCountDown);
                                                            level.innerHTML = "Hai vinto... niente... ma hai vinto :)";
                                                            targetNumbCont.innerHTML = `
                                                                <p>Target Number: </p>
                                                                <button class="target-number-generator">Generate</button>
                                                                <p class="target-number"></p>
                                                            `;
                                                            myNumber = 0;
                                                            counter.innerHTML = myNumber;
                                                            timer.innerHTML = "--:--";
                                                
                                                        // LOSE LEVEL 5
                                                        } else if (timeCentiSeconds === 0 && targetNumber5 != myNumber) {
                                                            location.reload();
                                                        }}, (1200 / 100));
                                                    });
                                    
                                            // LOSE LEVEL 4
                                            } else if (timeCentiSeconds === 0 && targetNumber4 != myNumber) {
                                                location.reload();
                                            }}, (1200 / 100));
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
