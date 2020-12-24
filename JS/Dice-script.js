/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Changing the game to follow these rules:
1. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.(Hint: you can read that value with the.value property in JavaScript.This is a good opportunity to use google to figure this out: )
2. Add another dice to the game, so that there are two dices now.The player looses his current score when one of them is a 1.(Hint: you will need CSS to position the second dice, so take a look at the CSS code
    for the first one.)
*/
// initializing our variables
let
    roundScores ,
    activePlayer = 1,
    scores,
    currentPlayer,
    winingScore,
    gamePlaying;

window.addEventListener('load', init)

const setWiningScoreField = document.getElementById('set-score-form');
const submitWiningScore = document.getElementById('set-score');

setWiningScoreField.addEventListener('submit', (e) => {
    e.preventDefault()
    if (submitWiningScore.value !== '') {
        winingScore = submitWiningScore.value;

        console.log(`the new wining score is ${winingScore}`);
        hideInputField()
    }
})
//initializing our Elements
const
    score1 = document.getElementById('score-1'),
    score2 = document.getElementById('score-2'),
    currentScore1 = document.getElementById('current-1'),
    currentScore2 = document.getElementById('current-2'),
    player_1_panel = document.getElementById('player-1'),
    player_2_panel = document.getElementById('player-2');

//creating our dices  
const dice1 = document.getElementById('dice-1');
const dice2 = document.getElementById('dice-2');

//New game button functionality
const New_Game = document.getElementById('btn-new');
New_Game.addEventListener('click', init)

//Role Dice button functionality
const Roll_Dice = document.getElementById('btn-roll');
Roll_Dice.addEventListener('click', rollDice)

//Hold Dice button functionality
const Hold_Dice = document.getElementById('btn-hold');
Hold_Dice.addEventListener('click', hold);

//our game initializing function
function init() {
    winingScore = 100;
    hideDice()
    score1.textContent = 0;
    score2.textContent = 0;
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;

    activePlayer = 1;
    currentPlayer = 0;
    scores = [0, 0]
    roundScores = 0;
    gamePlaying = true;

    setWiningScoreField.style.display = 'flex';

    document.getElementById('player-1-name').textContent = 'Player 1';
    document.getElementById('player-2-name').textContent = 'Player 2';
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove('winner');
    // document.querySelector(`.player-1-panel`).classList.remove('winner');
    // document.querySelector(`.player-2-panel`).classList.remove('winner');
    player_1_panel.classList.remove('winner');
    player_2_panel.classList.remove('winner');

    player_1_panel.classList.add('active-player');
    player_2_panel.classList.remove('active-player');
    console.log(`the default wining score is ${winingScore}`);

    
}

//Roll Dice
function rollDice() {
    if (gamePlaying) {
        //hiding our input field so that players cant change the score in between game play
        if (setWiningScoreField.style.display = 'flex') hideInputField();
        //1.generating a Random number btw 1 and 6
        const diceScore1 = Math.floor((Math.random() * 6) + 1);
        const diceScore2 = Math.floor((Math.random() * 6) + 1);

        //2. displaying the result on the page
        dice1.src = `img/dice-${diceScore1}.png`;
        dice2.src = `img/dice-${diceScore2}.png`;
        showDice()
        //update the roundscore if the result is Not! a 1
        if (diceScore1 !== 1 && diceScore2 !== 1) {
            //Add the score and update the roundscore
            roundScores += diceScore1 + diceScore2;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScores;
            // console.log(diceScore1, diceScore2);
        } else {
            //move to the nextPlayer
            nextPlayer()
        }
    }
};

//NextPlayer 
function nextPlayer (){
    if (gamePlaying) {
        getActivePlayer()
        roundScores = 0;
        currentScore1.textContent = '0';
        currentScore2.textContent = '0';
        player_1_panel.classList.toggle('active-player')
        player_2_panel.classList.toggle('active-player')
        hideDice()
    }
}

// Hold Score 
function hold() {
    if (gamePlaying) {
        //add the CURRENT score to the GLOBAL score
        scores[currentPlayer] += roundScores;

        //UPDATE the UI
        let viewScore = document.querySelector(`.score-${currentPlayer}`);
        viewScore.textContent = scores[currentPlayer];

        //CHECK if A player WON the GAME!
        if (Number(viewScore.textContent) >= winingScore) {
            document.querySelector(`.player-${activePlayer}-panel #player-${activePlayer}-name`).textContent = 'Winner!';
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active-player');
            hideDice()
            gamePlaying = false;
        } else {
            //Next Player
            nextPlayer();
        }
    }
}

// Hideing our dice
const hideDice = () => {
    dice1.classList.add('hide')
    dice2.classList.add('hide')
};

//Displaying the dice 
const showDice = () => {
    dice1.classList.remove('hide')
    dice2.classList.remove('hide')
};

const getActivePlayer = () => {
    //Trenery Operators
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
};

//Hiding the input field 
const hideInputField = () => {
    setWiningScoreField.style.display = 'none';
    submitWiningScore.value = '';
}
