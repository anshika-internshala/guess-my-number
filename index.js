const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

const element = document.querySelector("#inputNumber");
const button = document.querySelector("#check-btn");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const highScore = document.querySelector(".highscore");
const score = document.querySelector(".score");
const againButton = document.querySelector(".again");

button.addEventListener("click", checkValue);

let scores = 20;

function checkValue() {
    const inputValue = element.value;

    if(inputValue == randomNumber) {
        message.innerHTML = "Correct Guess!!";
        document.querySelector("body").style.backgroundColor = "green";
        number.innerHTML = randomNumber ;
        highScore.innerHTML = scores;
    } else if (inputValue != randomNumber) {
        scores--;
        score.innerHTML = scores;
        highScore.innerHTML = scores;
        inputValue < randomNumber ? message.innerHTML = "too low!!" : message.innerHTML = "too high!!";
    }
}

againButton.addEventListener("click", resetGame);

function resetGame() {
    location.reload();
}










