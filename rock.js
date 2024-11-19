function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user-choice").textContent = `Your Choice: ${userChoice}`;
    document.getElementById("computer-choice").textContent = `Computer Choice: ${computerChoice}`;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = "You Win!";
    } else {
        result = "You Lose!";
    }

    document.getElementById("game-result").textContent = `Result: ${result}`;
}