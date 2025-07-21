const playAgain = document.querySelector('button.play-again')

const imageMaping = {
    paper: './images/icon-paper.svg',
    scissors: './images/icon-scissors.svg',
    rock: './images/icon-rock.svg'
}

const gameStates = {
    tie: 'tie',
    win: 'you win!',
    lose: 'you lose!'
}

const parentItem = document.querySelectorAll('.game_items button');

parentItem.forEach(button => {
    button.addEventListener('click', (event) => {
        const userChoice = event.target.tagName === 'IMG'
        ?event.target.alt
        :event.target.querySelector('img').alt
        
        const computerChoice = Math.floor(Math.random() * 3);
        
        chosen(imageMaping[userChoice],imageMaping[Object.keys(imageMaping)[computerChoice]],userChoice,Object.keys(imageMaping)[computerChoice]
        );

        event.preventDefault();
    })
} )

const chosen = (userImage,computerImage, userClass, computerClass) => {
    const chose = document.getElementById('chose');
    const result = document.getElementById('result');

    const styleUserChoise = document.querySelector('.userChoice button');
    const styleComputerChoise = document.querySelector('.computerChoice button')

    const userResultImage = document.getElementById('userImage');
    const computerResultImage = document.getElementById('computerImage');

    userResultImage.src = userImage;
    computerResultImage.src = computerImage;

    styleUserChoise.classList.add(userClass);
    styleComputerChoise.classList.add(computerClass);

    chose.style.display = 'none';
    result.style.display = 'flex';
    playAgain.style.display = 'flex';

    playAgain.addEventListener('click', () => {
        chose.style.display = 'flex';
        result.style.display = 'none';
        playAgain.style.display = 'none'
        styleUserChoise.classList.remove(userClass);
        styleComputerChoise.classList.remove(computerClass);
    })
    resultGame(userClass, computerClass);
}


const resultGame = (userClass, computerClass) => {
    let winner = ''
    const resultText = document.querySelector('.result_text')
    
    switch (true) {
        case userClass === computerClass:
            winner = "tie";
            break;
        case userClass === "paper" && computerClass === "scissors":
        case userClass === "scissors" && computerClass === "rock":
        case userClass === "rock" && computerClass === "paper":
            winner = "computer";
            break;
        case userClass === "paper" && computerClass === "rock":
        case userClass === "scissors" && computerClass === "paper":
        case userClass === "rock" && computerClass === "scissors":
            winner = "you";
            break;
    }
    
    if(winner === "tie") {
        resultText.textContent = gameStates.tie
    } else if(winner === "you") {
        resultText.textContent = gameStates.win
    } else {
        resultText.textContent = gameStates.lose
    }

    const countScore = document.querySelector('.total');

    let count = parseInt(countScore.textContent);

    
    if (winner === "you") {
        count++; 
        countScore.textContent = count;
    } else if ( winner === "computer") {
        if (parseInt(countScore.textContent) <= 0){
            return parseInt(countScore.textContent)
        } else {
            count--
            countScore.textContent = count
        }
         
    }
}

const ruleButton = document.getElementById('rule');
const ruleImage = document.querySelector('.rule_wrapper')
const closeRule = document.getElementById('closeImg')

ruleButton.addEventListener('click', () => {
        ruleImage.style.display = 'flex'
        document.body.style.background = 'rgb(14, 15, 39) 100%'
});


closeRule.addEventListener('click', () => {
    ruleImage.style.display = 'none'
    document.body.style.background = 'radial-gradient(circle, #1f3756 0%, #141539 100%)'
})

