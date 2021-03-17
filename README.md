# Dice-Game
## Welcome! 👋
a browser based Dice game, for two Players where the play against each other

<h4> <a href="https://victor-cody.github.io/Dice-Game/"> Live Demo 👋</a> </h4>

<img src="img/Dice game game-playing.png" alt="a photo from gameplay">

### Rules
/*
GAME RULES:
*/

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Changing the game to follow these rules:
1. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.(Hint: you can read that value with the.value property in JavaScript.This is a good opportunity to use google to figure this out: )
2. Add another dice to the game, so that there are two dices now.The player looses his current score when one of them is a 1.(Hint: you will need CSS to position the second dice, so take a look at the CSS code
    for the first one.)
