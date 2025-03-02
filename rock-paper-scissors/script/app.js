const playAgain = document.querySelector('button.play-again')

const imageMaping = {
    'paper': './images/icon-paper.svg',
    'scissors': './images/icon-scissors.svg',
    'rock': './images/icon-rock.svg'
}

const parentItem = document.querySelectorAll('.game_items button');

parentItem.forEach(button => {
    button.addEventListener('click', (event) => {
        const userChoice = event.target.tagName === 'IMG'
        ?event.target.alt
        :event.target.querySelector('img').alt
        
        const computerChoice = Math.floor(Math.random() * 3);
        
        choseen(imageMaping[userChoice],imageMaping[Object.keys(imageMaping)[computerChoice]],userChoice,Object.keys(imageMaping)[computerChoice]
        );

        event.preventDefault();
    })
} )

const choseen = (userImage,computerImage, userClass, computerClass) => {
    const chose = document.getElementById('chose');
    const result = document.getElementById('result');

    const styleUserChoise = document.querySelector('.userChoice button');
    const styleComputerChoise = document.querySelector('.computerChoice button')

    const userResultImage = document.getElementById('userImage');
    const computerResultImage = document.getElementById('computerImage');

    const resultText = document.querySelector('.result_text')
    
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

    let winner = ''

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
        resultText.textContent = "tie"
    } else if(winner === "you") {
        resultText.textContent = "you win!"
    } else {
        resultText.textContent = "you lose!"
    }

    const countScore = document.querySelector('.total');

    let count = parseInt(countScore.textContent) || 0;

    
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



