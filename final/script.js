(function(){
    'use strict'
    console.log('reading JS');

    //variables for sounds, game sections, and buttons
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const sound1 = new Audio('./sounds/futuristic.mp3');
    const sound2 = new Audio('./sounds/explosion.mp3');
    const sound3 = new Audio('./sounds/buttonswitch.mp3');

    //variables for the game data
    const gameData = {
        dice: ['./images/1die.png', './images/2die.png', './images/3die.png', './images/4die.png', './images/5die.png', './images/6die.png'],
        players: ['Alien 1', 'Alien 2'],
        // characters:['./images/alien1.png','./images/alien3.png', './images/alien4.png'],
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
        
        //once play button is clicked, characters and game shows up
        document.querySelector('#play1').className=
        'showing'; 
        document.querySelector('#play2').className=
        'showing'; 
        document.querySelector('#alien1').className=
        'showing'; 
        document.querySelector('#alien2').className=
        'showing'; 
        document.querySelector('#sect1').className=
        'showing'; 
        document.querySelector('#sect2').className=
        'showing'; 
        document.querySelector('footer').className='showing';
   

        //the user-inputted values for player names will replace the default "player 1" or "player 2" names
        document.querySelector('#play1').innerHTML= `${document.querySelector('#name1').value}`;
        document.querySelector('#play2').innerHTML= `${document.querySelector('#name2').value}`;

        //if no values are inputted, the default names remain for player 1 and 2
        if(document.querySelector('#name1').value==''){
            document.querySelector('#play1').innerHTML="Alien 1";
            document.querySelector('#sect1').className=
            'hidden'; 
        }
        if(document.querySelector('#name2').value==''){
            document.querySelector('#play2').innerHTML="Alien 2";
            document.querySelector('#sect2').className=
            'hidden'; 
        }

        //randomize player turn
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);    

        //make the starter page disappear
        gameControl.className = 'hidden';

        //create a quit button that reloads game when pressed
        document.querySelector('#exit').innerHTML = '<button id="quit">Wanna quit?</button>';
        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        setUpTurn();
    });


    //when mouse hovers over play button, play sound
    startGame.addEventListener('mouseover', function(){
        sound1.play();
    });


    //set up first turn for random player
    function setUpTurn(){
        //set up player, button & instructions
        game.innerHTML = `<p>Throw meteors for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML= '<button id="roll">Throw Meteors</button>';
        
        //click on 'throw meteors' button to throw meteors
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });

        //play click sound when hovering on button
        document.getElementById('roll').addEventListener('mouseover', function(){
            sound3.play();
        });

        //play dice roll sound when button is clicked
        document.getElementById('roll').addEventListener('mousedown', function(){
            sound2.play();
        });
    }

    //randomize dice roll values  
    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Throw meteors for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 -1]}"> <img src="${gameData.dice[gameData.roll2 -1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        //console.log(gameData.rollSum);

        //if both dye hold values of 1, then its snake eyes
        if(gameData.rollSum === 2){
            //console.log("snake eyes!");
            //write out snake eyes! and set score back to 0
            game.innerHTML += '<p>Oh snap! Snake Eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn,2000);

        }
        //if either dye roll a one then skip turn and switch players 
        else if(gameData.roll1 === 1 || gameData.roll2 ===1){
            //console.log("A one was rolled!");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, you threw a cold meteor, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn,2000);
        }
        else {
            //console.log("The game continues");
            //if there are no ones in the values, player can either continue rolling or pass turn
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            //add new button options for throw again or pass
            actionArea.innerHTML = '<button id="rollagain">Throw Again</button> <button id="pass">Pass</button>';

            //clicking the throw again button will randomize meteor values again
            document.getElementById('rollagain').addEventListener('click', function(){
                throwDice();
            });

            //add click and dice roll sounds when hovering and pressing throw again button
            document.getElementById('rollagain').addEventListener('mouseover', function(){
                sound3.play();
            });
            document.getElementById('rollagain').addEventListener('mousedown', function(){
                sound2.play();
            });

            //if pass button is clicked, switch players turn
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            //add click sound when hovering on pass button
            document.getElementById('pass').addEventListener('mouseover', function(){
                sound3.play();
            });

            //check winning conditions
            checkWinningConditions();
        }
    }

    //show ending game score if player wins
    function checkWinningConditions(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} takes over the galaxy with <strong>${gameData.score[gameData.index]}</strong> points</h2>`;
            actionArea.innerHTML='';

            //swap quit button to a start new game option 
            document.getElementById('quit').innerHTML = "Start a new game";
            document.getElementById('quit').style.backgroundColor = "rgb(90, 255, 123)";
            document.getElementById('quit').style.borderColor = "white";
            document.getElementById('quit').style.color = "rgb(0, 75, 59)";

            //add sound when hovering on button
            document.getElementById('quit').addEventListener('mouseover', function(){
                sound1.play();
            });
        }

        else{
            //show current score
            showCurrentScore();
        }
    }

    //display current scores of both players
    function showCurrentScore(){
        score.innerHTML= `<p>${gameData.players[0]} SCORE: <strong>${gameData.score[0]}</strong> ${gameData.players[1]} SCORE: <strong>${gameData.score[1]}</strong> </p>`;
        }

    //if user clicks the "close" button on the overlay, the event listener will switch the overlay from showing to hidden, redirecting user back to the main page 
    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className=
        'hidden'; 
        document.querySelector('#panelll').className=
        'showing'; 
    });

    //overlay also disappears when escape key is pressed
    document.addEventListener('keydown',function(event){
        if(event.key === 'Escape'){
            document.querySelector('#overlay').className= 'hidden';
        }
    });       

    document.querySelector('#next1').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#panelll').className=
        'hidden'; 
        document.querySelector('#panel').className=
        'showing'; 
    });

    document.querySelector('#next2').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#panel').className=
        'hidden'; 
        document.querySelector('#panell').className=
        'showing'; 
    });

    document.querySelector('#next3').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#panell').className=
        'hidden'; 
        document.querySelector('#panelll').className=
        'hidden'; 
        document.querySelector('#panel').className=
        'hidden';
        document.querySelector('#overlay').className=
        'hidden';  
    });


    document.querySelector('#canceler').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#panell').className=
        'hidden'; 
        document.querySelector('#panelll').className=
        'hidden'; 
        document.querySelector('#panel').className=
        'hidden'; 
        document.querySelector('#overlay').className=
        'showing'; 
    });

    document.querySelector('#canceler2').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#panell').className=
        'hidden'; 
        document.querySelector('#panelll').className=
        'showing'; 
        document.querySelector('#panel').className=
        'hidden'; 
        document.querySelector('#overlay').className=
        'hidden'; 
    });

    document.querySelector('#canceler3').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#panell').className=
        'hidden'; 
        document.querySelector('#panelll').className=
        'hidden'; 
        document.querySelector('#panel').className=
        'showing'; 
        document.querySelector('#overlay').className=
        'hidden'; 
    });


    document.querySelector('#aliens').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#aliens').src= './images/pick1.png';
        document.querySelector('#alien3').src= './images/alien3.png';
        document.querySelector('#alien4').src= './images/alien4.png';
        document.querySelector('#alien1').src = './images/alien1.png';
    });

    document.querySelector('#alien3').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#alien3').src= './images/pick3.png';
        document.querySelector('#aliens').src= './images/alien1.png';
        document.querySelector('#alien4').src= './images/alien4.png';
        document.querySelector('#alien1').src = './images/alien3.png';
    });

    document.querySelector('#alien4').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#alien4').src= './images/pick2.png';
        document.querySelector('#aliens').src= './images/alien1.png';
        document.querySelector('#alien3').src= './images/alien3.png';
        document.querySelector('#alien1').src = './images/alien4.png';
    });

    document.querySelector('#alien5').addEventListener('click',function(){
        document.querySelector('#alien5').src= './images/pick3.png';
        document.querySelector('#alien6').src= './images/alien1.png';
        document.querySelector('#alien7').src= './images/alien4.png';
        document.querySelector('#alien2').src = './images/alien3.png';
    });

    document.querySelector('#alien6').addEventListener('click',function(){
        document.querySelector('#alien6').src= './images/pick1.png';
        document.querySelector('#alien5').src= './images/alien3.png';
        document.querySelector('#alien7').src= './images/alien4.png';
        document.querySelector('#alien2').src = './images/alien1.png';
    });

    document.querySelector('#alien7').addEventListener('click',function(){
        document.querySelector('#alien7').src= './images/pick2.png';
        document.querySelector('#alien5').src= './images/alien3.png';
        document.querySelector('#alien6').src= './images/alien1.png';
        document.querySelector('#alien2').src = './images/alien4.png';
    });
    
})();