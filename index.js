const cells = document.querySelectorAll(".cells");
const container = document.querySelector(".container");
const table = document.querySelector(".table");
const inputCheckbox = document.querySelector("#checkbox");
const headerText = document.querySelector("#span");
const welcome = document.querySelector("#welcome");
const children = headerText.children;
/////////// INPUTS /////////////////////
const inputsDiv = document.querySelector("#inputs");
const textDiv = document.querySelector("#resultP");
const name1Input = document.querySelector("#p1Input");
const name2Input = document.querySelector("#p2Input");
/////////control buttons//////////////////////////
const bot = document.querySelector("#bot");
const multiplayer = document.querySelector("#mp");
const reset = document.querySelector("#reset");
const start = document.querySelector("#start");
const again = document.querySelector("#newGameButton");
/////////////////   sound effects  ///////////////////////////////////
const buttonClick = new Audio("button-click.wav");
const cellHover = new Audio("cell-hover.wav");
const cellClick = new Audio("laser-gun-shot.wav");
///////////////default values///////////////////////////

let p1Name, p2Name, p1Score, p2Score, array, freeArray, player, result, id, changer, endOfGame, 
winnerExists, defaultStringReplaced, player1, player2, whosTurn, cell,
defaultString = "Let's play again. Choose a role and a game mode",
firstLoad = true;

window.addEventListener("load", ()=>{
    resetF();
    const spinner = document.querySelector(".spinner");
    spinner.classList.add("spinner-hidden");
    spinner.addEventListener("transitionend", ()=>{
    document.body.removeChild(spinner);
    })
})
const cellPressed = e => {
    
        e.target.style.pointerEvents = 'none';
        if (changer == 1) {
            
            e.target.classList.add(player1.role);
            id = e.target.id;
            array[id] = player1.role;
            checkWinner(array, player1.name);
            freeArray = freeArray.filter((value) => { return value != id });

            if (!endOfGame && result < 8) {
                findRandomFreeCell(freeArray);
                ++result;
            }
            ++result;
            if (result == 9 && winnerExists==false) {
                textDiv.innerHTML = "Draw!";
                showResult();   
            }           
        }
        else if (changer == 2) {

            mP(e);              //run multiplayer mode
        }
    }

for (let cell of cells) {
    cell.addEventListener("click", cellPressed);
    playCellAudio();
}

function checkWinner(arr, who) {
    if (
        checkArray(arr[0], arr[1], arr[2]) ||
        checkArray(arr[3], arr[4], arr[5]) ||
        checkArray(arr[6], arr[7], arr[8]) ||
        checkArray(arr[0], arr[3], arr[6]) ||
        checkArray(arr[1], arr[4], arr[7]) ||
        checkArray(arr[2], arr[5], arr[8]) ||
        checkArray(arr[0], arr[4], arr[8]) ||
        checkArray(arr[2], arr[4], arr[6])
    ) {
        for(let cell of cells){
            cell.style.pointerEvents = 'none';
        }
        winnerExists = true;
        decideWinnerName(who);
        showResult();
        endOfGame = true;
    }
}
//checks array values
const checkArray = (a, b, c) => {
    if ((a === b) && (b === c)) {
        return true;
    }
    else {
        return false;
    }
}

function toggleColor(){
    if(inputCheckbox.checked){
        player = "p2";
        document.querySelector("#o").style.backgroundColor = "yellow";
        document.querySelector("#x").style.backgroundColor = "white";
    }
    else{
        player = "p1";
        document.querySelector("#o").style.backgroundColor = "white";
        document.querySelector("#x").style.backgroundColor = "yellow";
    }
}

function showResult() {
    defaultStringReplaced = true;
    document.querySelector("#rulesAndMore").classList.remove("hide");
    document.querySelector("#rulesAndMore").style.backgroundColor = "rgba(20,80,81,1)";
    document.querySelector("#welcomeSpan").classList.add("hide");
    textDiv.classList.remove("hide");
    textDiv.style.textAlign = "center";
    textDiv.style.textAlign = "center";
    name1Input.classList.add("hide");
    name2Input.classList.add("hide");
    start.classList.add("hide");
    inputCheckbox.disabled = false;
    showScores();
}

function decideWinnerName(who) {
        if (player1.name == who){
            
            ++player1.score;
        }
        else{
            
            ++player2.score;;
        }
        textDiv.innerHTML = (`${who} is winner!`);
}

function showScores(){
    headerText.classList.remove("hide");
    welcome.classList.add("hide");
    again.classList.remove("hide");
    children[0].innerHTML = (player1.name);
    children[1].innerHTML = (player1.score);
    children[3].innerHTML = (player2.score);
    children[4].innerHTML = (player2.name);
}


