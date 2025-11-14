let userChoice;

let scoreStr = localStorage.getItem('Score');

let score =  JSON.parse(scoreStr) || {
        win: 0,
        lose: 0,
        tie: 0,
    };

function scoreDisplay() {
    document.getElementById("Score").innerText = `Score:- \nWon : ${score.win} \tLose : ${score.lose} \tTie : ${score.tie}`;
};

function resetScore() {
    score ={
        win: 0,
        lose: 0,
        tie: 0,
    };
}

function ResetButton() {
    localStorage.clear();
    document.getElementById("Result").innerText = '';
    document.getElementById("Score").innerText = '';
    resetScore();
}

function buttonPress(userChoice) {
    const computerChoice = ComputerChoice();
    showResult(userChoice, computerChoice);
}

function ComputerChoice() {
    const random = Math.random() * 3;
    if (random >= 0 && random < 1) {
        return 'Bat';
    } else if (random >= 1 && random < 2) {
        return 'Ball';
    } else {
        return 'Stump';
    }
}

function showResult(userChoice, computerChoice) {
    let resultMsg = getResult(userChoice, computerChoice);
    // alert(`You chose : ${userChoice} \nComputer hose : ${computerChoice} \n${resultMsg}`);
    localStorage.setItem('Score', JSON.stringify(score));
    document.getElementById("Result").innerText = `You chose : ${userChoice} \nComputer chose : ${computerChoice} \n${resultMsg}`;
    scoreDisplay();
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        // alert(`You chose : ${userChoice} \nComputer hose : ${computerChoice} \nIt was a Tie !!!`);
        // document.getElementById("Result").innerText = `You chose : ${userChoice} \nComputer chose : ${computerChoice} \nIt was a Tie !!!`;
        score.tie++;
        return `It's a tie !`;

    }
    else if (userChoice === 'Bat') {
        if (computerChoice === 'Ball') {
            score.win++;
            return `User Won !!!`;
        }
        else if (computerChoice === 'Stump') {
            score.lose++;
            return `Computer Won !!!`;
        }

    }
    else if (userChoice === 'Ball') {
        if (computerChoice === 'Bat') {
            score.lose++;
            return `Computer Won !!!`;
        }
        else if (computerChoice === 'Stump') {
            score.win++;
            return `User Won !!!`;
        }
    }
    else if (userChoice === 'Stump') {
        if (computerChoice === 'Ball') {
            score.lose++;
            return `Computer Won !!!`;
        }
        else if (computerChoice === 'Bat') {
            score.win++;
            return `User Won !!!`;
        }
    }
}