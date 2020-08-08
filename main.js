// Aaron Zorzi Final Project: Tic Tac Toe Game

// declaration of variables
var xWins = 0;
var oWins = 0;
var ties = 0;
var victorySFX = new Audio('sounds/victory.mp3');
var clickSFX = new Audio('sounds/click.mp3');
var lossSFX = new Audio('sounds/loss.mp3');

// reset the game
function clearBox() {
    victorySFX.currentTime = 0;
    victorySFX.pause();
    lossSFX.currentTime = 0;
    lossSFX.pause();

    document.winner = null;
    inputBox(document.turn + " will start the game!");

    for(i=1;i<10;i++){
        document.getElementById("boxResult"+i).innerHTML = "";
    }
}

// the game begins and randomly generates whose turn it is
function gameStart() {
    document.turn = "X";
    if (Math.random() < 0.5) {
        document.turn = "O";
    }

    document.winner = null;
    inputBox(document.turn + " will start the game!");
}

// sets the turn to either X or O
function inputBox(textInput) {
    document.getElementById("inputBox").innerText = textInput;
}

// determines if player's move is valid and places it if so
function playerMove(gameInput) {
    clickSFX.play();
    if (document.winner != null) {
        inputBox(document.winner + " has already won! Play again?");
    }
    else if (gameInput.innerText == "") {
        gameInput.innerText = document.turn;
        changeTurn();
    }
    else {
        alert("Invalid move");
    }

    for(i=1;i<10;i++){
        if (document.getElementById("boxResult"+i).innerText == "X") {
            document.getElementById("boxResult"+i).style.color = "Red";
        }
    }

     for(i=1;i<10;i++){
        if (document.getElementById("boxResult"+i).innerText == "O") {
            document.getElementById("boxResult"+i).style.color = "Blue";
        }
    }
}

// changes the turn between X and O
function changeTurn() {
    if (winnerCheck(document.turn)) {
        inputBox("Congratulations, " + document.turn + "! You win!");
        victorySFX.play();
        document.winner = document.turn;

        if (document.winner == "X") {
            xWins++;
            document.getElementById("X Wins").innerHTML = "X Wins: " + xWins;
        }

        if (document.winner == "O") {
            oWins++;
            document.getElementById("O Wins").innerHTML = "O Wins: " + oWins;
        }
    }

    else if (document.getElementById("boxResult1").innerHTML != "" &&
        document.getElementById("boxResult2").innerHTML != "" &&
        document.getElementById("boxResult3").innerHTML != "" &&
        document.getElementById("boxResult4").innerHTML != "" &&
        document.getElementById("boxResult5").innerHTML != "" &&
        document.getElementById("boxResult6").innerHTML != "" &&
        document.getElementById("boxResult7").innerHTML != "" &&
        document.getElementById("boxResult8").innerHTML != "" &&
        document.getElementById("boxResult9").innerHTML != "") {
        ties++;
        lossSFX.play();
        inputBox("It's a tie! Play again?");
        document.getElementById("Ties").innerHTML = "Ties: " + ties;
    }

    else if (document.turn == "X") {
        document.turn = "O";
        inputBox(document.turn + ", it's your turn!");
    }

    else {
        document.turn = "X";
        inputBox(document.turn + ", it's your turn!");
    }
}

// checks to see if anyone has won yet
function winnerCheck(move) {
    var result = false;

    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {

        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBoxData(a) == move && getBoxData(b) == move && getBoxData(c) == move) {
        result = true;

    }
    return result;
}

function getBoxData(number) {
    return document.getElementById("boxResult" + number).innerText;
    var snd = new Audio()
}