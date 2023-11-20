(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const input1 = document.querySelector('#name1').value;
    const input2 = document.querySelector('#name2').value;

    const gameData = {
        dice: ['./images/1die.png', './images/2die.png', './images/3die.png', './images/4die.png', './images/5die.png', './images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };
/* 
    //This gets the current player: 
    gameData.players[gameData.index]

    //This gets the first die and the second die: 
    gameData.dice[gameData.roll1-1]
    gameData.dice[gameData.roll2-1]

    //This gets the score of the current player: 
    gameData.score[gameData.index]

    //This gets the index, or turn
    gameData.index

    //This gets the individual dice values and the added dice value
    gameData.roll1
    gameData.roll2
    gameData.rollSum

    //This gets the winning threshold
    gameData.rollSum */

    //console.log(gameData.players[gameData.index]);


    startGame.addEventListener('click', function(){
        //random set of game index

        // document.querySelector('#play1').innerHTML= `${input1}`;
        // document.querySelector('#play2').innerHTML= `${input2}`;

        document.querySelector('#people').className=
        'showing'; 
  
        document.querySelector('#alien1').className=
        'showing'; 
        document.querySelector('#alien2').className=
        'showing'; 

        gameData.index = Math.round(Math.random());
        console.log(gameData.index);    

        gameControl.className = 'hidden';
        document.querySelector('#exit').innerHTML = '<button id="quit">Wanna quit?</button>';
        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML= '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 -1]}"> <img src="${gameData.dice[gameData.roll2 -1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        //console.log(gameData.rollSum);

        if(gameData.rollSum === 2){
            //console.log("snake eyes!");
            game.innerHTML += '<p>Oh snap! Snake Eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn,2000);

        }
        else if(gameData.roll1 === 1 || gameData.roll2 ===1){
            //console.log("A one was rolled!");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn,2000);
        }
        else {
            //console.log("The game continues");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button> <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                throwDice();
            });


            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            //check winning conditions
            checkWinningConditions();
        }
    }

    function checkWinningConditions(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins the game with ${gameData.score[gameData.index]} points</h2>`;
            actionArea.innerHTML='';
            document.getElementById('quit').innerHTML = "Start a new game";
            document.getElementById('quit').style.backgroundColor = "rgb(90, 255, 123)";
            document.getElementById('quit').style.borderColor = "green";
            document.getElementById('quit').style.color = "rgb(0, 75, 59)";
        }

        else{
            //show current score
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML= `<p>${gameData.players[0]} SCORE: <strong>${gameData.score[0]}</strong> ${gameData.players[1]} SCORE: <strong>${gameData.score[1]}</strong> </p>`;
        }

    //if user clicks the "close" button on the overlay, the event listener will switch the overlay from showing to hidden, redirecting user back to the main page 
    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className=
        'hidden'; 
    });

    document.addEventListener('keydown',function(event){
        if(event.key === 'Escape'){
            document.querySelector('#overlay').className= 'hidden';
        }
    });    
    
})();