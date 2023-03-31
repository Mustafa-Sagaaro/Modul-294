function getInput(text) {
    let userInput = prompt(text);
    userMatches(userInput, randomNumber);
};

function userMatches(userInput, randomNumber) {
    if (userInput == randomNumber) {
        alert("You guessed correctly");
        location.reload();
    } else if (userInput > randomNumber) {
        getInput("The Number you guessed is too Big try again!\nGuess the number between 1 and 100.");
    } else if (userInput < randomNumber) {
        getInput("The Number you guessed was too small!\nGuess the number between 1 and 100.");
    };
};


const randomNumber = Math.floor(Math.random(1, 100)*100);
document.title = randomNumber;
getInput("Guess the number between 1 and 100.");